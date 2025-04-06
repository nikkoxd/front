import Page from "~/components/page";
import type { Route } from "./+types/profile";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Профиль - Титановая Долина" },
  ];
}

export default function Profile() {
  return (
    <Page title="Профиль">
      Профиль
    </Page>
  )
}
