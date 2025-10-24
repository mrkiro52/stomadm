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

export default function ServiceBraces() {
    const { t } = useTranslation();
    localStorage.setItem('page', 'service');
    const journeyData = [
      {
        title: "Initial consultation and bite ",
        spanTitle: "evaluation",
        text: "The orthodontist examines your teeth, takes X-rays and 3D scans, and evaluates your bite to determine the best braces treatment plan tailored to your needs.",
      },
      {
        title: "Treatment planning and bracket ",
        spanTitle: "placement",
        text: "A personalized plan is created showing how your teeth will move. Brackets are then carefully bonded to your teeth, and archwires are inserted to begin gradual alignment.",
      },
      {
        title: "Regular adjustments and teeth ",
        spanTitle: "movement",
        text: "Throughout treatment, periodic visits are scheduled to adjust wires and monitor progress. Each adjustment gently moves teeth toward optimal alignment over time.",
      },
      {
        title: "Removal and retention ",
        spanTitle: "phase",
        text: "Once teeth are properly aligned, braces are removed, and retainers are provided to maintain the results and prevent teeth from shifting back.",
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
                            <h2>{t("service_braces_title")}</h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>{t("service_braces_description")}</p>
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
                        <span>{t("service_braces_title")}</span>
                        <button>{t("book_a_consultation")}</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>{t("description")}</span>
                    </div>
                    <h2>{t("service_braces_shorttitle")}</h2>
                    <div className="block">
                        <div className="row">
                            <span>{t("service_braces_question1")}</span>
                            <p>{t("service_braces_answer1")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_braces_question2")}</span>
                            <p>{t("service_braces_answer2")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_braces_question3")}</span>
                            <p>{t("service_braces_answer3")}</p>
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

            <Results/>
            <Form/>
            <Footer/>
        </div>
    )
}