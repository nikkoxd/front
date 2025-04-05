import { NavLink } from "react-router";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 mt-[160px] mb-[200px] mx-[80px] py-[32px] border-t-[1px] border-t-black">
      <div>
        <NavLink to="/">
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-[16px] list-none">
            <li><NavLink to="about">Об ОЭЗ</NavLink></li>
            <li><NavLink to="services">Услуги</NavLink></li>
            <li><NavLink to="platforms">Площадки</NavLink></li>
            <li><NavLink to="residents">Резиденты</NavLink></li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-[16px] list-none">
            <li><NavLink to="vacancies">Вакансии</NavLink></li>
            <li><NavLink to="partners">Партнеры</NavLink></li>
            <li><NavLink to="news">Новости</NavLink></li>
            <li><NavLink to="contacts">Контакты</NavLink></li>
            <li><NavLink to="privacy">Политика конфиденциальности</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="text-right">
        <Button to="consultation">Получить консультацию</Button>
      </div>
    </footer>
  )
}
