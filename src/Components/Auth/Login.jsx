
const Login = ({ error, usernameChange,username, passwordChange, password, submitHandle }) => {
  return (
    <form className='flex flex-col gap-4 p-5 '>

      <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-emerald-700" : "border-red-500"}`}>
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
      <div className={`p-3 rounded-xl border text-[15px] ${error === "" ? "border-emerald-700" : "border-red-500"}`}>
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
        <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer border-emerald-700' />
        <p className='text-[14px] text-emerald-700'>Keep me logged in</p>
      </div>

      <button
        onClick={submitHandle}
        type="submit"
        className='p-2 bg-emerald-700 rounded-xl focus:outline-none cursor-pointer text-white hover:bg-emerald-700 hover:text-black transition-colors'
      >Log In</button>

      <div>
        <p className='text-red-500 text-[15px]'>{error}</p>
      </div>
    </form>

  )
}

export default Login