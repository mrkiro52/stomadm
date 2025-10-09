import "./Doctors.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import doctor1 from "./images/doctor1.jpg";
import doctor2 from "./images/doctor2.jpg";

export default function Doctors() {
  return (
    <div className="Doctors">
      <Header />
      <section className="doctors-block">
        <div className="container">
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
        </div>
      </section>
      <Footer />
    </div>
  );
}
