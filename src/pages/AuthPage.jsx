import { useState } from 'react';
import Logo from '../Components/Logo';
import Login from '../Components/Auth/Login';
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import LangToggle from '../Components/LangToggle';
import { fulfilled, loginError, loginSuccess, pending } from '../redux/auth/authSlice';
import { axiosBase } from '../utils/axios.config';

const setLocalRef = (dispatch, data, token) => {
  const email = data.email;
  const username = data.email.split("@").at(0);
  dispatch(
    loginSuccess({
      userInfo: {
        email: email,
        username: username
      },
      token: token,
    }));
}

const AuthPage = () => {
  const { isLoading } = useSelector(state => state.auth)
  const [isToSign, setIsToSign] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "auth-page" });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (!isToSign) {
      dispatch(pending());

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
          if (res?.status === 200) {
            dispatch(fulfilled())
            setLocalRef(dispatch, data, res.data.token);
          }
        })
        .catch(error => {
          dispatch(fulfilled())
          if (error?.response?.status === 400) {
            dispatch(loginError());
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
