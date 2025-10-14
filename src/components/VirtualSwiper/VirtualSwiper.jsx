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
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
    },
    {
      name: "Anna Ivanova",
      photo: review1,
      rating: "5.0",
      text: "I had a truly great experience at this dental clinic. The staff welcomed me warmly and immediately created a comfortable, trusting atmosphere. The doctor explained everything in detail, discussed different treatment options, and helped me choose the best one. The procedure was done very carefully, absolutely pain-free, and with great attention to detail. It’s clear that the clinic uses modern equipment and high-quality materials.",
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
