import React, { useState } from 'react';
import './AutoScroll.css';

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
            style={{
              backgroundImage: `url(${item.img})`,
              height: item.height ? `${item.height}` : undefined,
              width: item.width ? `${item.width}` : undefined,
            }}
          />
        ))}
        {items.map((item, index) => (
          <div key={index} className="auto-scroll-list-item"
            style={{
              backgroundImage: `url(${item.img})`,
              height: item.height ? `${item.height}` : undefined,
              width: item.width ? `${item.width}` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollList;
