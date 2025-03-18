const Partners = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Партнеры</p>
        <h1>Партнеры</h1>
      </section>
      <section className="partners_page">
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
      </section>
      <section className="partners_more">
        <a className="button" href="#">Стать партнером</a>
      </section>
    </main>
  );
};

export default Partners;