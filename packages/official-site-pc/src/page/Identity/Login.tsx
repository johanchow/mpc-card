import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { getVerifyCode, login } from 'official-common';
import './Identity.scss'

enum LoginStep {
  starting = 1,
  emailed = 2,
  verified = 3,
};
type LoginProps = {
  /* 正在登录的邮箱 */
  email?: string;
};
const Login: React.FC<LoginProps> = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // 根据是否有email来判断从邮箱开始登录，还是已经注册过要开始验证码登录
  const [step, setStep] = useState<LoginStep>(props.email ? LoginStep.emailed : LoginStep.starting);
  const navigate = useNavigate();
  const jumpRegister = () => {
    navigate('/identity/register');
  };
  const onSubmitEmail = async (data: Record<string, string>) => {
    console.log('submit data: ', data);
    await getVerifyCode(data);
    setStep(LoginStep.emailed);
  };
  const onSubmitVerifyCode = async (data: Record<string, string>) => {
    await login(data);
  };
  return <div className="login-register-body">
    <div className="border-line"></div>
    <span className="section-title-font">Login to your account</span>
    <span className="tip-text">Enter your email below to login to your account</span>
    {
      step === LoginStep.starting
      ? <form className="login-form" onSubmit={handleSubmit(onSubmitEmail)}>
          <input className="form-field" placeholder="name@example.com" {...register("email", {
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
          <input className="form-field" placeholder="ENTER YOUR 6-DIGIT CODE" {...register("code", {
            required: "code is required.",
            pattern: /^\d{6}$/i,
          })} />
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
