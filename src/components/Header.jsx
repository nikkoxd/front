import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <a href="/">
          <img src="../img/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="header_center">
        <nav className="navbar">
          <ul>
            <li><a href="/about">Об ОЭЗ</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/platforms">Площадки</a></li>
            <li><a href="/residents">Резиденты</a></li>
            <li><a href="/vacancies">Вакансии</a></li>
            <li><a href="/partners">Партнеры</a></li>
            <li><a href="/news">Новости</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
      <div className="header_right">
        <a href="/search"><img src="../img/search.svg" alt="search" /></a>
        <a href="/account"><img src="../img/profile.svg" alt="profile" /></a>
      </div>
    </header>
  );
};

export default Header;