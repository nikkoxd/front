import Page from "~/components/page";
import type { Route } from "./+types/platform";

export async function loader({ params }: Route.LoaderArgs) {
  return {
    id: params.id,
  }
}

// TODO: Fetch this data from backend
interface PlatformData {
  name: string;
  description: string;
  schemeUrl: string;
}

const platformData: PlatformData[] = [
  {
    name: "Верхняя Салда",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    schemeUrl: "/platforms/1_scheme.png",
  },
  {
    name: "Уктус",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    schemeUrl: "/platforms/2_scheme.png",
  },
  {
    name: "Патруши",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    schemeUrl: "/platforms/3_scheme.png",
  },
]

export default function Platform({ loaderData }: Route.ComponentProps) {
  // TODO: Fetch this data from backend
  const platformInfo = platformData[Number(loaderData.id) - 1]
  return (
    <Page title={ `Площадка "${platformInfo.name}"` }>
      <section className="grid grid-cols-2 px-[80px]">
        <div>
          <p>{platformInfo.description}</p>
        </div>
        <div>
          <img src={platformInfo.schemeUrl} alt="Scheme" className="w-full h-[637px] rounded-[32px]" />
        </div>
      </section>
    </Page>
  )
}
