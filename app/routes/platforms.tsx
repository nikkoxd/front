import { NavLink } from "react-router";
import Page from "~/components/page";
import type { Route } from "./+types/platforms";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Площадки - Титановая Долина" },
  ];
}

export default function Platforms() {
  return (
    <Page title="Площадки">
      <section className="flex justify-between">
        <NavLink to="1"><img src="/platforms/1_photo.png" alt="1" /></NavLink>
        <NavLink to="2"><img src="/platforms/2_photo.png" alt="2" /></NavLink>
        <NavLink to="3"><img src="/platforms/3_photo.png" alt="3" /></NavLink>
      </section>
    </Page>
  )
}
