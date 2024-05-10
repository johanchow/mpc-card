import React from "react";
import svg from './logo.svg';
import './logo.scss'

const Logo: React.FC = () => {
  return <div className="app-logo">
    <div className="app-logo-content">
      <img src={svg} alt="logo" />
      <span>OnlyCoin</span>
    </div>
    <div className="bottom-line-highlight"></div>
  </div>
};

export default Logo;
