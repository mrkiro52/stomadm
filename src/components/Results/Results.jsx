import './Results.scss';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import before1 from './images/before1.jpg';
import after1 from './images/after1.jpg';
import before2 from './images/before2.jpg';
import after2 from './images/after2.jpg';
import before3 from './images/before3.jpg';
import after3 from './images/after3.jpg';
import before4 from './images/before4.jpg';
import after4 from './images/after4.jpg';
import before5 from './images/before5.jpg';
import after5 from './images/after5.jpg';
import before6 from './images/before6.jpg';
import after6 from './images/after6.jpg';

export default function Results() {
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
    const { t } = useTranslation();
    return (
        <div className="Results">
            <div className="wrapper">
                <div className="topBlock">
                    <div className="tab">
                        <span>{t("results_tab")}</span>
                    </div>
                    <h2>{t("results_title")}</h2>
                </div>
                <div className="bottomBlock">
                    <div className="compareBlock">
                        <ReactCompareSlider
                            itemOne={
                                <ReactCompareSliderImage
                                    src={current.before}
                                    alt={`Before ${resultsPage + 1}`}
                                />
                            }
                            itemTwo={
                                <ReactCompareSliderImage
                                    src={current.after}
                                    alt={`After ${resultsPage + 1}`}
                                />
                            }
                        />
                    </div>
                    <button>{t("results_button")}</button>
                </div>
                <div className="lastBlock">
                    <div
                        className={`circle ${resultsPage > 0 ? "active" : ""}`}
                        onClick={handlePrev}
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path
                                d="M6 11L0.921865 6.76822C0.44211 6.36843 0.442111 5.63157 0.921865 5.23178L6 1"
                                stroke={(resultsPage === 0) ? "#4E3629" : "white"}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <span>{resultsPage + 1}/{images.length}</span>

                    <div
                        className={`circle ${(resultsPage + 1) < images.length ? "active" : ""}`}
                        onClick={handleNext}
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path
                                d="M1 1L6.07814 5.23178C6.55789 5.63157 6.55789 6.36843 6.07813 6.76822L1 11"
                                stroke={(resultsPage + 1) < images.length ? "white" : "#4E3629"}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}