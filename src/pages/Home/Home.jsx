import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import arrow from "./images/arrow.svg";
import girl from "./images/smile.png";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon4 from "./images/icon4.svg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import before1 from "./images/before1.png";
import after1 from "./images/after1.png";
import before2 from "./images/before2.png";
import after2 from "./images/after2.png";
import before3 from "./images/before3.png";
import after3 from "./images/after3.png";
import before4 from "./images/before4.png";
import after4 from "./images/after4.png";
import before5 from "./images/before5.png";
import after5 from "./images/after5.png";
import before6 from "./images/before6.png";
import after6 from "./images/after6.png";
import { useState } from "react";
import doctor1 from "./images/doctor1.jpg";
import doctor2 from "./images/doctor2.jpg";
import Form from "../../components/Form/Form";
import VirtualSwiper from "../../components/VirtualSwiper/VirtualSwiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Results from "../../components/Results/Results";
import Reviews from "../Reviews/Reviews";

export default function Home() {
  localStorage.setItem("page", "home");
  const [resultsPage, setResultsPage] = useState(0);
  const { t } = useTranslation();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const scrollToForm = () => {
    const formElement = document.querySelector(".booking-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const images = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
    { before: before5, after: after5 },
    { before: before6, after: after6 },
  ];

  // Локальный массив отзывов
  const reviewsData = [
    {
      id: 1,
      name: t("reviews_name_1"),
      text: t("reviews_review_1"),
    },
    {
      id: 2,
      name: t("reviews_name_2"),
      text: t("reviews_review_2"),
    },
    {
      id: 3,
      name: t("reviews_name_3"),
      text: t("reviews_review_3"),
    },
    {
      id: 4,
      name: t("reviews_name_4"),
      text: t("reviews_review_4"),
    },
    {
      id: 5,
      name: t("reviews_name_5"),
      text: t("reviews_review_5"),
    },
    {
      id: 6,
      name: t("reviews_name_6"),
      text: t("reviews_review_6"),
    },
  ];

  const slides = [
    "Тбилиси, Грузия",
    "Батуми, Грузия",
    "Москва, Россия",
    "Ереван, Армения",
    "Тбилиси, Грузия",
    "Батуми, Грузия",
    "Москва, Россия",
    "Ереван, Армения",
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const current = images[resultsPage];

  // Все 22 услуги с их данными - взято из Services.jsx
  const services = [
    {
      title: t("service_filling_title"),
      slug: "filling",
    },
    {
      title: t("service_teeth_cleaning_title"),
      slug: "teeth-cleaning",
    },
    {
      title: t("service_teeth_whitening_title"),
      slug: "teeth-whitening",
    },
    {
      title: t("service_e_max_veneers_title"),
      slug: "e-max-veneers",
    },
    {
      title: t("service_e_max_crown_title"),
      slug: "e-max-crown",
    },
    {
      title: t("service_gingivoplasty_title"),
      slug: "gingivoplasty",
    },
    {
      title: t("service_botox_title"),
      slug: "botox",
    },
    {
      title: t("service_zirconia_crown_on_tooth_title"),
      slug: "zirconia-crown-on-tooth",
    },
    {
      title: t("service_zirconia_crown_on_implant_title"),
      slug: "zirconia-crown-on-implant",
    },
    {
      title: t("service_bone_grafting_title"),
      slug: "bone-grafting",
    },
    {
      title: t("service_sinus_lifting_title"),
      slug: "sinus-lifting",
    },
    {
      title: t("service_piezolifting_title"),
      slug: "piezolifting",
    },
    {
      title: t("service_root_canal_treatment_title"),
      slug: "root-canal-treatment",
    },
    {
      title: t("service_tooth_extraction_title"),
      slug: "tooth-extraction",
    },
    {
      title: t("service_wisdom_tooth_extraction_title"),
      slug: "wisdom-tooth-extraction",
    },
    {
      title: t("service_cystectomy_title"),
      slug: "cystectomy",
    },
    {
      title: t("service_apicoectomy_title"),
      slug: "apicoectomy",
    },
    {
      title: t("service_flap_surgery_title"),
      slug: "flap-surgery",
    },
    {
      title: t("service_curottage_title"),
      slug: "curettage",
    },
    {
      title: t("service_braces_title"),
      slug: "braces",
    },
    {
      title: t("service_aligners_title"),
      slug: "aligners",
    },
    {
      title: t("service_night_guard_title"),
      slug: "night-guard",
    },
  ];
  const journeyData = [
    {
      image: icon1,
      title: t("journey_step1_title"),
      spanTitle: t("journey_step1_span"),
      text: t("journey_step1_text"),
    },
    {
      image: icon2,
      title: t("journey_step2_title"),
      spanTitle: t("journey_step2_span"),
      text: t("journey_step2_text"),
    },
    {
      image: icon3,
      title: t("journey_step3_title"),
      spanTitle: t("journey_step3_span"),
      text: t("journey_step3_text"),
    },
    {
      image: icon4,
      title: t("journey_step4_title"),
      spanTitle: t("journey_step4_span"),
      text: t("journey_step4_text"),
    },
  ];
  return (
    <div className="Home">
      <Header />
      <div className="Startscreen">
        <div className="wrapper">
          <h2>{t("home_title")}</h2>
          <div className="Startscreen_subtextBlock">
            <img src={arrow} alt="arrow" />
            <p>{t("home_subtitle")}</p>
          </div>
          <div className="Startscreen_bottom">
            <div className="Startscreen_blocks">
              <div className="Startscreen_blocks__block block1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#020045"
                  />
                  <path
                    d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25"
                    stroke="#020045"
                    stroke-linecap="round"
                  />
                </svg>
                <span>{t("home_promo1")}</span>
              </div>
              <div className="Startscreen_blocks__block block2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#ffffff"
                  />
                  <path
                    d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25"
                    stroke="#ffffff"
                    stroke-linecap="round"
                  />
                </svg>
                <span>{t("home_promo2")}</span>
              </div>
            </div>
            <button className="Startscreen_button" onClick={scrollToForm}>
              {t("home_button")}
            </button>
          </div>
          <img className="girl" src={girl} alt="smile" />
        </div>
      </div>
      <div className="Services">
        <div className="wrapper">
          <div className="topBlock">
            <div className="topBlock_left">
              <div className="tab">
                <span>Services</span>
              </div>
              <h2>
                Explore the full range
                <br />
                of <span>dental treatments</span>
              </h2>
            </div>
            <div className="topBlock_right">
              <p>
                If you want a gorgeous smile,
                <br />
                call us to ask about a smile makeover
              </p>
              <button onClick={scrollToForm}>Call us</button>
            </div>
          </div>
          <div className="bottomBlock">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/service/${service.slug}`}
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="circle">
                  <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
                </div>
                <span>{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="Journey">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>{t("journey_tab")}</span>
            </div>
            <h2>
              {t("journey_title")} <br />— <span>{t("journey_subtitle")}</span>
            </h2>
          </div>
          <div className="bottomBlock">
            {journeyData.map((element, index) => (
              <div
                key={element}
                className="block"
                style={
                  index % 2 !== 0
                    ? { backgroundColor: "rgba(78, 54, 41, 1)" }
                    : { backgroundColor: "rgba(255, 255, 255, 1)" }
                }
              >
                <div className="circle">
                  <img src={element.image} alt="icon" />
                </div>
                <div className="texts">
                  <h3
                    style={
                      index % 2 === 0 ? { color: "black" } : { color: "white" }
                    }
                  >
                    {element.title} {element.spanTitle}
                  </h3>
                  <p
                    style={
                      index % 2 === 0 ? { color: "black" } : { color: "white" }
                    }
                  >
                    {element.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Results theme="white" />
      <div className="Advantages">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>Advantages</span>
            </div>
            <h2>
              Why people <span>choose us?</span>
            </h2>
          </div>
          <div className="bottomGrid">
            <div className="row">
              <div className="block girl">{/* girls image background */}</div>
              <div className="block">
                <div className="block_el">
                  01
                  <br />
                  Accredited by
                  <br />
                  the Ministry of Health
                </div>
                <div className="block_el doctors">
                  {/* doctors little image */}
                </div>
                <div className="block_el empty"></div>
                <div className="block_el">
                  02
                  <br />
                  High Google rating
                </div>
              </div>
            </div>
            <div className="row">
              <div className="block">
                <div className="block_el empty"></div>
                <div className="block_el">
                  03
                  <br />
                  Top-rated
                  <br />
                  on TripAdvisor
                </div>
                <div className="block_el empty"></div>
                <div className="block_el empty"></div>
              </div>
              <div className="block">
                <div className="block_el zub">{/* teeth little image */}</div>
                <div className="block_el empty"></div>
                <div className="block_el empty"></div>
                <div className="block_el">
                  04
                  <br />
                  Sertified Specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <p className="bio">{t("doctors_samed_bio")}</p>
          </div>
          <div className="bio-bottom">
            <div className="caption_name">
              <small className="caption">{t("doctors_caption")}</small>
              <h3 className="name">{t("doctors_abdullah_name")}</h3>
            </div>
            <p className="bio">{t("doctors_abdullah_bio")}</p>
          </div>
          <div className="portrait-small">
            <img src={doctor2} alt="Doctor 2" />
          </div>
        </div>
      </section>
      <header className="reviews-header">
        <div className="reviews-container">
          <span className="reviews-tag">{t("reviews_tag")}</span>
          <h1 className="reviews-title">
            {t("reviews_title")}
            {t("reviews_subtitle")}
          </h1>
        </div>
      </header>

      {/* Reviews Swiper */}
      <section className="reviews-swiper-section">
        <div className="reviews-container">
          <div className="swiper-controls">
            <button
              className={`swiper-btn prev ${isBeginning ? "disabled" : ""}`}
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label={t("reviews_prev_button")}
            >
              ←
            </button>
            <button
              className={`swiper-btn next ${isEnd ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={isEnd}
              aria-label={t("reviews_next_button")}
            >
              →
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1320: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="reviews-swiper"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  <div className="review-content">
                    <h4 className="review-name">{review.name}</h4>
                    <p className="review-text">{review.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Form />
      <Footer />
    </div>
  );
}
