import LargeLogo from "../assets/logo_large.svg"
import Photo from "../assets/photo.png"
import Vacancy1 from "../assets/vacancy_1.png"
import Vacancy2 from "../assets/vacancy_2.png"
import Vacancy3 from "../assets/vacancy_3.png"
import Vacancy4 from "../assets/vacancy_4.png"
import Vacancy5 from "../assets/vacancy_5.png"
import LocationIcon from "../assets/location.svg"
import PhoneIcon from "../assets/phone.svg"
import EmailIcon from "../assets/email.svg"

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero_left">
                    <img src={LargeLogo} alt="large logo" />
                    <p>Добро пожаловать в Титановую Долину — уникальную особую экономическую зону промышленно-производственного типа в Свердловской области!</p>
                </div>
                <div className="hero_right">
                    <a className="button" href="#">
                        Получить консультацию
                    </a>
                </div>
            </section>
            <section className="hero_img">
                <img src={Photo} alt="photo" />
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
                <div className="more">
                    <a className="button" href="#">Узнать подробнее</a>
                </div>
            </section>
            <section className="services">
                <div className="content">
                    <h1>Услуги</h1>
                    <div className="services_list">
                        <div className="services_item"></div>
                        <div className="services_item"></div>
                        <div className="services_item"></div>
                        <div className="services_item"></div>
                        <div className="services_item"></div>
                    </div>
                </div>
                <div className="more">
                    <a className="button" href="#">Все услуги</a>
                </div>
            </section>
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
            <section className="partners">
                <div className="content">
                    <h1>Партнеры</h1>
                    <div className="partners_list">
                        <div className="partners_item"></div>
                        <div className="partners_item"></div>
                        <div className="partners_item"></div>
                        <div className="partners_item"></div>
                        <div className="partners_item"></div>
                        <div className="partners_item"></div>
                    </div>
                </div>
                <div className="more">
                    <a className="button" href="#">Узнать больше</a>
                </div>
            </section>
            <section className="news">
                <div className="content">
                    <h1>Новости</h1>
                    <div className="news_list">
                        <div className="news_item">
                            <div className="news-img"></div>
                            <h3>Новость 1</h3>
                        </div>
                        <div className="news_item">
                            <div className="news-img"></div>
                            <h3>Новость 2</h3>
                        </div>
                        <div className="news_item">
                            <div className="news-img"></div>
                            <h3>Новость 3</h3>
                        </div>
                    </div>
                </div>
                <div className="more">
                    <a className="button" href="#">Все новости</a>
                </div>
            </section>
            <section className="contacts">
                <div className="contacts_left">
                    <h1>Контакты</h1>
                </div>
                <div className="contacts_right">
                    <div className="contacts_item">
                        <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
                        <div className="contact_info">
                            <img src={LocationIcon} alt="location" />
                            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                        </div>
                        <div className="contact_info">
                            <img src={PhoneIcon} alt="phone" />
                            <p>Тел: +7 343 243 55 83</p>
                        </div>
                        <div className="contact_info">
                            <img src={EmailIcon} alt="e-mail" />
                            <p>Почта: welcome@titanium-valley.com</p>
                        </div>
                    </div>
                    <div className="contacts_item">
                        <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
                        <div className="contact_info">
                            <img src={LocationIcon} alt="location" />
                            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                        </div>
                        <div className="contact_info">
                            <img src={PhoneIcon} alt="phone" />
                            <p>Тел: +7 343 243 55 83</p>
                        </div>
                        <div className="contact_info">
                            <img src={EmailIcon} alt="e-mail" />
                            <p>Почта: welcome@titanium-valley.com</p>
                        </div>
                    </div>
                    <div className="contacts_item">
                        <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
                        <div className="contact_info">
                            <img src={LocationIcon} alt="location" />
                            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                        </div>
                        <div className="contact_info">
                            <img src={PhoneIcon} alt="phone" />
                            <p>Тел: +7 343 243 55 83</p>
                        </div>
                        <div className="contact_info">
                            <img src={EmailIcon} alt="e-mail" />
                            <p>Почта: welcome@titanium-valley.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
  
export default Home;