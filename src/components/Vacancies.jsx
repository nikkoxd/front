import Vacancy1 from "../assets/vacancy_1.png"
import Vacancy2 from "../assets/vacancy_2.png"
import Vacancy3 from "../assets/vacancy_3.png"
import Vacancy4 from "../assets/vacancy_4.png"
import Vacancy5 from "../assets/vacancy_5.png"

const Vacancies = () => {
  return (
    <section className="vacancies">
      <div className="content">
        <h1>Вакансии</h1>
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
      </div>
      <div className="more">
        <a className="button" href="#">Больше вакансий</a>
      </div>
    </section>
  )
}

export default Vacancies;
