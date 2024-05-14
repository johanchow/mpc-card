import React from "react";
import { useForm } from "react-hook-form";
import './Identity.scss'

const Login: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return <div className="login-register-body">
    <div className="border-line"></div>
    <span className="section-title-font">Login to your account</span>
    <span className="tip-text">Enter your email below to login to your account</span>
    <form className="login-form">
      <input className="form-field"
        {...register("email", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {/* {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}
      {/* <input placeholder="name@example.com" {...register("email", {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
      })} /> */}
      <button className="submit-button action-button">Login with Email</button>
    </form>
    <div className="tip-text resend-tip">Resend code in 48 seconds</div>
    <div className="or-line">
      <div></div>
      <span className="tip-text">OR</span>
      <div></div>
    </div>
    <button className="switch-button action-button">Register</button>
    <div className="agree-terms tip-text">By clicking continue,you agree to our terms of use.</div>
  </div> 
};

export default Login;
