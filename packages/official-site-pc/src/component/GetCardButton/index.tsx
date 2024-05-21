import React from "react";
import { useNavigate } from "react-router-dom";
import { useIdentityStore } from 'official-common';
import './GetCardButton.scss';

type GetCardButtonProps = {
  onClick?: () => void;
};
const GetCardButton: React.FC<GetCardButtonProps> = (props) => {
  const { onClick } = props;
  const navigate = useNavigate();
  const { identity } = useIdentityStore();
  const jump = () => {
    if (onClick) {
      onClick();
    } else {
      if (identity?.id) {
        navigate('/card/add');
        return;
      }
      navigate('/identity/register');
    }
  };
  return <div onClick={jump} className="get-card-button">Get your Crypto Card</div>;
};

export default GetCardButton;
