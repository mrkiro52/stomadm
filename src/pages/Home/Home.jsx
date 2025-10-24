import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
import { useTranslation } from "react-i18next";
import Results from "../../components/Results/Results";

export default function Home() {
  localStorage.setItem('page', 'home');
  const [resultsPage, setResultsPage] = useState(0);
  const { t } = useTranslation();
  const images = [
    {before: before1, after: after1},
    {before: before2, after: after2},
    {before: before3, after: after3},
    {before: before4, after: after4},
    {before: before5, after: after5},
    {before: before6, after: after6},
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
    if (resultsPage > 0) setResultsPage(resultsPage - 1);
  };

  const handleNext = () => {
    if ((resultsPage+1) < images.length) {
      setResultsPage(resultsPage + 1);
    }
  };

  const current = images[resultsPage];

  const services = ["Hollywood Smile", "Crowns", "Veneers", "Implants", "All-on-6", "Sinus Lifting", "Bone Grafting"];
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
    }
  ]
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
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#020045"/>
                  <path d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25" stroke="#020045" stroke-linecap="round"/>
                </svg>
                <span>{t("home_promo1")}</span>
              </div>
              <div className="Startscreen_blocks__block block2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#ffffff"/>
                  <path d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25" stroke="#ffffff" stroke-linecap="round"/>
                </svg>
                <span>{t("home_promo2")}</span>
              </div>
            </div>
            <button className="Startscreen_button">{t("home_button")}</button>
          </div>
          <img src={girl} alt="smile" />
        </div>
      </div>
      <div className="Services">
        <div className="wrapper">
          <div className="topBlock">
            <div className="topBlock_left">
              <div className="tab">
                <span>Services</span>
              </div>
              <h2>Explore the full range<br/>of <span>dental treatments</span></h2>
            </div>
            <div className="topBlock_right">
              <p>If you want a gorgeous smile,<br/>call us to ask about a smile makeover</p>
              <button>Call us</button>
            </div>
          </div>
          <div className="bottomBlock">
            {services.map((element, index) => (
              <div key={element} className="block"> 
                <div className="circle"> 
                  <span>{index < 10 ? `0${index+1}` : index}</span> 
                </div> 
                <span>{element}</span>
              </div>
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
            <h2>{t("journey_title")} <br/>— <span>{t("journey_subtitle")}</span></h2>
          </div>
          <div className="bottomBlock">
            {journeyData.map((element, index) => (
              <div key={element} className="block" style={index % 2 !== 0 ? {backgroundColor: 'rgba(78, 54, 41, 1)'} : {backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                <div className="circle">
                  <img src={element.image} alt="icon" />
                </div>
                <div className="texts">
                  <h3 style={index % 2 === 0 ? {color: 'black'} : {color: 'white'}}>{element.title} {element.spanTitle}</h3>
                  <p style={index % 2 === 0 ? {color: 'black'} : {color: 'white'}}>{element.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Results/>
      <div className="Advantages">
        <div className="wrapper">
          <div className="topBlock">
            <div className="tab">
              <span>Advantages</span>
            </div>
            <h2>Why people <span>choose us?</span></h2>
          </div>
          <div className="bottomGrid">
            <div className="row">
              <div className="block girl">
                {/* girls image background */}
              </div>
              <div className="block">
                <div className="block_el">01<br/>Accredited by<br/>the Ministry of Health</div>
                <div className="block_el doctors">{/* doctors little image */}</div>
                <div className="block_el empty"></div>
                <div className="block_el">02<br/>High Google rating</div>
              </div>
            </div>
            <div className="row">
              <div className="block">
                <div className="block_el empty"></div>
                <div className="block_el">03<br/>Top-rated<br/>on TripAdvisor</div>
                <div className="block_el empty"></div>
                <div className="block_el empty"></div>
              </div>
              <div className="block">
                <div className="block_el zub">{/* teeth little image */}</div>
                <div className="block_el empty"></div>
                <div className="block_el empty"></div>
                <div className="block_el">04<br/>Sertified Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="doctors-block">
          <header className="doctors-header">
            <span className="tag">Doctors</span>
            <h1 className="title">
              Dental experts <br />
              <span className="subtitle">you can trust</span>
            </h1>
          </header>

          <div className="doctors-grid">
            <div className="portrait-large">
              <img src={doctor1} alt="Doctor 1" />
            </div>
            <div className="bio-top">
              <div className="caption_name">
                <small className="caption">Doctor</small>
                <h2 className="name">Samed Dagdeviren</h2>
              </div>
              <p className="bio">
                Dr. Samed Dagdeviren completed his dental education at Yeditepe
                University and Istanbul Aydın University. He has extensive
                experience in both surgical and aesthetic dentistry. He performs
                All-on-4 and All-on-6 implant surgeries, as well as treatments
                such as dental implants, sinus lifting, gum treatments, root
                canal therapy, laminate veneers, smile design, teeth whitening,
                orthodontics, and pediatric dentistry.
              </p>
            </div>
            <div className="bio-bottom">
              <div className="caption_name">
                <small className="caption">Doctor</small>
                <h3 className="name">Abdullah Cağlar</h3>
              </div>
              <p className="bio">
                With over 40 years of professional experience, Dr. Abdullah
                Caglar is a graduate of Gazi University Faculty of Dentistry.
                Over the years, he has helped thousands of patients restore the
                health and beauty of their smiles. His areas of expertise
                include cavity treatment, prosthetics, root canal therapy, and
                fillings.
              </p>
            </div>
            <div className="portrait-small">
              <img src={doctor2} alt="Doctor 2" />
            </div>
          </div>
      </section>
      <div className="Reviews">
        <header className="reviews-header">
          <span className="tag">Reviews</span>
          <h1 className="title">
            What people
            <span className="subtitle"> write about us?</span>
          </h1>
        </header>
        <VirtualSwiper items={slides} slidesPerView={4} />
      </div>
      <Form/>
      <Footer />
    </div>
  );
}
