import React from "react";
import AutoScroll from "../../component/AutoScroll";
import './Home.scss';
import GetCardButton from "../../component/GetCardButton";

const itemHeight = `${110/16}rem`;
const itemWidth = `${180/16}rem`;
const items = [{
  img: '/Home/apple.png',
  height: itemHeight,
  width: itemWidth,
}, {
  img: '/Home/behance.png',
  height: itemHeight,
  width: itemWidth,
}, {
  img: '/Home/discord.png',
  height: itemHeight,
  width: itemWidth,
}, {
  img: '/Home/slack.png',
  height: itemHeight,
  width: itemWidth,
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
      </div>
      <div className="make-payment">
        <span>MAKE PAYMENT WITH CRYPTO</span>
        <span>ANYTIME, ANYWHERE</span>
        <span className="tip-text">Accpted by 44M+ merchants globally | Apple Pay/Google Pay compatibility |AliPay/Wechat Pay</span>
      </div>
      <div className="two-good">
        <div className="good-item"></div>
        <div className="good-item"></div>
      </div>
      <div className="earn-unlimited">
        <div className="picture"></div>
        <div className="button"><GetCardButton /></div>
      </div>
      <div className="section-dividing-line"></div>
      <div className="supported-merchants">
        <div className="card-integration">Crypto Card Integrations</div>
        <div>Merchants supported from all</div>
        <div>over the world.</div>
        <div className="auto-scroll-wrapper">
          <AutoScroll items={items} duration={10} />
        </div>
        <span className="tip-text">Crypto Card-approved merchants.</span>
      </div>
      <div className="section-dividing-line"></div>
      <div className="order-card">
        <div className="order-card-groups">
          <div className="group-item"></div>
          <div className="group-item"></div>
          <div className="group-item"></div>
        </div>
        <div className="order-card-main">
          <GetCardButton />
        </div>
      </div>
      <div className="section-dividing-line"></div>
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
      <div className="section-dividing-line"></div>
      <div className="social-media">
        <div className="picture"></div>
        <div className="button"><GetCardButton /></div>
      </div>
      <div className="section-dividing-line"></div>
      <div className="copyright">
        <span>2024 OnlyCoin | All Rights Reserved.</span>
      </div>
    </div>
    <div className="home-padding"></div>
  </div>;
}

export default Home;
