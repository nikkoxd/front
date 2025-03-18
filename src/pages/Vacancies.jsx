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
            <img src="../img/vacancy_1.png" alt="vacancy 1" />
            <h3>Инженер службы заказчика (КЖ, КМ, АР, ГП)</h3>
          </div>
          <div className="vacancies_item">
            <img src="../img/vacancy_2.png" alt="vacancy 2" />
            <h3>Помощник инженера</h3>
          </div>
          <div className="vacancies_item">
            <img src="../img/vacancy_3.png" alt="vacancy 3" />
            <h3>Карьера в Миникат</h3>
          </div>
          <div className="vacancies_item">
            <img src="../img/vacancy_4.png" alt="vacancy 4" />
            <h3>Карьера ВСМПО-АВИСМА</h3>
          </div>
          <div className="vacancies_item">
            <img src="../img/vacancy_5.png" alt="vacancy 5" />
            <h3>Карьера в ЭКОТЕХ</h3>
          </div>
        </div>
        <div className="list_controls">
          <button className="list_controls_button">
            <img src="../img/chevron_left.svg" alt="chevron left" />
          </button>
          <button className="list_controls_button">
            <img src="../img/chevron_right.svg" alt="chevron right" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Vacancies;