import { useState } from 'react';
import Logo from '../Components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getLogin, getRegister } from '../redux/auth/authSlice';
import TranslateDropdown from '../Components/Navbar/TranslateDropdown';
import AuthForm from '../Components/Auth/AuthForm';
import LoadingDisplay from '../Components/LoadingDisplay';

const AuthPage = () => {
  const { isLoading } = useSelector(state => state.auth)
  const [isToSign, setIsToSign] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "auth-page" });
  const dispatch = useDispatch();

  const onSubmit = data => {
    if (!isToSign) {
      dispatch(getLogin(data));
    } else {
      dispatch(getRegister(data));
    }
  }

  if (isLoading) return <LoadingDisplay />

  return (
    <div className='h-full w-full flex items-center justify-center bg-light'>

      <div className='flex flex-col gap-5 rounded-xl w-[450px] bg-light p-7'>
        <div className='flex items-center justify-center gap-2'>
          <Logo />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-[25px]  font-semibold text-center'>{t("greet")}</p>
          <TranslateDropdown />
          <p className=' text-[14px] text-center'>{t("desc")}</p>
        </div>

        <AuthForm
          onSubmit={onSubmit}
          isToSign={isToSign}
        />

        <div className='border-t border-orange-900 pt-3'>
          <p
            className='text-[13px] text-center cursor-pointer'
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
