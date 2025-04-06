import Page from "~/components/page";
import type { Route } from "./+types/partners";
import ResidentCard from "~/components/residentcard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Партнеры - Титановая Долина" },
  ];
}

export default function Partners() {
  return (
    <Page title="Партнеры">
      <div className="grid grid-cols-3 gap-[40px]">
        <ResidentCard image="/partners/1.png" alt="Partner 1" />
        <ResidentCard image="/partners/2.png" alt="Partner 2" />
        <ResidentCard image="/partners/3.png" alt="Partner 3" />
        <ResidentCard image="/partners/4.png" alt="Partner 4" />
        <ResidentCard image="/partners/5.png" alt="Partner 5" />
        <ResidentCard image="/partners/6.png" alt="Partner 6" />
        <ResidentCard image="/partners/7.png" alt="Partner 7" />
      </div>
    </Page>
  )
}
