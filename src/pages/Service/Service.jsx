import './Service.scss';
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

export default function Service() {
    localStorage.setItem('page', 'service');
    const journeyData = [
        {
          title: "Consultation & ",
          spanTitle: "Diagnostics",
          text: "Examination, dental health analysis, photos/X-rays, and selection of the optimal treatment plan.",
        },
        {
          title: "Smile ",
          spanTitle: "Planning",
          text: "Digital Smile Design or mock-up of the future smile, choosing the ideal shape and shade.",
        },
        {
          title: "Preparation & ",
          spanTitle: "Placement",
          text: "Minimal tooth preparation and precise placement of veneers or crowns.",
        },
        {
          title: "Final Result & ",
          spanTitle: "Aftercare",
          text: "Fixation of the perfect smile, care recommendations, and follow-up visits.",
        }
    ]

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
                            <span>Service</span>
                        </div>
                        <div className="bottom-block">
                            <h2>Hollywood <span>Smile</span></h2>
                            <div className="desc-block">
                                <img src={arrow} alt="arrow" />
                                <p>Transform your smile with custom-designed veneers for a flawless, radiant look! Discover the secret to a Hollywood smile in Türkiye and boost your confidence today!</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <span>Hollywood Smile</span>
                        <button>Book a Consultation now</button>
                    </div>
                </div>
            </div>
            <div className="Description">
                <div className="wrapper">
                    <div className="tab">
                        <span>Description</span>
                    </div>
                    <h2>A smile that changes<br/><span>everything</span></h2>
                    <div className="block">
                        <div className="row">
                            <span>Why do we use it?</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <div className="row">
                            <span>What is Lorem Ipsum?</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="row">
                            <span>Where can I get some?</span>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br/><br/>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
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
            <Form/>
            <Footer/>
        </div>
    )
}