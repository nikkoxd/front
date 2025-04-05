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

export default function Home() {
  return (
    <Page title="Об ОЭЗ">
      <section className="px-[80px]">
        <div className="h-[637px] bg-gray-200 rounded-[32px]" />
      </section>
      <Section title="Преимущества" subtitle="на территории ОЭЗ &quot;Титановая долина&quot;" horizontal>
        <div className="flex flex-col gap-[32px]">
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2>01</h2>
                <h3>Разнообразная сырьевая база Свердловской области</h3>
              </div>
            }
            content="Возможность открытия производства вблизи крупнейшего в мире производителя титана ПАО «Корпорация ВСМПО-АВИСМА»"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2>02</h2>
                <h3>Энергоэффективные технологические решения в инфраструктуре</h3>
              </div>
            }
            content="Возможность осуществить пуск производства в сжатые сроки"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2>03</h2>
                <h3>Лучшие условия налогообложения и выкупная стоимость земельных участков</h3>
              </div>
            }
            content="Возможность снижения затрат на 30%"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2>04</h2>
                <h3>Развитая программа кадрового обеспечения производства</h3>
              </div>
            }
            content="Возможность укомплектовать производство квалифицированным производственным и обслуживающим персоналом в согласованные сроки"
          />
          <Info
            title={
              <div className="flex gap-[24px]">
                <h2>05</h2>
                <h3>Альтернативные логистические пути с учетом введения санкций</h3>
              </div>
            }
            content="Возможность использовать подъездной железнодорожный путь и контейнерную площадку"
          />
        </div>
      </Section>
      <Section title="Развитие" subtitle="Планы по развитию инфраструктуры и возможностей">
        <div className="flex gap-[40px]">
          <Card title="Че-то там" description="Repudiandae earum vitae mollitia. Veritatis deleniti est quidem explicabo fugiat possimus. Qui alias accusantium corrupti ea nobis aperiam. Rerum enim iste tempore a. Voluptatem sed ut accusantium et. Cum in sequi dolorem illo. Et exercitationem ut omnis consequatur." to="#" />
          <Card title="Че-то там" description="Repudiandae earum vitae mollitia. Veritatis deleniti est quidem explicabo fugiat possimus. Qui alias accusantium corrupti ea nobis aperiam. Rerum enim iste tempore a. Voluptatem sed ut accusantium et. Cum in sequi dolorem illo. Et exercitationem ut omnis consequatur." to="#" />
          <Card title="Че-то там" description="Repudiandae earum vitae mollitia. Veritatis deleniti est quidem explicabo fugiat possimus. Qui alias accusantium corrupti ea nobis aperiam. Rerum enim iste tempore a. Voluptatem sed ut accusantium et. Cum in sequi dolorem illo. Et exercitationem ut omnis consequatur." to="#" />
        </div>
      </Section>
    </Page>
  )
}
