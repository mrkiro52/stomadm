import "./Contacts.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import clinic from "./images/clinic.jpg";

export default function Contacts() {
  localStorage.setItem("page", "contacts");
  return (
    <section className="Contacts">
      <Header />
      <div className="Contacts_wrapper">
        <div className="Contacts_inner">
          <div className="Contacts_info">
            <span className="tag">Contacts</span>

            <div className="Contacts_block">
              <p className="Contacts_label">Address:</p>
              <p>
                Esentepe, Büyükdere Cd. No: 112B, 34394 Şişli/İstanbul, Türkiye
              </p>
            </div>

            <div className="Contacts_block">
              <p className="Contacts_label">Phone:</p>
              <p>
                <a href="tel:+902122160004">+90 (212) 216 00 04</a>
              </p>
            </div>

            <div className="Contacts_block">
              <p className="Contacts_label">E-mail:</p>
              <p>
                <a href="mailto:info@dismimarisi.com">info@dismimarisi.com</a>
              </p>
            </div>

            <div className="Contacts_map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12001.847841479924!2d29.007358!3d41.072085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab707f1ee7bcb%3A0x1c92380b65a6c969!2sDiş%20Mimarisi%20Klinik!5e0!3m2!1sen!2str!4v1709488486767!5m2!1sen!2str"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="Contacts_socials">
              <p>
                Instagram: <span>@dismimarisi</span>
              </p>
              <p>
                Facebook: <span>@dismimarisi</span>
              </p>
              <p>
                TikTok: <span>@dismimarisi</span>
              </p>
              <p>
                VK: <span>@dismimarisi</span>
              </p>
            </div>
          </div>

          <div className="Contacts_image">
            <img src={clinic} alt="Clinic" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
