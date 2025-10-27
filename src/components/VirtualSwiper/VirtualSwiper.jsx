import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./VirtualSwiper.scss";

// Импорт изображений
import review1 from "./images/review1.jpg";
import star from "./images/star.png";

export default function VirtualSwiper({ items = [] }) {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(4);

  // Создаем объекты отзывов с текстами из items
  const reviews = items.map((text, index) => ({
    name: `Review ${index + 1}`,
    photo: review1,
    rating: "5.0",
    text: text,
  }));

  const totalPages = Math.ceil(reviews.length / currentSlidesPerView);

  return (
    <div className="virtual-swiper-wrapper">
      <div className="swiper-top-controls">
        <button
          className={`swiper-button prev ${isBeginning ? "disabled" : ""}`}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        >
          ←
        </button>
        <button
          className={`swiper-button next ${isEnd ? "disabled" : ""}`}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        >
          →
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
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
            spaceBetween: 20,
          },
          1320: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setCurrentSlidesPerView(swiper.params.slidesPerView);
        }}
        onSlideChange={(swiper) => {
          const slidesPerView = swiper.params.slidesPerView || 1;
          setCurrentPage(Math.floor(swiper.activeIndex / slidesPerView) + 1);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setCurrentSlidesPerView(slidesPerView);
        }}
        onBreakpoint={(swiper) => {
          const slidesPerView = swiper.params.slidesPerView || 1;
          setCurrentSlidesPerView(slidesPerView);
        }}
        className="custom-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="top">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="review-photo"
                />
                <div className="right">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-rating">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <span>{review.rating}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
