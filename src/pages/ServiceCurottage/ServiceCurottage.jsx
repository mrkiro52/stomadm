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

export default function ServiceCurottage() {
    const { t } = useTranslation();
    localStorage.setItem('page', 'service');
    const journeyData = [
      {
        title: "Initial examination and gum ",
        spanTitle: "assessment",
        text: "The dentist evaluates the health of your gums, measures pocket depths, and reviews X-rays to determine the extent of periodontal disease and plan the flap surgery.",
      },
      {
        title: "Anesthesia and gum ",
        spanTitle: "incision",
        text: "Local anesthesia is applied for comfort. The surgeon makes precise incisions in the gum tissue to lift it and access the roots and underlying bone.",
      },
      {
        title: "Cleaning and root ",
        spanTitle: "smoothing",
        text: "The exposed roots and bone are thoroughly cleaned, removing plaque, tartar, and infected tissue. Roots may be smoothed to promote reattachment of the gums.",
      },
      {
        title: "Gum repositioning and healing ",
        spanTitle: "closure",
        text: "The gums are repositioned and sutured back into place. Postoperative instructions are provided, and follow-ups ensure proper healing and maintenance of gum health.",
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
                            <h2>{t("service_curottage_title")}</h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>{t("service_curottage_description")}</p>
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
                        <span>{t("service_curottage_title")}</span>
                        <button>{t("book_a_consultation")}</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>{t("description")}</span>
                    </div>
                    <h2>{t("service_curottage_shorttitle")}</h2>
                    <div className="block">
                        <div className="row">
                            <span>{t("service_curottage_question1")}</span>
                            <p>{t("service_curottage_answer1")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_curottage_question2")}</span>
                            <p>{t("service_curottage_answer2")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_curottage_question3")}</span>
                            <p>{t("service_curottage_answer3")}</p>
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