import React, { useState } from "react";
import { AutoScroll } from "official-common";
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
const socialLinks = [{
  name: 'X',
  url: 'https://x.com/onlycoin_?t=WbLU28ZcKYhlH7iHU5qXBA&s=09',
}, {
  name: 'Blog',
  url: '',
}, {
  name: 'Telegram',
  url: 'https://t.me/onlycoincc',
}];
const questionAndAnswers: Qa[] = [{
    q: 'Why haven’t I still received my card?',
    a: 'Digital card issuance can take upto 30 minutes. Please contact us on Telegram if you are still pending a card.',
  }, {
    q: 'What are the Crypto Card fees?',
    a: 'While $ONB doesn’t have any, Crypto Card prides itself on not having any hidden fees. As such, there are only two main fees involved: \n\n 1 - Top-up Fee - 2% \n 2 - Refund Fee - 2%'
  }, {
    q: 'What is the minimum top-up for the card?',
    a: 'Currently, Crypto Card requiree a mininum deposit of 20 USD to use.',
  }, {
    q: 'How secure is Crypto Card?',
    a: 'Crypto Card doesn’t collect any user info. If you’re worried about the legitimacy of the product, we encourage you to contact menbers of our Telegram for previous experience reports or Crypto Card employees for more information.'
  }, {
    q: 'Are there limits to the Crypto Card?',
    a: 'Due to regulatory restrictions, we allow a maximum limit of $10,000 per month topped-up. If you wish to increase this limit, please contact our support (KYC is required). '
  }, {
    q: 'Why is my Crypto Card not working on this merchant?',
    a: 'Unfortunately, Crypto Card doesn’t work on every merchant, and there’s nothing we can do about that. We encourage you to try other payment methods or request a refund of your balance via our dashboard.'
  }
];
const Home = () => {
  return <div className="intention-page">
    <div className="home-padding"></div>
    <div className="intention-body-zone">
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
          <QaList qas={questionAndAnswers} />
          {/* {questionAndAnswers.map((item) => {
            return <QaItem {...item} />
          })} */}
        </div>
      </div>
      <div className="section-dividing-line"></div>
      <div className="social-media">
        <div className="picture">
          <div className="social-links-wrapper">
            <div className="title">Socials</div>
            <div className="social-links">
              {socialLinks.map(item => {
                return <a key={item.name} className="tip-text"
                  href={item.url} target='_blank' rel="noreferrer">{item.name}</a>
              })}
            </div>
          </div>
          <div className="button"><GetCardButton /></div>
        </div>
      </div>
      <div className="section-dividing-line"></div>
      <div className="copyright">
        <span>2024 OnlyCoin | All Rights Reserved.</span>
      </div>
    </div>
    <div className="home-padding"></div>
  </div>;
}

type Qa = {
  q: string;
  a: string;
};
const QaList: React.FC<{qas: Qa[]}> = (prop) => {
  var midIndex = Math.ceil(prop.qas.length / 2);
  var firstHalf = prop.qas.slice(0, midIndex);
  var secondHalf = prop.qas.slice(midIndex);
  return <>
    <div className="question-item-list">{
      firstHalf.map((qa, index) => {
        return <QaItem {...qa} key={index} />
      })
    }</div>
    <div className="question-item-list">{
      secondHalf.map((qa, index) => {
        return <QaItem {...qa} key={index} />
      })
    }</div>
  </>
};
const QaItem: React.FC<Qa> = (prop) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <div className="question-item" onClick={() => {setIsOpen(!isOpen)}}>
    <div className="question-item-question">
      <span className="question-item-text">{prop.q}</span>
      <span className="question-item-icon">{ isOpen ? '-' : '+' }</span>
    </div>
    {
      isOpen
        ? <div className="question-item-answer tip-text">{prop.a}</div>
        : <></>
    }
  </div>
};

export default Home;
