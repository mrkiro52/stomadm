import "./Reviews.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews({ theme = "gray" }) {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [isEnd, setIsEnd] = useState(false);

  localStorage.setItem("page", "reviews");

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

  return (
    <div className="Reviews">
      <Header />

      {/* Reviews Header */}
      <header className={`reviews-header reviews-header--${theme}`}>
        <div className="reviews-container">
          <span className="reviews-tag">{t("reviews_tag")}</span>
          <h1 className="reviews-title">
            {t("reviews_title")}
            {t("reviews_subtitle")}
          </h1>
          <a target="_blank" style={{color: "black", fontWeight: 700, textDecoration: 'underline'}} href="https://www.google.com/maps/place/Diş+Mimarisi+Klinik+%7C+Dental+Architecture+Clinic+%7C+Стоматологическая+клиника/@41.0689523,29.0117353,17z/data=!4m8!3m7!1s0xab3fa96eaeb3ce59:0xc8d534192943b32b!8m2!3d41.0689523!4d29.0117353!9m1!1b1!16s%2Fg%2F11kbfmhzfc?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">Google maps</a>
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
                <a target="_blank" href="https://www.google.com/maps/place/Diş+Mimarisi+Klinik+%7C+Dental+Architecture+Clinic+%7C+Стоматологическая+клиника/@41.0689523,29.0117353,17z/data=!4m8!3m7!1s0xab3fa96eaeb3ce59:0xc8d534192943b32b!8m2!3d41.0689523!4d29.0117353!9m1!1b1!16s%2Fg%2F11kbfmhzfc?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                  <div className="review-card">
                  <div className="review-content">
                    <h4 className="review-name">{review.name}</h4>
                    <p className="review-text">"{review.text}..."</p>
                  </div>
                </div>
                </a>
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
