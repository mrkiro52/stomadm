import "./Footer.scss";
import logo from "./images/logo_white.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="Footer_info_wrapper">
          <img src={logo} alt="Logo" className="Footer_logo" />
          <p className="Footer_address">
            Address: <br />
            Esentepe, Büyükdere Cd. <br />
            No: 112B, 34394 Şişli/ <br />
            İstanbul, Türkiye
          </p>
        </div>
        <div className="Footer_menu_wrapper">
          <div className="Footer_list">
            <h4 className="Footer_title">Menu</h4>
            <a href="#">Customer journey</a>
            <a href="#">Results</a>
            <a href="#">Advantages</a>
            <a href="#">Doctors</a>
            <a href="#">Reviews</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">Cosmetic Dentistry</h4>
            <a href="#">Filling</a>
            <a href="#">Teeth Cleaning</a>
            <a href="#">Teeth Whitening</a>
            <a href="#">E-max Veneers</a>
            <a href="#">E-max Crown</a>
            <a href="#">Gingivoplasty</a>
            <a href="#">Botox</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">Dental Implants</h4>
            <a href="#">Zirconia Crown on Tooth</a>
            <a href="#">Zirconia Crown on Implant</a>
            <a href="#">Bone Grafting</a>
            <a href="#">Sinus Lifting</a>
            <a href="#">Piezolifting</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">Specialty Treatments</h4>
            <a href="#">Root Canal Treatment</a>
            <a href="#">Tooth Extraction</a>
            <a href="#">Wisdom Tooth Extraction</a>
            <a href="#">Cystectomy</a>
            <a href="#">Apicoectomy</a>
            <a href="#">Flap Surgery</a>
            <a href="#">Curettage</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">Orthodontics</h4>
            <a href="#">Braces</a>
            <a href="#">Aligners</a>
            <a href="#">Night Guard</a>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <div className="Footer_bottom_wrapper">
          <p>© 2025 All rights reserved.</p>
          <div className="Footer_socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram: <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook: <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              TikTok: <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              VK: <span>@dismimarisi</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
