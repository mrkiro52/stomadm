import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./VirtualSwiper.scss";

// Импорт изображений
import review1 from "./images/review1.jpg";
import star from "./images/star.png";

export default function VirtualSwiper() {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slidesPerView = 4;

  const reviews = [
    {
      name: "Анна К.",
      photo: review1,
      rating: 5.0,
      text: "Очень довольна лечением, врачи внимательные и профессиональные.",
    },
    {
      name: "Дмитрий С.",
      photo: review1,
      rating: 4.8,
      text: "Сделали чистку и отбеливание — результат превзошёл ожидания!",
    },
    {
      name: "Мария Л.",
      photo: review1,
      rating: 5.0,
      text: "Современная клиника, приветливый персонал и отличное оборудование.",
    },
    {
      name: "Алексей П.",
      photo: review1,
      rating: 4.9,
      text: "Быстро помогли с болью, всё объяснили, очень рекомендую.",
    },
    {
      name: "Светлана Г.",
      photo: review1,
      rating: 5.0,
      text: "Теперь лечусь только здесь, всё на высшем уровне!",
    },
    {
      name: "Игорь Т.",
      photo: review1,
      rating: 4.7,
      text: "Чисто, современно, комфортно — очень понравилось.",
    },
    {
      name: "Ольга Н.",
      photo: review1,
      rating: 5.0,
      text: "Спасибо врачу за внимательность и чуткость, теперь улыбаюсь без стеснения!",
    },
    {
      name: "Николай В.",
      photo: review1,
      rating: 4.9,
      text: "Качественно, быстро, без боли — супер!",
    },
  ];

  const totalPages = Math.ceil(reviews.length / slidesPerView);

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

        <div className="swiper-fraction">
          {currentPage} / {totalPages}
        </div>

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
        slidesPerView={slidesPerView}
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setCurrentPage(Math.floor(swiper.activeIndex / slidesPerView) + 1);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="custom-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={review.photo}
                alt={review.name}
                className="review-photo"
              />
              <h4 className="review-name">{review.name}</h4>
              <div className="review-rating">
                <img src={star} alt="star" />
                <span>{review.rating}</span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
