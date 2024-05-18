import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { noticeSendVerifyCode, postRegister, useIdentityStore } from 'official-common';
import './Identity.scss'

const Register: React.FC = () => {
  const { setIdentity } = useIdentityStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const jumpLogin = () => {
    navigate('/identity');
  };
  const onSubmitEmail = async (data: Record<string, string>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await noticeSendVerifyCode(data);
    setEmail(data.email);
    setIsLoading(false);
  };
  const onSubmitRegisterCode = async (data: Record<string, string>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const identity = await postRegister({
      ...data,
      email,
    });
    setIsLoading(false);
    if (!identity) {
      return;
    }
    setIdentity(identity);
    alert('注册成功，跳转卡包页');
  };
  return <div className="login-register-body">
    <div className="border-line"></div>
    <span className="section-title-font">Create an account</span>
    <span className="tip-text">Enter your email below to create your account</span>
    {
      !email
      ? <form className="login-form" onSubmit={handleSubmit(onSubmitEmail)}>
          <div className="form-field-row">
            <input key='firstName' className="form-field" placeholder="First Name" {...register("firstname", {
              required: " is required.",
            })} autoComplete="off" />
            <input key='lastName' className="form-field" placeholder="Last Name" {...register("lastname", {
              required: " is required.",
            })} autoComplete="off" />
          </div>
          {errors?.firstname?.type === "required" && <p className="error-message">First Name is required</p>}
          {errors?.lastname?.type === "required" && <p className="error-message">Last Name is required</p>}
          <input key='email' className="form-field" placeholder="name@example.com" {...register("email", {
            required: "email is required.",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })} autoComplete="off" />
          {errors?.email?.type === "required" && <p className="error-message">email is required</p>}
          {errors?.email?.type === "pattern" && (
            <p className="error-message">email must be valid format</p>
          )}
          <input type='submit' className="submit-button action-button" value="Sign In with Email" />
        </form>
      : <form className="login-form" onSubmit={handleSubmit(onSubmitRegisterCode)}>
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
    <div className="or-line">
      <div></div>
      <span className="tip-text">OR</span>
      <div></div>
    </div>
    <button className="switch-button action-button" onClick={() => jumpLogin()}>Login</button>
    <div className="agree-terms tip-text">By clicking continue,you agree to our terms of use.</div>
  </div>
};

export default Register;

