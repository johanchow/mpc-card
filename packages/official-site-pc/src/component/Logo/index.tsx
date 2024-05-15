import React from "react";
import { useNavigate } from "react-router-dom";
import svg from './logo.svg';
import './logo.scss'

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/main/home');
  };
  return <div className="app-logo" onClick={() => goHome()}>
    <div className="app-logo-content">
      <img src={svg} alt="logo" />
      <span>OnlyCoin</span>
    </div>
    <div className="bottom-line-highlight"></div>
  </div>
};

export default Logo;
