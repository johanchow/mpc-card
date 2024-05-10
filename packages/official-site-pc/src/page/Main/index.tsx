import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import GetCardButton from "../../component/GetCardButton";
import NavBar from "../../component/NavBar";

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
  const activeNavKey = location.pathname.includes('main/onb') ? 'onb' : 'home';
  const onChangeNav = (newActiveKey: string) => {
    const newPath = navItems.find(item => item.key === newActiveKey)?.path || navItems[0].path;
    navigate(newPath);
  }
  return <div>
    <div className="app-header">
      <Logo />
      <NavBar items={navItems} initialActiveKey={activeNavKey} onChange={onChangeNav} />
      <div style={{marginBottom: `${30/16}rem`}}>
        <GetCardButton />
      </div>
    </div>
    <div className="section-dividing-line" style={{transform: 'translateY(-1px)'}}></div>
    <Outlet />
  </div>
};

export default Main;
