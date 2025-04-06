import Page from "~/components/page";
import type { Route } from "./+types/vacancies";
import { NavLink, redirect } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Вакансии - Титановая Долина" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  if (!params.id) {
    return redirect("/vacancies/1");
  }
  return { id: params.id }
}

interface Vacancy {
  name: string;
  photoUrl: string;
  requirements: string;
  responsibilities: string;
  salary: string;
  workConditions: string;
}

// TODO: Fetch this data from backend
const vacancyData: Vacancy[] = [
  {
    name: "Слесарь-ремонтник, занятый на горячем участке работ 3-7 разряд",
    photoUrl: "/vacancy_1.png",
    requirements: "Среднее профессиональное образование",
    responsibilities: "Для выполнения работ, непосредственно связанных с практикой, профессиональным обучением или дополнительным профессиональным образованием в форме стажировки (подготовка на 6 разряд)",
    salary: "41000 - 62000",
    workConditions: "Место работы: г. Нижний Тагил\nОфициальное трудоустройство согласно ТК РФ"
  },
  {
    name: "Электромонтер по ремонту и обслуживанию электрооборудования 3-8 рязряд",
    photoUrl: "/vacancy_2.png",
    requirements: "хз",
    responsibilities: "хз",
    salary: "хз",
    workConditions: "хз"
  },
  {
    name: "Резчик холодного металла 3-5 разряд",
    photoUrl: "/vacancy_3.png",
    requirements: "хз",
    responsibilities: "хз",
    salary: "хз",
    workConditions: "хз"
  },
  {
    name: "Оператор поста управления стана горячей прокатки 3-6 разряд",
    photoUrl: "/vacancy_4.png",
    requirements: "хз",
    responsibilities: "хз",
    salary: "хз",
    workConditions: "хз"
  },
]

export default function Vacancies({ loaderData }: Route.ComponentProps) {
  const vacancyInfo = vacancyData[Number(loaderData.id) - 1]

  return (
    <Page title="Вакансии">
      <section className="flex justify-between">
        <div className="flex flex-col gap-[56px] w-[290px]">
          {vacancyData.map(({ name, photoUrl }, i) => (
            <NavLink key={i} to={ `/vacancies/${i + 1}` } className="flex flex-col gap-[24px]">
              <img src={photoUrl} alt={name} className="object-cover aspect-square rounded-[15px]" />
              <b className="text-[20px]">{name}</b>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-[48px] w-[62%]">
          <h3>{vacancyInfo.name}</h3>
          <img src={vacancyInfo.photoUrl} alt={vacancyInfo.name} className="object-cover aspect-square rounded-[24px]" />
          <div className="flex flex-col">
            <div className="grid grid-cols-2">
              <p className="flex items-center h-full border-r-1 border-black"><img src="/requirements.svg" className="mr-[5px]" />Требования к сотруднику</p>
              <p className="pl-12 py-[60px]">{vacancyInfo.requirements}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="flex items-center h-full border-r-1 border-black"><img src="/responsibilities.svg" className="mr-[5px]" />Обязанности сотрудника</p>
              <p className="pl-12 py-[60px]">{vacancyInfo.responsibilities}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="flex items-center h-full border-r-1 border-black"><img src="/salary.svg" className="mr-[5px]" />Уровень заработной платы</p>
              <p className="pl-12 py-[60px]">{vacancyInfo.salary}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="flex items-center h-full border-r-1 border-black"><img src="/work_conditions.svg" className="mr-[5px]" />Условия работы</p>
              <p className="pl-12 py-[60px]">{vacancyInfo.workConditions}</p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
