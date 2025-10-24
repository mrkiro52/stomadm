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

export default function ServiceTeethWhitening() {
    const { t } = useTranslation();
    localStorage.setItem('page', 'service');
    const journeyData = [
      {
        title: "Consultation and implant ",
        spanTitle: "evaluation",
        text: "The dentist examines the implant site, takes imaging, and ensures the implant is fully integrated and ready to support a zirconia crown.",
      },
      {
        title: "Impression taking and crown ",
        spanTitle: "design",
        text: "A digital or physical impression of the implant and surrounding teeth is taken to create a custom zirconia crown that fits perfectly and matches your natural teeth.",
      },
      {
        title: "Crown fabrication and trial ",
        spanTitle: "fitting",
        text: "The zirconia crown is manufactured for strength and aesthetics. The dentist checks the fit and bite before final placement to ensure comfort and functionality.",
      },
      {
        title: "Crown placement and final ",
        spanTitle: "adjustment",
        text: "The zirconia crown is permanently attached to the implant. Final adjustments are made to shape, bite, and appearance, achieving a natural and durable restoration.",
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
                            <h2>{t("service_teeth_whitening_title")}</h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>{t("service_teeth_whitening_description")}</p>
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
                        <span>{t("service_teeth_whitening_title")}</span>
                        <button>{t("book_a_consultation")}</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>{t("description")}</span>
                    </div>
                    <h2>{t("service_teeth_whitening_shorttitle")}</h2>
                    <div className="block">
                        <div className="row">
                            <span>{t("service_teeth_whitening_question1")}</span>
                            <p>{t("service_teeth_whitening_answer1")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_teeth_whitening_question2")}</span>
                            <p>{t("service_teeth_whitening_answer2")}</p>
                        </div>
                        <div className="row">
                            <span>{t("service_teeth_whitening_question3")}</span>
                            <p>{t("service_teeth_whitening_answer3")}</p>
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