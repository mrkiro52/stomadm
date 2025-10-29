import React, { useEffect } from "react";
import "./Gallery.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from 'react-i18next';

// Статический импорт всех изображений
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import gallery6 from "./images/gallery6.jpg";
import gallery7 from "./images/gallery7.jpg";
import gallery8 from "./images/gallery8.jpg";
import gallery9 from "./images/gallery9.jpg";
import gallery10 from "./images/gallery10.jpg";
import gallery11 from "./images/gallery11.jpg";
import gallery12 from "./images/gallery12.jpg";
import Form from "../../components/Form/Form";

// Массив изображений
const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export default function Gallery() {
  const { t } = useTranslation();
  localStorage.setItem("page", "gallery");
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <section className="gallery">
      <Header />
      <header className="gallery-header">
        <span className="tag">{t("gallery_tag")}</span>
        <h1 className="title">
          {t("gallery_title")}
          <span className="subtitle">{t("gallery_subtitle")}</span>
        </h1>
      </header>

      <div className="gallery__grid">
        {images.map((src, index) => (
          <div className="gallery__item" key={index}>
            <img src={src} alt={`gallery-${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <Form/>
      <Footer />
    </section>
  );
}
