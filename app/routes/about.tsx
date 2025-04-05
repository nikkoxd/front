import Page from "~/components/page";
import type { Route } from "./+types/about";
import Section from "~/components/section";
import Info from "~/components/info";
import Card from "~/components/card";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Об ОЭЗ - Титановая Долина" },
  ];
}

export default function About() {
  return (
    <Page title="Об ОЭЗ">
      <section>
        <img src="/photo_2.png" alt="Photo" className="w-full h-[637px] rounded-[32px]" />
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
      </Section>
      <Section title="Развитие" subtitle="Планы по развитию инфраструктуры и возможностей" horizontal>
        <Info
          title={
            <h3>Наш подход и политика</h3>
          }
          content="Мы стремимся заботиться об окружающей среде, честно и открыто рассказывать про деятельность АО &quot;ОЭЗ &quot;Титановая долина&quot;, соблюдать баланс между работой и личной жизнью каждого сотрудника, осознанно подходить к организации бизнес-процессов в нашей компании"
          />
      </Section>
      <section className="mt-[64px] grid grid-cols-2 gap-[40px]">
        <Card 
          title="Экологическая ответственность" 
          description={ "01 Управление выбросами загрязняющих веществ\n02 Управление водными ресурсами" }
          image="/about_photo_1.png"
        />
        <Card 
          title="Корпоративное управление" 
          description={ "01 Наука и технологии\n02 Цифровизация\n03 Конфиденциальность и безопасность данных" }
          image="/about_photo_2.png"
          bottom
        />
      </section>
    </Page>
  )
}
