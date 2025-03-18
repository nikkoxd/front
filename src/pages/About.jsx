const About = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Об ОЭЗ</p>
        <h1>Об ОЭЗ</h1>
      </section>
      <section className="about_img">
        <div className="placeholder-img"></div>
      </section>
      <section className="advantages">
        <div className="content">
          <div className="advantages_left">
            <h1>Преимущества</h1>
            <p>на территории ОЭЗ "Титановая долина"</p>
          </div>
          <div className="advantages_right">
            <div className="advantages_item">
              <div className="advantages_item_title">
                <h2>01</h2>
                <h3>Разнообразная сырьевая база Свердловской области</h3>
              </div>
              <div className="advantages_item_text">Возможность открытия производства вблизи крупнейшего в мире производителя титана ПАО «Корпорация ВСМПО-АВИСМА»</div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_title">
                <h2>02</h2>
                <h3>Энергоэффективные технологические решения в инфраструктуре</h3>
              </div>
              <div className="advantages_item_text">Возможность осуществить пуск производства в сжатые сроки</div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_title">
                <h2>03</h2>
                <h3>Лучшие условия налогообложения и выкупная стоимость земельных участков</h3>
              </div>
              <div className="advantages_item_text">Возможность снижения затрат на 30%</div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_title">
                <h2>04</h2>
                <h3>Развитая программа кадрового обеспечения производства</h3>
              </div>
              <div className="advantages_item_text">Возможность укомплектовать производство квалифицированным производственным и обслуживающим персоналом в согласованные сроки</div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_title">
                <h2>05</h2>
                <h3>Альтернативные логистические пути с учетом введения санкций</h3>
              </div>
              <div className="advantages_item_text">Возможность использовать подъездной железнодорожный путь и контейнерную площадку</div>
            </div>
          </div>
        </div>
      </section>
      <section className="development">
        <h1>Развитие</h1>
        <p>Планы по развитию инфраструктуры и возможностей</p>
        <div className="development_list">
          <div className="development_card">
            <div className="development_card_title">
              <h3>Че-то там</h3>
            </div>
            <div className="development_card_text">
              <p>Repudiandae earum vitae mollitia. Veritatis deleniti est quidem explicabo fugiat possimus. Qui alias accusantium corrupti ea nobis aperiam. Rerum enim iste tempore a.

Voluptatem sed ut accusantium et. Cum in sequi dolorem illo. Et exercitationem ut omnis consequatur.</p>
              <div className="development_card_button">
                <a href="#" className="button">Подробнее</a>
              </div>
            </div>
          </div>
          <div className="development_card">
            <div className="development_card_title">
              <h3>Че-то там</h3>
            </div>
            <div className="development_card_text">
              <p>Repudiandae earum vitae mollitia. Veritatis deleniti est quidem explicabo fugiat possimus. Qui alias accusantium corrupti ea nobis aperiam. Rerum enim iste tempore a.</p>
              <div className="development_card_button">
                <a href="#" className="button">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;