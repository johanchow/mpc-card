import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import Profile from "../../component/Profile";

const Identity: React.FC = () => {
  return <div>
    <div className="app-header">
      <Logo />
      <div style={{marginBottom: '2rem'}}>
        <Profile />
      </div>
    </div>
    <div className="section-dividing-line" style={{transform: 'translateY(-1px)'}}></div>
    <Outlet />
  </div>;
};

export default Identity;
