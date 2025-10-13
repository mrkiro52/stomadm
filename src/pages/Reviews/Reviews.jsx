import "./Reviews.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import VirtualSwiper from "../../components/VirtualSwiper/VirtualSwiper";

export default function Reviews() {
  localStorage.setItem("page", "reviews");
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
  return (
    <div className="Reviews">
      <Header />
      <header className="reviews-header">
        <span className="tag">Reviews</span>
        <h1 className="title">
          What people
          <span className="subtitle"> write about us?</span>
        </h1>
      </header>
      <VirtualSwiper items={slides} slidesPerView={4} />
      <Footer />
    </div>
  );
}
