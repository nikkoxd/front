import Page from "~/components/page";
import type { Route } from "./+types/profile";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Личный кабинет - Титановая Долина" },
  ];
}

export default function Profile() {
  return (
    <Page title="Личный кабинет">
      <form className="flex flex-col gap-[32px] w-1/3">
        <input type="text" placeholder="Имя" className="border-b-1 border-black pb-[8px]" />
        <input type="text" placeholder="Телефон" className="border-b-1 border-black pb-[8px]" />
        <input type="email" placeholder="Почта" className="border-b-1 border-black pb-[8px]" />
        <input type="password" placeholder="Пароль" className="border-b-1 border-black pb-[8px]" />
      </form>
    </Page>
  )
}
