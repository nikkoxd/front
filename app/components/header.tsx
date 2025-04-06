import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="container mx-auto flex flex-wrap justify-between items-center py-[40px]">
      <div className="shrink-0">
        <NavLink to="/">
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <div>
        <nav>
          <ul className="flex list-none gap-[32px]">
            <li><NavLink to="about">Об ОЭЗ</NavLink></li>
            <li><NavLink to="services">Услуги</NavLink></li>
            <li><NavLink to="platforms">Площадки</NavLink></li>
            <li><NavLink to="residents">Резиденты</NavLink></li>
            <li><NavLink to="vacancies">Вакансии</NavLink></li>
            <li><NavLink to="partners">Партнеры</NavLink></li>
            <li><NavLink to="news">Новости</NavLink></li>
            <li><NavLink to="contacts">Контакты</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-[24px] shrink-0">
        <NavLink to="search">
          <img src="/search.svg" alt="Search" />
        </NavLink>
        <NavLink to="profile">
          <img src="/profile.svg" alt="Account" />
        </NavLink>
      </div>
    </header>
  )
}
