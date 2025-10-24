import "./Footer.scss";
import logo from "./images/logo_white.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="Footer_info_wrapper">
          <img src={logo} alt="Logo" className="Footer_logo" />
          <p className="Footer_address">
            {t("footer_address_label")} <br />
            {t("footer_address_text")}
          </p>
        </div>
        <div className="Footer_menu_wrapper">
          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_menu_title")}</h4>
            <a href="#">{t("footer_menu_customer_journey")}</a>
            <a href="#">{t("footer_menu_results")}</a>
            <a href="#">{t("footer_menu_advantages")}</a>
            <a href="#">{t("footer_menu_doctors")}</a>
            <a href="#">{t("footer_menu_reviews")}</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_cosmetic_title")}</h4>
            <a href="#">{t("footer_filling")}</a>
            <a href="#">{t("footer_teeth_cleaning")}</a>
            <a href="#">{t("footer_teeth_whitening")}</a>
            <a href="#">{t("footer_emax_veneers")}</a>
            <a href="#">{t("footer_emax_crown")}</a>
            <a href="#">{t("footer_gingivoplasty")}</a>
            <a href="#">{t("footer_botox")}</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_implants_title")}</h4>
            <a href="#">{t("footer_zirconia_tooth")}</a>
            <a href="#">{t("footer_zirconia_implant")}</a>
            <a href="#">{t("footer_bone_grafting")}</a>
            <a href="#">{t("footer_sinus_lifting")}</a>
            <a href="#">{t("footer_piezolifting")}</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_specialty_title")}</h4>
            <a href="#">{t("footer_root_canal")}</a>
            <a href="#">{t("footer_tooth_extraction")}</a>
            <a href="#">{t("footer_wisdom_extraction")}</a>
            <a href="#">{t("footer_cystectomy")}</a>
            <a href="#">{t("footer_apicoectomy")}</a>
            <a href="#">{t("footer_flap_surgery")}</a>
            <a href="#">{t("footer_curettage")}</a>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_orthodontics_title")}</h4>
            <a href="#">{t("footer_braces")}</a>
            <a href="#">{t("footer_aligners")}</a>
            <a href="#">{t("footer_night_guard")}</a>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <div className="Footer_bottom_wrapper">
          <p>{t("footer_rights")}</p>
          <div className="Footer_socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("footer_instagram")} <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("footer_facebook")} <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("footer_tiktok")} <span>@dismimarisi</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("footer_vk")} <span>@dismimarisi</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
