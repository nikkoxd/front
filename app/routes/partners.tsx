import Page from "~/components/page";
import type { Route } from "./+types/partners";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Партнеры - Титановая Долина" },
  ];
}

export default function Partners() {
  return (
    <Page title="Партнеры">
      Партнеры
    </Page>
  )
}
