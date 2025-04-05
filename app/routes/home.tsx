import Button from "~/components/button";
import type { Route } from "./+types/home";
import Section from "~/components/section";
import Info from "~/components/info";
import ServiceCard from "~/components/servicecard";
import ResidentCard from "~/components/residentcard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Главная - Титановая Долина" },
  ];
}

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-[15px] mt-[48px]">
        <div className="flex justify-between">
          <div className="max-w-[45%]">
            <img src="/logo_large.svg" alt="Logo" />
            <p className="mt-[20px]">Добро пожаловать в Титановую Долину — уникальную особую экономическую зону промышленно-производственного типа в Свердловской области!</p>
          </div>
          <div>
            <Button to="consultation">Получить консультацию</Button>
          </div>
        </div>
        <div>
          <img src="/photo.png" alt="Photo" className="w-full h-[500px] object-cover rounded-[32px]" />
        </div>
      </section>
      <Section title="Преимущества" subtitle="на территории ОЭЗ &quot;Титановая долина&quot;" horizontal>
        <div className="flex flex-col gap-[32px]">
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2 className="text-primary">01</h2>
                <h3>Разнообразная сырьевая база Свердловской области</h3>
              </div>
            }
            content="Возможность открытия производства вблизи крупнейшего в мире производителя титана ПАО «Корпорация ВСМПО-АВИСМА»"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2 className="text-primary">02</h2>
                <h3>Энергоэффективные технологические решения в инфраструктуре</h3>
              </div>
            }
            content="Возможность осуществить пуск производства в сжатые сроки"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2 className="text-primary">03</h2>
                <h3>Лучшие условия налогообложения и выкупная стоимость земельных участков</h3>
              </div>
            }
            content="Возможность снижения затрат на 30%"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2 className="text-primary">04</h2>
                <h3>Развитая программа кадрового обеспечения производства</h3>
              </div>
            }
            content="Возможность укомплектовать производство квалифицированным производственным и обслуживающим персоналом в согласованные сроки"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2 className="text-primary">05</h2>
                <h3>Альтернативные логистические пути с учетом введения санкций</h3>
              </div>
            }
            content="Возможность использовать подъездной железнодорожный путь и контейнерную площадку"
          />
        </div>
        <div className="mt-[54px] text-right">
          <Button to="partners">Узнать подробнее</Button>
        </div>
      </Section>
      <Section title="Услуги">
        <div className="grid grid-cols-2 gap-[40px]">
          <ServiceCard
            title="Содержание и техническое обслуживание автодорожной инфраструктуры на территории ОЭЗ"
            price="20 000 руб. в месяц за 1 Га площади участка резидента"
          />
          <ServiceCard
            title="Облет земельного участка с использованием летательного аппарата для видеофиксации хода строительства объекта"
            price="30 000 руб."
          />
          <ServiceCard
            title="Проведение комплекса кадастровых работ по формированию земельного участка"
            price="определяется параметрами объекта"
          />
        </div>
        <div className="mt-[54px] text-right">
          <Button to="services">Все услуги</Button>
        </div>
      </Section>
      <Section title="Вакансии">
        <div className="flex gap-[40px]">
          <div>
            <img src="/vacancy_1.png" alt="Vacancy 1" className="w-[400px] h-[400px] object-cover rounded-[24px]" />
            <h3 className="mt-[24px]">Инженер службы заказчика (КЖ, КМ, АР, ГП)</h3>
          </div>
          <div>
            <img src="/vacancy_2.png" alt="Vacancy 2" className="w-[180px] h-[180px] object-cover rounded-[24px]" />
            <h3 className="mt-[24px]">Помощник инженера</h3>
          </div>
          <div>
            <img src="/vacancy_3.png" alt="Vacancy 3" className="w-[180px] h-[180px] object-cover rounded-[24px]" />
            <h3 className="mt-[24px]">Карьера в Миникат</h3>
          </div>
          <div>
            <img src="/vacancy_4.png" alt="Vacancy 4" className="w-[180px] h-[180px] object-cover rounded-[24px]" />
            <h3 className="mt-[24px]">Карьера ВСМПО-АВИСМА</h3>
          </div>
          <div>
            <img src="/vacancy_5.png" alt="Vacancy 5" className="w-[180px] h-[180px] object-cover rounded-[24px]" />
            <h3 className="mt-[24px]">Карьера в ЭКОТЕХ</h3>
          </div>
        </div>
        <div className="mt-[54px] text-right">
          <Button to="vacancies">Больше вакансий</Button>
        </div>
      </Section>
      <Section title="Партнеры">
        <div className="grid grid-cols-3 gap-[40px]">
          <ResidentCard image="/partners/1.png" alt="Partner 1" />
          <ResidentCard image="/partners/2.png" alt="Partner 2" />
          <ResidentCard image="/partners/3.png" alt="Partner 3" />
          <ResidentCard image="/partners/4.png" alt="Partner 4" />
          <ResidentCard image="/partners/5.png" alt="Partner 5" />
          <ResidentCard image="/partners/6.png" alt="Partner 6" />
          <ResidentCard image="/partners/7.png" alt="Partner 7" />
        </div>
        <div className="mt-[54px] text-right">
          <Button to="partners">Узнать подробнее</Button>
        </div>
      </Section>
      <Section title="Новости">
        <div className="flex justify-between gap-[40px]">
          <div>
            <div className="w-[620px] h-[620px] bg-gray-200 rounded-[16px]" />
            <h3 className="mt-[24px]">Новость 1</h3>
          </div>
          <div>
            <div className="w-[290px] h-[290px] bg-gray-200 rounded-[16px]" />
            <h3 className="mt-[24px]">Новость 2</h3>
          </div>
          <div>
            <div className="w-[290px] h-[290px] bg-gray-200 rounded-[16px]" />
            <h3 className="mt-[24px]">Новость 3</h3>
          </div>
        </div>
      </Section>
      <Section title="Контакты" horizontal>
        <div className="flex flex-col gap-[32px]">
          <Info
            title={
              <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
            }
            content={
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start gap-[16px]">
                  <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                  <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                  <p className="m-0">Тел: +7 343 243 55 83</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                  <p className="m-0">Почта: welcome@titanium-valley.com</p>
                </div>
              </div>
            }
          />
          <Info
            title={
              <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
            }
            content={
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start gap-[16px]">
                  <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                  <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                  <p className="m-0">Тел: +7 343 243 55 83</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                  <p className="m-0">Почта: welcome@titanium-valley.com</p>
                </div>
              </div>
            }
          />
          <Info
            title={
              <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
            }
            content={
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start gap-[16px]">
                  <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                  <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                  <p className="m-0">Тел: +7 343 243 55 83</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                  <p className="m-0">Почта: welcome@titanium-valley.com</p>
                </div>
              </div>
            }
          />
        </div>
      </Section>
    </>
  )
}
