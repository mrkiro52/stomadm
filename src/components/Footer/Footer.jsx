import "./Footer.scss";
import logo from "./images/logo_white.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
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
            <Link to="/service/filling" onClick={scrollToTop}>{t("footer_filling")}</Link>
            <Link to="/service/teeth-cleaning" onClick={scrollToTop}>{t("footer_teeth_cleaning")}</Link>
            <Link to="/service/teeth-whitening" onClick={scrollToTop}>{t("footer_teeth_whitening")}</Link>
            <Link to="/service/e-max-veneers" onClick={scrollToTop}>{t("footer_emax_veneers")}</Link>
            <Link to="/service/e-max-crown" onClick={scrollToTop}>{t("footer_emax_crown")}</Link>
            <Link to="/service/gingivoplasty" onClick={scrollToTop}>{t("footer_gingivoplasty")}</Link>
            <Link to="/service/botox" onClick={scrollToTop}>{t("footer_botox")}</Link>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_implants_title")}</h4>
            <Link to="/service/zirconia-crown-on-tooth" onClick={scrollToTop}>{t("footer_zirconia_tooth")}</Link>
            <Link to="/service/zirconia-crown-on-implant" onClick={scrollToTop}>{t("footer_zirconia_implant")}</Link>
            <Link to="/service/bone-grafting" onClick={scrollToTop}>{t("footer_bone_grafting")}</Link>
            <Link to="/service/sinus-lifting" onClick={scrollToTop}>{t("footer_sinus_lifting")}</Link>
            <Link to="/service/piezolifting" onClick={scrollToTop}>{t("footer_piezolifting")}</Link>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_specialty_title")}</h4>
            <Link to="/service/root-canal-treatment" onClick={scrollToTop}>{t("footer_root_canal")}</Link>
            <Link to="/service/tooth-extraction" onClick={scrollToTop}>{t("footer_tooth_extraction")}</Link>
            <Link to="/service/wisdom-tooth-extraction" onClick={scrollToTop}>{t("footer_wisdom_extraction")}</Link>
            <Link to="/service/cystectomy" onClick={scrollToTop}>{t("footer_cystectomy")}</Link>
            <Link to="/service/apicoectomy" onClick={scrollToTop}>{t("footer_apicoectomy")}</Link>
            <Link to="/service/flap-surgery" onClick={scrollToTop}>{t("footer_flap_surgery")}</Link>
            <Link to="/service/curettage" onClick={scrollToTop}>{t("footer_curettage")}</Link>
          </div>

          <div className="Footer_list">
            <h4 className="Footer_title">{t("footer_orthodontics_title")}</h4>
            <Link to="/service/braces" onClick={scrollToTop}>{t("footer_braces")}</Link>
            <Link to="/service/aligners" onClick={scrollToTop}>{t("footer_aligners")}</Link>
            <Link to="/service/night-guard" onClick={scrollToTop}>{t("footer_night_guard")}</Link>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <div className="Footer_bottom_wrapper">
          <p>{t("footer_rights")}</p>
          <div className="Footer_socials">
            <a href="https://www.instagram.com/dismimarisi?igsh=aW1mMzByMnQ3bnc=" target="_blank" rel="noopener noreferrer">
              {t("footer_instagram")} <span>@dismimarisi</span>
            </a>
            <a href="https://www.linkedin.com/company/dismimarisi?originalSubdomain=tr" target="_blank" rel="noopener noreferrer">
              {t("footer_facebook")} <span>@dismimarisi</span>
            </a>
            <a href="https://www.instagram.com/dis.mimarisi?igsh=MWxsM20zNXdob2Y2eg==" target="_blank" rel="noopener noreferrer">
              {t("footer_instagram")} <span>@dis.mimarisi</span>
            </a>
            <a href="https://www.tiktok.com/@dis.mimarisi?_t=ZN-90Xk0jUO622&_r=1" target="_blank" rel="noopener noreferrer">
              {t("footer_tiktok")} <span>@dis.mimarisi</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
