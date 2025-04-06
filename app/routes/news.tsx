import Page from "~/components/page";
import type { Route } from "./+types/news";
import { NavLink, redirect } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Новости - Титановая Долина" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  if (!params.id) {
    return redirect("/news/1");
  }
  return { id: params.id }
}

interface News {
  title: string;
  date: Date;
  photoUrl: string;
  text: string;
}

const newsData: News[] = [
  {
    title: "Где работать, когда меня научат?",
    date: new Date(),
    photoUrl: "/news_1.png",
    text: "Новость 1",
  },
  {
    title: "Новость 2",
    date: new Date(),
    photoUrl: "/news_2.png",
    text: "Новость 2",
  },
  {
    title: "Новость 3",
    date: new Date(),
    photoUrl: "/news_3.png",
    text: "Новость 3",
  },
]

export default function News({ loaderData }: Route.ComponentProps) {
  const newsInfo = newsData[Number(loaderData.id) - 1]

  return (
    <Page title="Новости">
      <section className="flex justify-between">
        <div className="flex flex-col gap-[56px] w-[290px]">
          {newsData.map(({ title, photoUrl }, i) => (
            <NavLink key={i} to={`/vacancies/${i + 1}`} className="flex flex-col gap-[24px]">
              <img src={photoUrl} alt={title} className="object-cover aspect-square rounded-[15px]" />
              <b className="text-[20px]">{title}</b>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-[48px] w-[62%]">
          <div className="flex flex-col gap-[16px]">
            <h3>{newsInfo.title}</h3>
            <p className="flex items-center gap-[22px]"><img src="/calendar.svg" />{newsInfo.date.toLocaleDateString()}</p>
          </div>
          <img src={newsInfo.photoUrl} alt={newsInfo.title} className="object-cover aspect-square rounded-[24px]" />
          <p>{newsInfo.text}</p>
        </div>
      </section>
    </Page>
  )
}
