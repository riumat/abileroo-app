import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AuthPage = () => {
const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usernameChange = (value) => {
    setUsername(value);
  }

  const passwordChange = (value) => {
    setPassword(value);
  }

  /* const validate = (value) => {
    setError("");
    if (value === "") {
      setError("Compilare tutti i campi");
      return false;
    }
    return true;
  } */

  const submitHandle = (e) => {
    e.preventDefault();
   /*  if (!validate(email) || !validate(email) || !validate(password)) {
      return;
    } */
    axios.get("mockLogin.json", { //login/ METHOD=POST
      username: username,      
      password: password,
    })
      .then(res => console.log(res.data) )
      .catch((error) => console.log(error));

    setUsername("");
    setPassword("");
    navigate("/home");
    
  }

  return (
      <form className='flex flex-col gap-4 mt-5 mx-auto p-2 rounded-xl w-[350px] '>
        <p className='text-center text-[30px]'>Log In</p>
        <input
          required
          name='username'
          type="text"
          className='p-2 bg-slate-600 rounded-xl focus:outline-none text-white'
          onChange={(e) => usernameChange(e.target.value)}
          value={username}
          placeholder='Username'
        />
        <input
          required
          name='password'
          type="password"
          className='p-2 bg-slate-600 rounded-xl focus:outline-none text-white'
          onChange={(e) => passwordChange(e.target.value)}
          value={password}
          placeholder='Password'
        />
        <button
          onClick={submitHandle}
          type="submit"
          className='p-2 bg-slate-500 rounded-xl focus:outline-none cursor-pointer text-white hover:bg-slate-200 hover:text-black transition-colors'
        >Log In</button>

        <div>
          <p className='text-red-400'>{error}</p>
        </div>
      </form>
  );
}

export default AuthPage;
