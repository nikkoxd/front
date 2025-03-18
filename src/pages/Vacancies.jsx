import Vacancy1 from "../assets/vacancy_1.png";
import Vacancy2 from "../assets/vacancy_2.png";
import Vacancy3 from "../assets/vacancy_3.png";
import Vacancy4 from "../assets/vacancy_4.png";
import Vacancy5 from "../assets/vacancy_5.png";
import ChevronLeft from "../assets/chevron_left.svg";
import ChevronRight from "../assets/chevron_right.svg";

const Vacancies = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Вакансии</p>
        <h1>Вакансии</h1>
      </section>
      <section className="vacancies-page">
        <div className="vacancies_list">
          <div className="vacancies_item">
            <img src={Vacancy1} alt="vacancy 1" />
            <h3>Инженер службы заказчика (КЖ, КМ, АР, ГП)</h3>
          </div>
          <div className="vacancies_item">
            <img src={Vacancy2} alt="vacancy 2" />
            <h3>Помощник инженера</h3>
          </div>
          <div className="vacancies_item">
            <img src={Vacancy3} alt="vacancy 3" />
            <h3>Карьера в Миникат</h3>
          </div>
          <div className="vacancies_item">
            <img src={Vacancy4} alt="vacancy 4" />
            <h3>Карьера ВСМПО-АВИСМА</h3>
          </div>
          <div className="vacancies_item">
            <img src={Vacancy5} alt="vacancy 5" />
            <h3>Карьера в ЭКОТЕХ</h3>
          </div>
        </div>
        <div className="list_controls">
          <button className="list_controls_button">
            <img src={ChevronLeft} alt="chevron left" />
          </button>
          <button className="list_controls_button">
            <img src={ChevronRight} alt="chevron right" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Vacancies;