import LocationIcon from "../assets/location.svg"
import PhoneIcon from "../assets/phone.svg"
import EmailIcon from "../assets/email.svg"

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts_left">
        <h1>Контакты</h1>
      </div>
      <div className="contacts_right">
        <div className="contacts_item">
          <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          <div className="contact_info">
            <img src={LocationIcon} alt="location" />
            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
          </div>
          <div className="contact_info">
            <img src={PhoneIcon} alt="phone" />
            <p>Тел: +7 343 243 55 83</p>
          </div>
          <div className="contact_info">
            <img src={EmailIcon} alt="e-mail" />
            <p>Почта: welcome@titanium-valley.com</p>
          </div>
        </div>
        <div className="contacts_item">
          <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          <div className="contact_info">
            <img src={LocationIcon} alt="location" />
            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
          </div>
          <div className="contact_info">
            <img src={PhoneIcon} alt="phone" />
            <p>Тел: +7 343 243 55 83</p>
          </div>
          <div className="contact_info">
            <img src={EmailIcon} alt="e-mail" />
            <p>Почта: welcome@titanium-valley.com</p>
          </div>
        </div>
        <div className="contacts_item">
          <h3>ОЭЗ «ТИТАНОВАЯ ДОЛИНА»</h3>
          <div className="contact_info">
            <img src={LocationIcon} alt="location" />
            <p>620075 Российская Федерация, Екатеринбург, ул. Малышева, стр. 51, офис 2102</p>
          </div>
          <div className="contact_info">
            <img src={PhoneIcon} alt="phone" />
            <p>Тел: +7 343 243 55 83</p>
          </div>
          <div className="contact_info">
            <img src={EmailIcon} alt="e-mail" />
            <p>Почта: welcome@titanium-valley.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;
