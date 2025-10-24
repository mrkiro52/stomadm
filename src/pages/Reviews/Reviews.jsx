import "./Reviews.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import { useTranslation } from 'react-i18next';
import arrow from './images/arrow.svg';
import girl from './images/smile.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import before1 from './images/before1.png';
import after1 from './images/after1.png';
import before2 from './images/before2.png';
import after2 from './images/after2.png';
import before3 from './images/before3.png';
import after3 from './images/after3.png';
import before4 from './images/before4.png';
import after4 from './images/after4.png';
import before5 from './images/before5.png';
import after5 from './images/after5.png';
import before6 from './images/before6.png';
import after6 from './images/after6.png';
import { useState } from "react";
import doctor1 from "./images/doctor1.jpg";
import doctor2 from "./images/doctor2.jpg";
import Form from '../../components/Form/Form';
import VirtualSwiper from "../../components/VirtualSwiper/VirtualSwiper";
import Results from "../../components/Results/Results";

export default function Reviews() {
  const { t } = useTranslation();
  localStorage.setItem("page", "reviews");
  const slides = [
    t("reviews_review_1"),
    t("reviews_review_2"),
    t("reviews_review_3"),
    t("reviews_review_4"),
    t("reviews_review_5"),
    t("reviews_review_6"),
  ];
  const [resultsPage, setResultsPage] = useState(0);
  const images = [
    {before: before1, after: after1},
    {before: before2, after: after2},
    {before: before3, after: after3},
    {before: before4, after: after4},
    {before: before5, after: after5},
    {before: before6, after: after6},
  ];

  const handlePrev = () => {
    if (resultsPage > 0) setResultsPage(resultsPage - 1);
  };

  const handleNext = () => {
    if ((resultsPage+1) < images.length) {
      setResultsPage(resultsPage + 1);
    }
  };

  const current = images[resultsPage];


  return (
    <div className="Reviews">
      <Header />
      <header className="reviews-header">
        <span className="tag">{t("reviews_tag")}</span>
        <h1 className="title">
          {t("reviews_title")}
          <span className="subtitle">{t("reviews_subtitle")}</span>
        </h1>
      </header>
      <VirtualSwiper items={slides} slidesPerView={4} />
      <div className="Videos">
        <div className="wrapper">
            <div className="topBlock">
                <div className="tab">
                    <span>{t("reviews_videos_tag")}</span>
                </div>
                <h2>{t("reviews_videos_title")}<span>{t("reviews_videos_title_span")}</span></h2>
          </div>
          <div className="bottomBlock">
            <a
              href="https://www.instagram.com/p/POST_ID_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ backgroundImage: 'url(https://instagram.fxyz1-1.fna.fbcdn.net/v/t51.2885-15/IMAGE_ID1.jpg)' }}
            >
              <div className="overlay">▶</div>
            </a>
            <a
              href="https://www.instagram.com/p/POST_ID_2/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ backgroundImage: 'url(https://instagram.fxyz1-1.fna.fbcdn.net/v/t51.2885-15/IMAGE_ID2.jpg)' }}
            >
              <div className="overlay">▶</div>
            </a>
            <a
              href="https://www.instagram.com/p/POST_ID_3/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ backgroundImage: 'url(https://instagram.fxyz1-1.fna.fbcdn.net/v/t51.2885-15/IMAGE_ID3.jpg)' }}
            >
              <div className="overlay">▶</div>
            </a>
            <a
              href="https://www.instagram.com/p/POST_ID_4/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ backgroundImage: 'url(https://instagram.fxyz1-1.fna.fbcdn.net/v/t51.2885-15/IMAGE_ID4.jpg)' }}
            >
              <div className="overlay">▶</div>
            </a>
          </div>
        </div>
      </div>
      <Results/>
      <div className="wrapper-form">
        <Form/>
      </div>
      <Footer />
    </div>
  );
}
