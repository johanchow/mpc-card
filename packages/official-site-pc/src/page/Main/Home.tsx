import React from "react";
import AutoScroll from "../../component/AutoScroll";
import './Home.scss';

const items = [{
  img: 'https://via.placeholder.com/150',
}, {
  img: 'https://via.placeholder.com/150/0000FF',
}, {
  img: 'https://via.placeholder.com/150/FF0000',
}];
const questions: string[] = [
  'Why haven’t I still received my card?',
  'Why haven’t I still received my card?',
  'Why is my Crypto Card not working on this merchant haven’t I still received my card?',
  'aaaaaa',
  'Why haven’t I still received my card?',
  'Why is my Crypto Card not working on this merchant?',
];
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
      <div className="supported-merchants">
        <AutoScroll items={items} duration={10} />
      </div>
      <div className="order-card">
      </div>
      <div className="frequently-questions">
        <p className="questions-title">Frequently Asked Questions</p>
        <p className="questions-subtitle">Crypto Card is a revolutionary product,and likesuch, questions may arise.</p>
        <div className="questions-item-wrapper">
          {questions.map((q) => {
            return <div className="question-item">
              <span className="question-item-text">{q}</span>
              <span className="question-item-icon">+</span>
            </div>
          })}
        </div>
      </div>
      <div className="get-your-card">
      </div>
      <div className="copyright">
        <span>2024 OnlyCoin | All Rights Reserved.</span>
      </div>
    </div>
    <div className="home-padding"></div>
  </div>;
}

export default Home;
