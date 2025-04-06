import Page from "~/components/page";
import type { Route } from "./+types/vacancies";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Вакансии - Титановая Долина" },
  ];
}

export default function Vacancies() {
  return (
    <Page title="Вакансии">
      Вакансии
    </Page>
  )
}
