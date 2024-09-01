import React, { useState } from 'react';
import '../styles/Contact2.scss';

const Contact2 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const pricingCards = [
    {
      id: 1,
      title: 'Dla rękodzielnika',
      // price: '9.99',
      features: ['Info co gdzie jak do jakis tekst, albo zdj'],
      isBest: false
    },
    {
      id: 2,
      title: 'Kontakt',
      // price: '19.99',
      features: ['Telefon: 123-456-789'],
      
      isBest: true
    },
    {
      id: 3,
      title: 'Splątane noca',
      // price: '49.99',
      features: ['Info co gdzie jak i zdjęcie'],
      isBest: false
    },
  ];

  return (
    <div className="Contact2-text">
      <section>
        <h2></h2>
        <p>Krótki tekst do sekcji kontakt</p>
        <div className="pricing-cards">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className={`pricing-card ${activeCard === card.id ? 'active' : ''}`}
              onMouseOver={() => setActiveCard(card.id)}
            >
              <div className="card">
                {card.isBest && <div className="ribbon"></div>}
                <h3 className="card-title">{card.title}</h3>
                <hr className="first" />
                <p className="card-price"><span></span>{card.price}</p>
                <ul className="features">
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {/* <hr className="second" />
                <a href="#" className="card-btn">i want it</a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact2;
