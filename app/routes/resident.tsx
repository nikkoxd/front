import Page from "~/components/page";
import type { Route } from "./+types/resident";
import Section from "~/components/section";
import Info from "~/components/info";
import Button from "~/components/button";

export async function loader({ params }: Route.LoaderArgs) {
  return {
    id: params.id,
  }
}

interface ResidentData {
  name: string;
  photoUrl: string;
  description: string;
  ceo: CeoContactInfo;
  vacanciesUrl: string;
  sendResumeUrl: string;
  inNumbers: InNumbers[];
}

interface CeoContactInfo {
  name: string;
  address: string;
  website: string;
}

interface InNumbers {
  title: string;
  value: string;
}

// TODO: Fetch this data from backend
const residentData: ResidentData[] = [
  {
    name: "АО \"Уральский завод гражданской авиации\"",
    photoUrl: "/resident_photo_1.png",
    description: "АО «Уральский завод гражданской авиации» – одно из крупнейших авиаремонтных предприятий Российской Федерации. За более чем 80-летнюю историю своего существования УЗГА упрочил лидирующее положение в отрасли за счет постоянного совершенствования технологий ремонта, непрерывного освоения новых видов производственной деятельности и расширения номенклатуры услуг",
    ceo: {
      name: "Лузгин Леонид Андреевич",
      address: "620025, Свердловская область, город Екатеринбург, ул. Бахчиванджи, 2г",
      website: "uwca.ru",
    },
    vacanciesUrl: "idk",
    sendResumeUrl: "idk",
    inNumbers: [
      {
        title: "объем инвестиций",
        value: "924 млн.руб",
      },
      {
        title: "рабочих мест",
        value: "1060",
      },
      {
        title: "дата открытия производства",
        value: "2018 год",
      }
    ],
  }
]

export default function Resident({ loaderData }: Route.ComponentProps) {
  // TODO: Fetch this data from backend
  const residentInfo = residentData[Number(loaderData.id) - 1]

  return (
    <Page title={residentInfo.name}>
      <section className="px-[80px]">
        <img src={residentInfo.photoUrl} alt={residentInfo.name} className="w-full h-[637px] rounded-[32px]" />
      </section>
      <Section title="О компании" horizontal>
        <div className="flex flex-col gap-[32px]">
          <p>{residentInfo.description}</p>

          <Info title={
            <h3>Генеральный директор</h3>
          } content={
            <>
              <p>{residentInfo.ceo.name}</p>
              <p>{residentInfo.ceo.address}</p>
              <p>Сайт: <a className="underline" href={residentInfo.ceo.website}>{residentInfo.ceo.website}</a></p>
            </>
          } />

          <Info title={
            <h3>Вакансии компании</h3>
          } content={
            <a className="underline" href={residentInfo.vacanciesUrl}>Подробнее о вакансиях</a>
          } />

          <div>
            <Button to={residentInfo.sendResumeUrl}>Направить резюме в кадровый резерв</Button>
          </div>
        </div>
      </Section>
      <Section title="Компания в цифрах">
        <div className="grid grid-cols-3">
          {residentInfo.inNumbers.map(({ title, value }) => (
            <div key={title} className="flex flex-col text-center gap-[24px]">
              <h2 className="text-primary">{value}</h2>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
}
