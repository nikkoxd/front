import Page from "~/components/page";
import type { Route } from "./+types/contacts";
import Info from "~/components/info";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Контакты - Титановая Долина" },
  ];
}

export default function Contacts() {
  return (
    <Page title="Контакты">
      <div className="flex flex-col gap-[32px] w-1/2">
        <Info
          title={
            <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          }
          content={
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[16px]">
                <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                <p className="m-0">Тел: +7 343 243 55 83</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                <p className="m-0">Почта: welcome@titanium-valley.com</p>
              </div>
            </div>
          }
        />
        <Info
          title={
            <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          }
          content={
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[16px]">
                <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                <p className="m-0">Тел: +7 343 243 55 83</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                <p className="m-0">Почта: welcome@titanium-valley.com</p>
              </div>
            </div>
          }
        />
        <Info
          title={
            <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          }
          content={
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[16px]">
                <img src="/location.svg" alt="Location" className="w-[24px] h-[24px]" />
                <p className="m-0">620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/phone.svg" alt="Phone" className="w-[24px] h-[24px]" />
                <p className="m-0">Тел: +7 343 243 55 83</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <img src="/email.svg" alt="E-Mail" className="w-[24px] h-[24px]" />
                <p className="m-0">Почта: welcome@titanium-valley.com</p>
              </div>
            </div>
          }
        />
      </div>
    </Page>
  )
}
