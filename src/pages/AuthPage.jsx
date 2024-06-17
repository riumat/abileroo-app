import { useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../Components/Logo';
import Register from '../Components/Auth/Register';
import Login from '../Components/Auth/Login';
import { axiosBase } from '../utils/constants';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/userSlice';
import { useTranslation } from 'react-i18next';
import LangToggle from '../Components/LangToggle';

const setLocalRef = (dispatch, data, token) => {
  const email = data.email;
  const username = data.email.split("@").at(0);
  dispatch(
    login({
      email: email,
      username: username,
      token: token,
    }));

  localStorage.setItem("credentials", JSON.stringify({ email: email, username: username }));
  localStorage.setItem("token", JSON.stringify(token))
}

const AuthPage = ({ setIsLogged }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isToSign, setIsToSign] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "auth-page" });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (!isToSign) {
      setIsLoading(true)

      const body = new FormData();
      body.append("username", data.email);
      body.append("password", data.password);

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
            setLocalRef(dispatch, data, res.data.token);
            setIsLogged(true);
            setIsLoading(false);
            navigate("/home");
          }
        })
        .catch(error => {
          if (error.response.status === 400) {
            setIsLoading(false);
            setIsWrong(true)
          } else {
            console.log(error)
          }
        })
    }
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <ClipLoader />
      </div>
    )
  }

  return (
    <div className='h-full w-full flex items-center justify-center'>

      <div className='flex flex-col gap-5 rounded-xl w-[450px] bg-white p-7'>
        <div className='flex items-center justify-center gap-2'>
          <Logo />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-[25px] text-emerald-900 font-semibold text-center'>{t("greet")}</p>
          <LangToggle />
          <p className='text-emerald-700 text-[14px] text-center'>{t("desc")}</p>
        </div>

        <Login
          isWrong={isWrong}
          onSubmit={onSubmit}
          isToSign={isToSign}
        />

        <div className='border-t border-emerald-500 pt-3'>
          <p
            className='text-[13px] text-emerald-700 text-center cursor-pointer'
            onClick={() => setIsToSign(prev => !prev)}
          >
            {`${isToSign ? t("switch.register") : t("switch.login")}`}
          </p>

        </div>
      </div >
    </div >
  );
}

export default AuthPage;
