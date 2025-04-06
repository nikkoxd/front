import Page from "~/components/page";
import type { Route } from "./+types/news";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Новости - Титановая Долина" },
  ];
}

export default function News() {
  return (
    <Page title="Новости">
      Новости
    </Page>
  )
}
