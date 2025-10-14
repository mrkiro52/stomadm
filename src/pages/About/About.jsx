import './About.scss';
import Header from '../../components/Header/Header';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import before1 from '../Home/images/before1.png';
import after1 from '../Home/images/after1.png';
import before2 from '../Home/images/before2.png';
import after2 from '../Home/images/after2.png';
import before3 from '../Home/images/before3.png';
import after3 from '../Home/images/after3.png';
import before4 from '../Home/images/before4.png';
import after4 from '../Home/images/after4.png';
import before5 from '../Home/images/before5.png';
import after5 from '../Home/images/after5.png';
import before6 from '../Home/images/before6.png';
import after6 from '../Home/images/after6.png';
import { useState } from "react";
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import arrow from "./images/arrow.svg";
import start1 from "./images/start1.jpg";
import start2 from "./images/start2.jpg";
import logo from './images/logoIstanbul.png';

export default function About() {
    localStorage.setItem('page', 'about');

    const images = [
        {before: before1, after: after1},
        {before: before2, after: after2},
        {before: before3, after: after3},
        {before: before4, after: after4},
        {before: before5, after: after5},
        {before: before6, after: after6},
    ];

    const [resultsPage, setResultsPage] = useState(0);
    
    const handlePrev = () => {
        if (resultsPage > 0) setResultsPage(resultsPage - 1);
    };
    
    const handleNext = () => {
        if ((resultsPage+1) < images.length) {
            setResultsPage(resultsPage + 1);
        }
    };
    
    const current = images[resultsPage];

    const journeyData = [
        {
          title: "Excellence in ",
          spanTitle: "Care",
          text: "Delivering outstanding patient care that exceeds international standards",
        },
        {
          title: "Trust &  ",
          spanTitle: "Relationships",
          text: "Building trust and lasting relationships with our patients.",
        },
        {
          title: "Innovation in ",
          spanTitle: "Dentistry",
          text: "Continuously innovating to provide the best dental solutions.",
        },
        {
          title: "Culture & ",
          spanTitle: "Compassion",
          text: "Fostering a culture of teamwork compassion and growth within our organization.",
        }
    ]

    return (
        <div className="About">
            <Header/>
            <div className="Startscreen">
                <div className="wrapper">
                    <div className="Startscreen_container">
                    {/* Левая часть */}
                    <div className="Startscreen_left">
                        <h2>About us.</h2>

                        <div className="Startscreen_subtextBlock">
                        <img src={arrow} alt="arrow" />
                        <p>
                            A modern dental clinic in Istanbul, where patients from different countries receive high-quality treatment with support in their native language.
                        </p>
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
                    <span>Our mission</span>
                    </div>
                    <h2>Creating healthy,<br/>confident smiles<br/><span>every day</span></h2>
                </div>
                <div className="bottomBlock">
                    {journeyData.map((element, index) => (
                    <div key={element} className="block" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                        <div className="circle">
                            <span>{index+1}</span>
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
            <div className="Results">
                <div className="wrapper">
                <div className="topBlock">
                    <div className="tab">
                        <span>Results</span>
                    </div>
                    <h2>See the <span>Transformation</span></h2>
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
                    <button>I want same like that</button>
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

                <span>{resultsPage+1}/{images.length}</span>

                <div
                className={`circle ${(resultsPage+1) < images.length ? "active" : ""}`}
                onClick={handleNext}
                >
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path
                    d="M1 1L6.07814 5.23178C6.55789 5.63157 6.55789 6.36843 6.07813 6.76822L1 11"
                    stroke={(resultsPage+1) < images.length ? "white" : "#4E3629"}
                    strokeLinecap="round"
                    />
                </svg>
                </div>
            </div>
                </div>
            </div>
            <div className="Recognized">
                <div className="wrapper">
                    <div className="topBlock">
                        <div className="tab">
                        <span>Advantages</span>
                        </div>
                        <h2>Why people <span>choose us?</span></h2>
                    </div>
                    <div className="bottomBlock">
                        <img src={logo} alt="logo" />
                        <div className="text">
                            <p>
                                Our clinic operates under full certification and official license issued by the Turkish Ministry of Health — T.C. Sağlık Bakanlığı, Istanbul. This means that all our medical processes, hygiene standards, and patient care systems strictly comply with the legal and professional requirements of the Republic of Türkiye.
                            </p>
                            <p>
                                We are proud to meet international standards of dental excellence, ensuring that every patient receives treatment in a fully accredited and medically controlled environment. From modern sterilization protocols to the use of certified dental materials — every aspect of our work passes regular inspections and quality audits.
                            </p>
                            <p>
                                Each of our doctors holds internationally recognized certificates confirming their continuous education and advanced training in leading dental centers across Europe. We constantly invest in professional development, technology, and innovation to provide world-class results with maximum safety and comfort for our patients.
                            </p>
                            <p>
                            Each of our doctors holds internationally recognized certificates confirming their continuous education and advanced training in leading dental centers across Europe. We constantly invest in professional development, technology, and innovation to provide world-class results with maximum safety and comfort for our patients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Form/>
            <Footer/>
        </div>
    )
}