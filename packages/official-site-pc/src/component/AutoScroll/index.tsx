import React, { useState, useEffect, useRef } from 'react';
import './AutoScroll.scss';

type AutoScrollListProps = {
  items: {
    img: string;
    height?: string;
    width?: string;
  }[];
  duration: number;
};

const AutoScrollList: React.FC<AutoScrollListProps> = ({ items, duration }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="auto-scroll-list" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div
        className="auto-scroll-list-inner"
        style={{
          animationPlayState: isHover ? 'paused' : 'running',
          animationDuration: `${duration}s`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="auto-scroll-list-item"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
        {items.map((item, index) => (
          <div key={index} className="auto-scroll-list-item"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollList;
