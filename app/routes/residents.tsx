import { NavLink } from "react-router";
import Page from "~/components/page";
import ResidentCard from "~/components/residentcard";

export default function Residents() {
  return (
    <Page title="Резиденты">
      <section className="grid grid-cols-3 gap-[40px] px-[80px]">
        <NavLink to="1"><ResidentCard image="/residents/1.png" alt="1" /></NavLink>
        <NavLink to="2"><ResidentCard image="/residents/2.png" alt="2" /></NavLink>
        <NavLink to="3"><ResidentCard image="/residents/3.png" alt="3" /></NavLink>
        <NavLink to="4"><ResidentCard image="/residents/4.png" alt="4" /></NavLink>
        <NavLink to="5"><ResidentCard image="/residents/5.png" alt="5" /></NavLink>
        <NavLink to="6"><ResidentCard image="/residents/6.png" alt="6" /></NavLink>
        <NavLink to="7"><ResidentCard image="/residents/7.png" alt="7" /></NavLink>
        <NavLink to="8"><ResidentCard image="/residents/8.png" alt="8" /></NavLink>
        <NavLink to="9"><ResidentCard image="/residents/9.png" alt="9" /></NavLink>
        <NavLink to="10"><ResidentCard image="/residents/10.png" alt="10" /></NavLink>
        <NavLink to="11"><ResidentCard image="/residents/11.png" alt="11" /></NavLink>
        <NavLink to="12"><ResidentCard image="/residents/12.png" alt="12" /></NavLink>
        <NavLink to="13"><ResidentCard image="/residents/13.png" alt="13" /></NavLink>
        <NavLink to="14"><ResidentCard image="/residents/14.png" alt="14" /></NavLink>
        <NavLink to="15"><ResidentCard image="/residents/15.png" alt="15" /></NavLink>
        <NavLink to="16"><ResidentCard image="/residents/16.png" alt="16" /></NavLink>
      </section>
    </Page>
  )
}
