import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { m, noticeSendVerifyCode, postLogin, useIdentityStore } from 'official-common';
import './Identity.scss'

type LoginProps = {
  /* 正在登录的邮箱 */
  email?: string;
};
const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const { setIdentity } = useIdentityStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // 根据是否有email来判断从邮箱开始登录，还是已经注册过要开始验证码登录
  const navigate = useNavigate();
  const jumpRegister = () => {
    navigate('/identity/register');
  };
  const onSubmitEmail = async (data: Record<string, string>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    console.log('submit data: ', data);
    await noticeSendVerifyCode(data);
    setEmail(data.email);
    setIsLoading(false);
  };
  const onSubmitVerifyCode = async (data: Record<string, string>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const identity = await postLogin({
      ...data,
      email,
    });
    setIsLoading(false);
    setIdentity(identity);
    m.success('Login Success');
    navigate('/card/add');
  };
  return <div className="login-register-body">
    <div className="border-line"></div>
    <span className="section-title-font">Login to your account</span>
    <span className="tip-text">Enter your email below to login to your account</span>
    {
      !email
      ? <form className="login-form" onSubmit={handleSubmit(onSubmitEmail)}>
          <input key="email" className="form-field" placeholder="name@example.com" {...register("email", {
            required: "email is required.",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })} />
          {errors?.email?.type === "required" && <p className="error-message">email is required</p>}
          {errors?.email?.type === "pattern" && (
            <p className="error-message">email must be valid format</p>
          )}
          <input type='submit' className="submit-button action-button" value="Login with Email" />
        </form>
      : <form className="login-form" onSubmit={handleSubmit(onSubmitVerifyCode)}>
          <input key='code' className="form-field" placeholder="ENTER YOUR 6-DIGIT CODE" {...register("code", {
            required: "code is required.",
            pattern: /^\d{6}$/i,
          })} autoComplete="off" />
          {errors?.code?.type === "required" && <p className="error-message">code is required</p>}
          {errors?.code?.type === "pattern" && (
            <p className="error-message">code must be 6 digit number</p>
          )}
          <input type='submit' className="submit-button action-button" value="Verify Code" />
        </form>
    }
    <div className="tip-text resend-tip">Resend code in 48 seconds</div>
    <div className="or-line">
      <div></div>
      <span className="tip-text">OR</span>
      <div></div>
    </div>
    <button className="switch-button action-button" onClick={() => jumpRegister()}>Register</button>
    <div className="agree-terms tip-text">By clicking continue,you agree to our terms of use.</div>
  </div> 
};

export default Login;
