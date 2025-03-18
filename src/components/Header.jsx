import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <Link to="/">
          <img src="../img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="header_center">
        <nav className="navbar">
          <ul>
            <li><NavLink to="/about">Об ОЭЗ</NavLink></li>
            <li><NavLink to="/services">Услуги</NavLink></li>
            <li><NavLink to="/platforms">Площадки</NavLink></li>
            <li><NavLink to="/residents">Резиденты</NavLink></li>
            <li><NavLink to="/vacancies">Вакансии</NavLink></li>
            <li><NavLink to="/partners">Партнеры</NavLink></li>
            <li><NavLink to="/news">Новости</NavLink></li>
            <li><NavLink to="/contacts">Контакты</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="header_right">
        <Link to="/search"><img src="../img/search.svg" alt="search" /></Link>
        <Link to="/account"><img src="../img/profile.svg" alt="profile" /></Link>
      </div>
    </header>
  );
};

export default Header;