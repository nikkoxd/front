import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <h1>О нас</h1>
          <p>Информация о особой экономической зоне</p>
          <Link to="/services" className="button">Подробнее</Link>
        </div>
      </section>

      <section className="about-features">
        <div className="features-content">
          <h2>Наши преимущества</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Преимущество 1</h3>
              <p>Описание преимущества</p>
              <Link to="/services" className="button">Подробнее</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;