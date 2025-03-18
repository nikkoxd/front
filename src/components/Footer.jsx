import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_col">
        <Link to="/">
          <img src="../img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="footer_col">
        <nav className="footer_nav">
          <ul>
            <li><Link to="/about">Об ОЭЗ</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/platforms">Площадки</Link></li>
            <li><Link to="/residents">Резиденты</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer_col">
        <nav className="footer_nav">
          <ul>
            <li><Link to="/vacancies">Вакансии</Link></li>
            <li><Link to="/partners">Партнеры</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/privacy">Политика конфиденциальности</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer_col">
        <Link to="/consultation" className="button">Получить консультацию</Link>
      </div>
    </footer>
  );
};

export default Footer;