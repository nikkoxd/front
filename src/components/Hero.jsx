import LargeLogo from "../assets/logo_large.svg"
import Photo from "../assets/photo.png"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_left">
          <img src={LargeLogo} alt="large logo" />
          <p>Добро пожаловать в Титановую Долину — уникальную особую экономическую зону промышленно-производственного типа в Свердловской области!</p>
        </div>
        <div className="hero_right">
          <a className="button" href="#">Получить консультацию</a>
        </div>
      </section>
      <section className="hero_img">
        <img src={Photo} alt="photo" />
      </section>
    </>
  )
}

export default Hero;
