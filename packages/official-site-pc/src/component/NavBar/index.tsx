import React, { useState } from "react";
import './NavBar.scss';

type NavItem = {
  /* key */
  key: string;
  /* 展示文案 */
  text: string;
  /* 跳转链接 */
  path: string;
}
type NavBarProps = {
  items: Array<NavItem>;
  onChange?: (nowKey: string, lastKey: string) => void
  initialActiveKey: string;
};
const NavBar: React.FC<NavBarProps> = (props) => {
  const {items, onChange, initialActiveKey} = props;
  const [activeKey, setActiveKey] = useState<string>(initialActiveKey);
  const handleClick = (item: NavItem) => {
    const { key: newActiveKey } = item;
    setActiveKey(newActiveKey);
    onChange?.(newActiveKey, activeKey);
  };
  return <div className="nav-bar">
    {items.map(item => {
      return <div key={item.key} className={`nav-bar-item ${item.key === activeKey ? 'active' : ''}`}  onClick={() => handleClick(item)}>
        <p>{item.text}</p>
        <div className="bottom-line-highlight"></div>
      </div>
    })}
  </div>
};

export default NavBar;
