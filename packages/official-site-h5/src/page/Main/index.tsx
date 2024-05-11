import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../component/Logo";
// import GetCardButton from "../../component/GetCardButton";

const navItems = [{
  key: 'home',
  text: 'Home',
  path: '/main/home',
}, {
  key: 'onb',
  text: '$ONB Token',
  path: '/main/onb',
}];
const Main: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return <div>
    <div className="app-header">
      {/* <Logo />
      <div style={{marginBottom: `${25/7.5}vw`}}>
        <GetCardButton />
      </div> */}
    </div>
    <div className="section-dividing-line" style={{transform: 'translateY(-1px)'}}></div>
    <Outlet />
  </div>
};

export default Main;

