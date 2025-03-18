import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer_col">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div className="footer_col">
        <nav className="footer_nav">
          <ul>
            <li><a href="/about">Об ОЭЗ</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/platforms">Площадки</a></li>
            <li><a href="/residents">Резиденты</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer_col">
        <nav className="footer_nav">
          <ul>
            <li><a href="/vacancies">Вакансии</a></li>
            <li><a href="/partners">Партнеры</a></li>
            <li><a href="/news">Новости</a></li>
            <li><a href="/contacts">Контакты</a></li>
            <li><a href="/privacy">Политика конфиденциальности</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer_col">
        <a className="button" href="#">Получить консультацию</a>
      </div>
    </footer>
  );
};

export default Footer;