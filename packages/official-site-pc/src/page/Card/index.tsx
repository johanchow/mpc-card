import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import NavBar from "../../component/NavBar";
import Profile from "../../component/Profile";

const navItems = [{
  key: 'add',
  text: 'Add',
  path: '/card/add',
}, {
  key: 'extract',
  text: 'Extract',
  path: '/card/extract',
}];
const Card = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeNavKey = location.pathname.includes('card/add') ? 'add' : 'extract';
  const onChangeNav = (newActiveKey: string) => {
    const newPath = navItems.find(item => item.key === newActiveKey)?.path || navItems[0].path;
    navigate(newPath);
  }
  return <div>
    <div className="app-header">
      <Logo />
      <NavBar items={navItems} initialActiveKey={activeNavKey} onChange={onChangeNav} />
      <div style={{marginBottom: '2rem'}}>
        <Profile />
      </div>
    </div>
    <div className="section-dividing-line" style={{transform: 'translateY(-1px)'}}></div>
    <div className="intention-page">
      <div className="intention-body-zone">
        <Outlet />
      </div>
    </div>
  </div>;
};

export default Card;
