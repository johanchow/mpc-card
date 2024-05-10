import React from "react";
import { Carousel } from 'official-common'
import './Home.scss';

const Home = () => {
  return <div className="home-page">
    <div className="home-padding"></div>
    <div className="home-body-zone">
      <div className="shopping-payment">
        <div className="shopping-needs">
          <div className="merchant-number">
            <img src='' />
            <span>150M+ Merchants</span>
          </div>
          <p className="for-all">For all your crypto shopping needs.</p>
          <p className="no-key">No-KYC Crypto Card</p>
          <p className="create-top">Create and top up your Crypto Card. enjoy hassle-free online&offline shopping.</p>
        </div>
      </div>
      <Carousel />
      <div className="supported-merchants">
      </div>
      <div className="order-card">
      </div>
      <div className="frequently-questions">
      </div>
      <div className="get-your-card">
      </div>
      <div className="copyright">
      </div>
    </div>
    <div className="home-padding"></div>
  </div>;
}

export default Home;
