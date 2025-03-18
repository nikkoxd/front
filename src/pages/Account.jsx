const Account = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Личный кабинет</p>
        <h1>Личный кабинет</h1>
      </section>
      <section className="account_settings">
        <form className="account_settings_form">
          <div className="input">
            <input type="text" placeholder="Имя" />
          </div>
          <div className="input">
            <input type="text" placeholder="Телефон" />
          </div>
          <div className="input">
            <input type="email" placeholder="Почта" />
          </div>
          <div className="input">
            <input type="password" placeholder="Пароль" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Account;