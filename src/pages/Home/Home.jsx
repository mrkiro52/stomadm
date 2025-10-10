import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrow from './images/arrow.svg';
import girl from './images/smile.png';

export default function Home() {
  localStorage.setItem('page', 'home');
  return (
    <div className="Home">
      <Header />
      <div className="Startscreen">
        <div className="wrapper">
          <h2>International<br/>dental clinic.</h2>
          <div className="Startscreen_subtextBlock">
            <img src={arrow} alt="arrow" />
            <p>A modern dental clinic in Istanbul, where patients from different countries receive high-quality treatment with support in their native language.</p>
          </div>
          <div className="Startscreen_bottom">
            <div className="Startscreen_blocks">
              <div className="Startscreen_blocks__block block1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#020045"/>
                  <path d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25" stroke="#020045" stroke-linecap="round"/>
                </svg>
                <span>Discount 5% for Pensioners</span>
              </div>
              <div className="Startscreen_blocks__block block2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#ffffff"/>
                  <path d="M18 15L23.0781 19.2318C23.5579 19.6316 23.5579 20.3684 23.0781 20.7682L18 25" stroke="#ffffff" stroke-linecap="round"/>
                </svg>
                <span>Discount 5% for Pensioners</span>
              </div>
            </div>
            <button className="Startscreen_button">Get new smile</button>
          </div>
          <img src={girl} alt="smile" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
