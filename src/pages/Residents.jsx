import Resident1 from "../assets/residents/1.png"
import Resident2 from "../assets/residents/2.png"
import Resident3 from "../assets/residents/3.png"
import Resident4 from "../assets/residents/4.png"
import Resident5 from "../assets/residents/5.png"
import Resident6 from "../assets/residents/6.png"
import Resident7 from "../assets/residents/7.png"
import Resident8 from "../assets/residents/8.png"
import Resident9 from "../assets/residents/9.png"
import Resident10 from "../assets/residents/10.png"
import Resident11 from "../assets/residents/11.png"
import Resident12 from "../assets/residents/12.png"
import Resident13 from "../assets/residents/13.png"
import Resident14 from "../assets/residents/14.png"
import Resident15 from "../assets/residents/15.png"
import Resident16 from "../assets/residents/16.png"

const Residents = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Резиденты</p>
        <h1>Резиденты</h1>
      </section>
      <section className="residents">
        <div className="residents_list">
          <div className="residents_item">
            <img src={Resident1} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident2} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident3} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident4} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident5} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident6} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident7} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident8} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident9} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident10} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident11} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident12} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident13} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident14} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident15} alt="resident" />
          </div>
          <div className="residents_item">
            <img src={Resident16} alt="resident" />
          </div>
          <div className="residents_item">
            ООО "ЗАВОД ПРЕССОВАННЫХ ПРОФИЛЕЙ"
          </div>
          <div className="residents_item">
            ООО "ЭКОТЕХ"
          </div>
          <div className="residents_item">
            ООО "КЕРАМАКС"
          </div>
        </div>
      </section>
    </main>
  );
};

export default Residents;