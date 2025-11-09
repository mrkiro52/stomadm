import "./About.scss";
import Header from "../../components/Header/Header";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useTranslation } from "react-i18next";
import before1 from "../Home/images/before1.png";
import after1 from "../Home/images/after1.png";
import before2 from "../Home/images/before2.png";
import after2 from "../Home/images/after2.png";
import before3 from "../Home/images/before3.png";
import after3 from "../Home/images/after3.png";
import before4 from "../Home/images/before4.png";
import after4 from "../Home/images/after4.png";
import before5 from "../Home/images/before5.png";
import after5 from "../Home/images/after5.png";
import before6 from "../Home/images/before6.png";
import after6 from "../Home/images/after6.png";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import arrow from "./images/arrow.svg";
import start1 from "./images/start1.jpg";
import start2 from "./images/start2.jpg";
import logo from "./images/logoIstanbul.png";
import Results from "../../components/Results/Results";

export default function About() {
  const { t } = useTranslation();
  localStorage.setItem("page", "about");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const images = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
    { before: before5, after: after5 },
    { before: before6, after: after6 },
  ];

  const [resultsPage, setResultsPage] = useState(0);

  const handlePrev = () => {
    if (resultsPage > 0) setResultsPage(resultsPage - 1);
  };

  const handleNext = () => {
    if (resultsPage + 1 < images.length) {
      setResultsPage(resultsPage + 1);
    }
  };

  const current = images[resultsPage];

  const journeyData = [
    {
      title: t("about_journey_1_title"),
      spanTitle: t("about_journey_1_span"),
      text: t("about_journey_1_text"),
    },
    {
      title: t("about_journey_2_title"),
      spanTitle: t("about_journey_2_span"),
      text: t("about_journey_2_text"),
    },
    {
      title: t("about_journey_3_title"),
      spanTitle: t("about_journey_3_span"),
      text: t("about_journey_3_text"),
    },
    {
      title: t("about_journey_4_title"),
      spanTitle: t("about_journey_4_span"),
      text: t("about_journey_4_text"),
    },
  ];

  return (
    <div className="About">
      <Header />
      <div className="Startscreen">
        <div className="wrapper">
          <div className="Startscreen_container">
            {/* Левая часть */}
            <div className="Startscreen_left">
              <h2>{t("about_title")}</h2>

              <div className="Startscreen_subtextBlock">
                <img src={arrow} alt="arrow" />
                <p>{t("about_subtitle")}</p>
              </div>

              <div className="Startscreen_imageLeft"></div>
            </div>

            {/* Правая часть */}
            <div className="Startscreen_right"></div>
          </div>
        </div>
      </div>
      <div className="Journey">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>{t("about_mission_tab")}</span>
            </div>
            <h2>
              {t("about_mission_title")}
              <br />
              {t("about_mission_title_line2")}
              <br />
              <span>{t("about_mission_title_span")}</span>
            </h2>
          </div>
          <div className="bottomBlock">
            {journeyData.map((element, index) => (
              <div
                key={element}
                className="block"
                style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              >
                <div className="circle">
                  <span>{index + 1}</span>
                </div>
                <div className="texts">
                  <h3 style={{ color: "black" }}>
                    {element.title}
                    <span>{element.spanTitle}</span>
                  </h3>
                  <p style={{ color: "black" }}>{element.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Advantages">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>{t("advantages_tag")}</span>
            </div>
            <h2>
              {t("advantages_title")}
            </h2>
          </div>
          <div className="bottomGrid">
            <div className="row">
              <div className="block girl">{/* girls image background */}</div>
              <div className="block">
                <div className="block_el">
                  01
                  <br />
                  {t("advantages_accredited")}
                </div>
                <div className="block_el doctors">
                  {/* doctors little image */}
                </div>
                <div className="block_el botox"></div>
                <div className="block_el">
                  02
                  <br />
                  {t("advantages_google_rating")}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="block">
                <div className="block_el filling"></div>
                <div className="block_el">
                  03
                  <br />
                  {t("advantages_tripadvisor")}
                </div>
                <div className="block_el veneers"></div>
                <div className="block_el aligners"></div>
              </div>
              <div className="block">
                <div className="block_el zub">{/* teeth little image */}</div>
                <div className="block_el braces"></div>
                <div className="block_el teethwhitening"></div>
                <div className="block_el">
                  04
                  <br />
                  {t("advantages_specialists")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Results theme="white" />
      <div className="Recognized">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>{t("about_recognized_tab")}</span>
            </div>
            <h2>
              {t("about_recognized_title")}
              <span>{t("about_recognized_title_span")}</span>
            </h2>
          </div>
          <div className="bottomBlock">
            <img src={logo} alt="logo" />
            <div className="text">
              <p>{t("about_recognized_p1")}</p>
              <p>{t("about_recognized_p2")}</p>
              <p>{t("about_recognized_p3")}</p>
              <p>{t("about_recognized_p4")}</p>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
