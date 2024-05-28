import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Logo from '../Components/Logo';


const AuthPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isToSign, setIsToSign] = useState(false);
  const [error, setError] = useState("");

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
    e.preventDefault();
    if (!validate(username) /* || !validate(email) */ || !validate(password)) {
      return;
    }
    axios.get("mockLogin.json", { //login/ METHOD=POST
      username: username,
      password: password,
    })
      .then(res => res.data)
      .catch((error) => console.log(error));

    const credentials={
      "username":username,
      "passoword":password
    }
    localStorage.setItem("credentials",JSON.stringify(credentials));
    setUsername("");
    setPassword("");
    navigate("/home");

  }

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='flex flex-col gap-5 rounded-xl w-[450px] bg-white p-7'>
        <div className='flex items-center justify-center gap-2'>
          <Logo />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[25px] text-slate-800 font-semibold text-center'>Welcome back!</p>
          <p className='text-slate-500 text-[14px] text-center'>Please enter your credentials to continue</p>
        </div>
        {isToSign ? (
          <form className='flex flex-col gap-4 p-5 '>

            <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-slate-400" : "border-red-500"}`}>
              <p className={`text-[11px]  ${error === "" ? "" : "text-red-500"}`}>Email</p>

              <input
                required
                name='email'
                type="email"
                className='rounded-xl focus:outline-none '
                onChange={(e) => emailChange(e.target.value)}
                value={email}
              />
            </div>

            <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-slate-400" : "border-red-500"}`}>
              <p className={`text-[11px]  ${error === "" ? "" : "text-red-500"}`}>Email Address/Username</p>
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
              <p className={`text-[11px]  ${error === "" ? "" : "text-red-500"}`}>Password</p>

              <input
                required
                name='password'
                type="password"
                className='rounded-xl focus:outline-none '
                onChange={(e) => passwordChange(e.target.value)}
                value={password}
              />
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer' />
              <p className='text-[14px] text-slate-600'>Keep me logged in</p>
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
        ) : (
          <form className='flex flex-col gap-4 p-5 '>

            <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-slate-400" : "border-red-500"}`}>
              <p className={`text-[11px]  ${error === "" ? "" : "text-red-500"}`}>Email Address/Username</p>
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
              <p className={`text-[11px]  ${error === "" ? "" : "text-red-500"}`}>Password</p>

              <input
                required
                name='password'
                type="password"
                className='rounded-xl focus:outline-none '
                onChange={(e) => passwordChange(e.target.value)}
                value={password}
              />
            </div>

            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer' />
              <p className='text-[14px] text-slate-600'>Keep me logged in</p>
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
        )
        }

        <div className='border-t border-slate-400 pt-3'>
          <p
            className='text-[13px] text-slate-600 text-center cursor-pointer'
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
