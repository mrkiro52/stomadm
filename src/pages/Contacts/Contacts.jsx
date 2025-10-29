import "./Contacts.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import clinic from "./images/clinic.jpg";
import { useState, useEffect } from "react";
import girlform from "./images/girlform.png";
import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();
  localStorage.setItem("page", "contacts");
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "message" && value.length > 300) return;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = t("contacts_form_error_name");
      if (!formData.phone.trim()) newErrors.phone = t("contacts_form_error_phone");
      if (!formData.email.trim()) newErrors.email = t("contacts_form_error_email");
      if (!formData.service.trim()) newErrors.service = t("contacts_form_error_service");
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        // 👇 здесь будет логика отправки формы
        console.log("Form submitted:", formData);
      }
    };
  return (
    <section className="Contacts">
      {" "}
      <Header />{" "}
      <div className="Contacts_wrapper">
        {" "}
        <div className="Contacts_inner">
          {" "}
          <div className="Contacts_info">
            {" "}
            <span className="tag">{t("contacts_tag")}</span>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">{t("contacts_address_label")}</p>{" "}
              <p>
                {" "}
                Esentepe, Büyükdere Cd. No: 112B, 34394 Şişli/İstanbul, Türkiye{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">{t("contacts_phone_label")}</p>{" "}
              <p>
                {" "}
                <a href="tel:+902122160004">+90 (212) 216 00 04</a>{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">{t("contacts_email_label")}</p>{" "}
              <p>
                {" "}
                <a href="mailto:info@dismimarisi.com">
                  info@dismimarisi.com
                </a>{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_map">
              {" "}
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12001.847841479924!2d29.007358!3d41.072085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab707f1ee7bcb%3A0x1c92380b65a6c969!2sDiş%20Mimarisi%20Klinik!5e0!3m2!1sen!2str!4v1709488486767!5m2!1sen!2str"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>{" "}
            <div className="Contacts_socials">
              {" "}
              <p>
                {" "}
                {t("contacts_instagram")} <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                {t("contacts_facebook")} <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                {t("contacts_tiktok")} <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                {t("contacts_vk")} <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="Contacts_image">
            {" "}
            <img src={clinic} alt="Clinic" />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="wrapper-form">
      <section className="booking-section">
      <div className="booking-container">
        {/* Левая часть */}
        <div className="booking-left">
          <span className="booking-span">{t("contacts_booking_tag")}</span>
          <h2 className="booking-title">{t("contacts_booking_title")} <span>{t("contacts_booking_title_span")}</span></h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label>{t("contacts_form_name")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contacts_form_name_placeholder")}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="input-group">
                <label>{t("contacts_form_phone")}</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contacts_form_phone_placeholder")}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>{t("contacts_form_email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contacts_form_email_placeholder")}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="input-group">
                <label>{t("contacts_form_service")}</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">{t("contacts_form_service_placeholder")}</option>
                  <option>{t("contacts_form_service_hollywood")}</option>
                  <option>{t("contacts_form_service_implants")}</option>
                  <option>{t("contacts_form_service_veneers")}</option>
                  <option>{t("contacts_form_service_crowns")}</option>
                  <option>{t("contacts_form_service_all_on_6")}</option>
                </select>
                {errors.service && <p className="error">{errors.service}</p>}
              </div>
            </div>

            <div className="textarea-group">
              <label style={{marginBottom: '8px', fontWeight: 500}}>{t("contacts_form_message")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contacts_form_message_placeholder")}
                maxLength="300"
              />
              <span className="char-count">[{formData.message.length}/300]</span>
            </div>

            <button type="submit" className="send-btn">
              {t("contacts_form_send")}
            </button>
          </form>

          <div className="info-row">
            <div className="info-block">
              <span>{t("contacts_info_instagram")}</span>
              <p>@dismimarisi</p>
            </div>
            <div className="info-block" style={{alignItems: 'flex-end'}}>
              <span>{t("contacts_info_address")}</span>
              <p style={{textAlign: 'end'}}>
                Esentepe, Büyükdere Cd. No: 112B, 34394 Şişli/İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="booking-right">
          <img src={girlform} alt="Form background" style={{ width: "100%", height: "100%", borderRadius: 16, objectFit: "cover" }} />
        </div>
      </div>
    </section>
      </div>
      <Footer />{" "}
    </section>
  );
}
