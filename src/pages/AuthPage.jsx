import { useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../Components/Logo';
import Register from '../Components/Auth/Register';
import Login from '../Components/Auth/Login';
import { axiosBase } from '../utils/constants';
import axios from 'axios';
import cookie from "react-cookies"
import { ClipLoader } from 'react-spinners';


const AuthPage = ({ setIsLogged }) => {
  const [isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isToSign, setIsToSign] = useState(false);
  const [error, setError] = useState("");
  const [wrong, setWrong] = useState("");

  const usernameChange = (value) => {
    setUsername(value);
  }

  const passwordChange = (value) => {
    setPassword(value);
  }
  const emailChange = (value) => {
    setEmail(value);
  }

  const validate = (value) => {
    setError("");
    if (value === "") {
      setError("Please fill all fields.");
      return false;
    }
    return true;
  }

  const submitHandle = (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (!validate(username) /* || !validate(email) */ || !validate(password)) {
      setIsLoading(false);
      return;
    }

    const body = new FormData();
    body.append("username", username);
    body.append("password", password);

    axiosBase({
      url: "login-token/",
      method: "post",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(res => {

        if (res.status === 200) {
          const credentials = {
            username: username,
            password: password
          }
          localStorage.setItem("credentials", JSON.stringify(credentials));
          localStorage.setItem("token", res.data.token)

          setUsername("");
          setPassword("");
          setIsLogged(true);
          setIsLoading(false);
          navigate("/home");
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          setIsLoading(false);
          setWrong("Wrong username or password.")
        }
      })
  }


  if (isLoading){
    return(
      <div className='w-full h-full flex justify-center items-center'>
        <ClipLoader/>
      </div>
    )
  }

  return (
    
    <div className='h-full w-full flex items-center justify-center'>
      
      <div className='flex flex-col gap-5 rounded-xl w-[450px] bg-white p-7'>
        <div className='flex items-center justify-center gap-2'>
          <Logo />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[25px] text-emerald-900 font-semibold text-center'>Welcome back!</p>
          <p className='text-emerald-700 text-[14px] text-center'>Please enter your credentials to continue</p>
        </div>
        {isToSign ? (
          <Register
            error={error}
            usernameChange={usernameChange}
            username={username}
            emailChange={emailChange}
            email={email}
            passwordChange={passwordChange}
            password={password}
            submitHandle={submitHandle}
          />
        ) : (
          <Login
            error={error}
            wrong={wrong}
            usernameChange={usernameChange}
            username={username}
            passwordChange={passwordChange}
            password={password}
            submitHandle={submitHandle}
          />
        )
        }

        <div className='border-t border-emerald-500 pt-3'>
          <p
            className='text-[13px] text-emerald-700 text-center cursor-pointer'
            onClick={() => setIsToSign(prev => !prev)}
          >
            {`${isToSign ? "Already have an account?" : "Dont have an account?"}`}
          </p>

        </div>
      </div >
    </div >
  );
}

export default AuthPage;
