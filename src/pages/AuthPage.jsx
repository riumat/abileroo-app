import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { SiDeliveroo } from "react-icons/si";


const AuthPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isToSign, setIsToSign] = useState(false);
  const [error, setError] = useState("");

  const usernameChange = (value) => {
    setUsername(value);
  }

  const passwordChange = (value) => {
    setPassword(value);
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
    e.preventDefault();
    if (!validate(username) /* || !validate(email) */ || !validate(password)) {
      return;
    }
    axios.get("mockLogin.json", { //login/ METHOD=POST
      username: username,
      password: password,
    })
      .then(res => console.log(res.data))
      .catch((error) => console.log(error));

    setUsername("");
    setPassword("");
    navigate("/home");

  }

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='flex flex-col gap-5 rounded-xl w-[350px] bg-white p-7'>
        <div className='flex items-center justify-center gap-2'>
          <SiDeliveroo className='w-5 h-5' />
          <p className='text-[18px] '>Abileroo</p>
        </div>
        <div>
          <p className='text-[25px] text-blue font-semibold text-center'>Welcome back!</p>
          <p className='text-slate-400'>Please enter your credentials to continue</p>
        </div>
        <form className='flex flex-col gap-4 p-5 '>

          <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-slate-400" : "border-red-500"}`}>
            <p className={`text-[11px]  ${error===""?"":"text-red-500"}`}>Email Address/Username</p>
            <input
              required
              name='username'
              type="text"
              className='rounded-xl focus:outline-none '
              onChange={(e) => usernameChange(e.target.value)}
              value={username}
            />
          </div>
          <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-slate-400" : "border-red-500"}`}>
            <p className={`text-[11px]  ${error===""?"":"text-red-500"}`}>Password</p>

            <input
              required
              name='password'
              type="password"
              className='rounded-xl focus:outline-none '
              onChange={(e) => passwordChange(e.target.value)}
              value={password}
            />
          </div>

          <button
            onClick={submitHandle}
            type="submit"
            className='p-2 bg-slate-700 rounded-xl focus:outline-none cursor-pointer text-white hover:bg-slate-200 hover:text-black transition-colors'
          >Log In</button>

          <div>
            <p className='text-red-500 text-[15px]'>{error}</p>
          </div>
        </form>
      </div>
    </div >
  );
}

export default AuthPage;
