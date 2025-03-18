import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import profileIcon from '../assets/profile.svg';

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <Link to="/">
          <img src={logo} alt="logo" />
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
        <Link to="/search"><img src={searchIcon} alt="search" /></Link>
        <Link to="/account"><img src={profileIcon} alt="profile" /></Link>
      </div>
    </header>
  );
};

export default Header;