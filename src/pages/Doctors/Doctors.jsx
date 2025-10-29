import "./Doctors.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import doctor1 from "./images/doctor1.jpg";
import doctor2 from "./images/doctor2.jpg";
import Form from "../../components/Form/Form";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

export default function Doctors() {
    const { t } = useTranslation();
    localStorage.setItem('page', 'doctors');
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div className="Doctors">
      <Header />
      <div className="container">
        <section className="doctors-block">
          <header className="doctors-header">
            <span className="tag">{t("doctors_tag")}</span>
            <h1 className="title">
              {t("doctors_title")} <br />
              <span className="subtitle">{t("doctors_subtitle")}</span>
            </h1>
          </header>

          <div className="doctors-grid">
            <div className="portrait-large">
              <img src={doctor1} alt="Doctor 1" />
            </div>
            <div className="bio-top">
              <div className="caption_name">
                <small className="caption">{t("doctors_caption")}</small>
                <h2 className="name">{t("doctors_samed_name")}</h2>
              </div>
              <p className="bio">
                {t("doctors_samed_bio")}
              </p>
            </div>
            <div className="bio-bottom">
              <div className="caption_name">
                <small className="caption">{t("doctors_caption")}</small>
                <h3 className="name">{t("doctors_abdullah_name")}</h3>
              </div>
              <p className="bio">
                {t("doctors_abdullah_bio")}
              </p>
            </div>
            <div className="portrait-small">
              <img src={doctor2} alt="Doctor 2" />
            </div>
          </div>
        </section>
      </div>
      <div className="wrapper-form">
        <Form/>
      </div>
      <Footer />
    </div>
  );
}
