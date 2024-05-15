import React from "react";
import { useNavigate } from "react-router-dom";
import './GetCardButton.scss';

const GetCardButton: React.FC = () => {
  const navigate = useNavigate();
  const jumpToGetCard = () => {
    navigate('/identity/register');
  };
  return <div onClick={() => jumpToGetCard()} className="get-card-button">Get your Crypto Card</div>;
};

export default GetCardButton;
