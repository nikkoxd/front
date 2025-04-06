import Page from "~/components/page";
import type { Route } from "./+types/contacts";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Контакты - Титановая Долина" },
  ];
}

export default function Contacts() {
  return (
    <Page title="Контакты">
      Контакты
    </Page>
  )
}
