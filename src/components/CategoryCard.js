import React, { useState } from 'react';
import '../styles/CategoryCard.scss';

const CarouselItem = ({ id, level }) => {
  const className = `item level${level}`;
  return <div className={className}>{id}</div>;
};

const Carousel = ({ items, initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState('');

  const generateItems = () => {
    let itemsComponents = [];
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = active - i;
      itemsComponents.push(<CarouselItem key={index} id={items[index]} level={level} />);
    }
    return itemsComponents;
  };

  const moveLeft = () => {
    const newActive = active - 1;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection('left');
  };

  const moveRight = () => {
    setActive((active + 1) % items.length);
    setDirection('right');
  };

  return (
    <div className="carousel noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>⬅️</div>
      <div className="arrow arrow-right" onClick={moveRight}>➡️</div>
      <div className="carousel-items">{generateItems()}</div>
    </div>
  );
};

const CategoryCard = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="category-card" id="category">
      <h1>Kategorie</h1>
      <p>Tekst do opisu kategorii</p>
      <Carousel items={items} initialActive={0} />
    </div>
  );
};

export default CategoryCard;
