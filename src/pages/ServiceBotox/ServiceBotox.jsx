import '../../styles/Service.scss';
import Header from '../../components/Header/Header';
import arrow from './images/arrow.svg';
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
import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from "react-i18next";
import Results from '../../components/Results/Results';

export default function ServiceBotox() {
    const { t } = useTranslation();
    localStorage.setItem('page', 'service');
    const journeyData = [
      {
        title: "Consultation and facial ",
        spanTitle: "analysis",
        text: "The doctor evaluates your facial structure, muscle activity, and areas of concern to create a personalized Botox treatment plan that achieves natural-looking results.",
      },
      {
        title: "Preparation and injection ",
        spanTitle: "mapping",
        text: "Target areas are marked, and the skin is cleansed. The doctor identifies precise injection points to ensure balanced results and avoid affecting natural expressions.",
      },
      {
        title: "Botox administration and muscle ",
        spanTitle: "relaxation",
        text: "Botox is injected using fine needles into specific facial muscles. The procedure takes just a few minutes and is virtually painless, with minimal discomfort.",
      },
      {
        title: "Recovery and visible ",
        spanTitle: "results",
        text: "You can return to normal activities immediately. Results start to appear within 3–5 days, with full effect in about two weeks, leaving the skin smoother and refreshed.",
      },
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
        <div className="Service">
            <Header/>
            <div className="Startscreen">
                <div className="wrapper">
                    <div className="left">
                        <div className="tab">
                            <span>{t("service")}</span>
                        </div>
                        <div className="bottom-block">
                            <h2>{t("service_botox_title")}</h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>{t("service_botox_description")}</p>
                            </div>
                        </div>
                    </div>
                    <div
                      className="right"
                      style={{
                        backgroundImage: `url(${require('./images/smile.jpg')})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                        <span>{t("service_botox_title")}</span>
                        <button>{t("book_a_consultation")}</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>{t("description")}</span>
                    </div>
                    <h2>{t("service_botox_shorttitle")}</h2>
                    <div className="block">
                        <div className="row">
                            <span>{t("service_botox_question1")}</span>
                            <p>{t("service_botox_answer1")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_botox_question2")}</span>
                            <p>{t("service_botox_answer2")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_botox_question3")}</span>
                            <p>{t("service_botox_answer3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Journey">
                <div className="wrapper">
                <div className="topBlock">
                    <div className="tab">
                    <span>Our Process</span>
                    </div>
                    <h2>Smile Transformation<br/><span>Journey</span></h2>
                </div>
                <div className="bottomBlock">
                    {journeyData.map((element, index) => (
                    <div key={element} className="block" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                        <div className="circle">
                            <span>{index + 1}</span>
                        </div>
                        <div className="texts">
                            <h3 style={{color: 'black'}}>{element.title}<span>{element.spanTitle}</span></h3>
                            <p style={{color: 'black'}}>{element.text}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="Prices">
                <div className="wrapper">
                    <div className="topBlock">
                        <div className="tab">
                            <span>Prices</span>
                        </div>
                        <h2>A Beautiful Smile<br/><span>Is Priceless</span></h2>
                    </div>
                    <div className="bottomBlock">
                        <div className="block">
                            <div className="circle">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.715729 29.2843L29 1M29 1V21M29 1H9" stroke="#3A281E"/>
                            </svg>
                            </div>
                            <span>Standart Package</span>
                            <div className="bottom">
                                <p>Delivering outstanding patient care that exceeds international standards</p>
                                <span>[from 900$]</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="circle">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.715729 29.2843L29 1M29 1V21M29 1H9" stroke="#3A281E"/>
                            </svg>
                            </div>
                            <span>Premium Package</span>
                            <div className="bottom">
                                <p>Delivering outstanding patient care that exceeds international standards. Delivering outstanding patient care that exceeds international standards</p>
                                <span>[from 1500$]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Results/>
            <Form/>
            <Footer/>
        </div>
    )
}