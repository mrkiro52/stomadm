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

export default function ServiceAligners() {
    localStorage.setItem('page', 'service');
    const { t } = useTranslation();
    const journeyData = [
      {
        title: "Consultation and dental ",
        spanTitle: "diagnostics",
        text: "During the first visit, the doctor examines your teeth, takes 3D scans and X-rays to evaluate your bite and determine if aligner treatment is suitable for you.",
      },
      {
        title: "Creating a personalized ",
        spanTitle: "treatment plan",
        text: "Based on the digital model, the orthodontist builds a detailed treatment plan showing how your teeth will move and what the final result will look like. Once approved, your custom aligners are produced.",
      },
      {
        title: "Wearing and replacing ",
        spanTitle: "aligners",
        text: "You wear the transparent trays for 20–22 hours a day, switching to a new set every 1–2 weeks. Each new aligner gradually moves your teeth into the desired position without pain or discomfort.",
      },
      {
        title: "Monitoring and maintaining the ",
        spanTitle: "result",
        text: "The doctor monitors your progress throughout the treatment. After completion, retainers are prescribed to keep your teeth perfectly aligned and maintain the achieved result long-term.",
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
                            <h2>{t("service_aligners_title")}</h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>{t("service_aligners_description")}</p>
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
                        <span>{t("service_aligners_title")}</span>
                        <button>{t("book_a_consultation")}</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>{t("description")}</span>
                    </div>
                    <h2>{t("service_aligners_shorttitle")}</h2>
                    <div className="block">
                        <div className="row">
                            <span>{t("service_aligners_question1")}</span>
                            <p>{t("service_aligners_answer1")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_aligners_question2")}</span>
                            <p>{t("service_aligners_answer2")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_aligners_question3")}</span>
                            <p>{t("service_aligners_answer3")}</p>
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