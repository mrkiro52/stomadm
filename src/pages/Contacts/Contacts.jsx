import "./Contacts.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import clinic from "./images/clinic.jpg";
import { useState } from "react";
import girlform from "./images/girlform.png";

export default function Contacts() {
  localStorage.setItem("page", "contacts");
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "message" && value.length > 300) return;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.service.trim()) newErrors.service = "Service is required";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        // 👇 здесь будет логика отправки формы
        console.log("Form submitted:", formData);
      }
    };
  return (
    <section className="Contacts">
      {" "}
      <Header />{" "}
      <div className="Contacts_wrapper">
        {" "}
        <div className="Contacts_inner">
          {" "}
          <div className="Contacts_info">
            {" "}
            <span className="tag">Contacts</span>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">Address:</p>{" "}
              <p>
                {" "}
                Esentepe, Büyükdere Cd. No: 112B, 34394 Şişli/İstanbul, Türkiye{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">Phone:</p>{" "}
              <p>
                {" "}
                <a href="tel:+902122160004">+90 (212) 216 00 04</a>{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_block">
              {" "}
              <p className="Contacts_label">E-mail:</p>{" "}
              <p>
                {" "}
                <a href="mailto:info@dismimarisi.com">
                  info@dismimarisi.com
                </a>{" "}
              </p>{" "}
            </div>{" "}
            <div className="Contacts_map">
              {" "}
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12001.847841479924!2d29.007358!3d41.072085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab707f1ee7bcb%3A0x1c92380b65a6c969!2sDiş%20Mimarisi%20Klinik!5e0!3m2!1sen!2str!4v1709488486767!5m2!1sen!2str"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>{" "}
            <div className="Contacts_socials">
              {" "}
              <p>
                {" "}
                Instagram: <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                Facebook: <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                TikTok: <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
              <p>
                {" "}
                VK: <br /> <span>@dismimarisi</span>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="Contacts_image">
            {" "}
            <img src={clinic} alt="Clinic" />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="wrapper-form">
      <section className="booking-section">
      <div className="booking-container">
        {/* Левая часть */}
        <div className="booking-left">
          <span className="booking-span">Booking</span>
          <h2 className="booking-title">Online <span>appointment form</span></h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="input-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="input-group">
                <label>Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option>Hollywood Smile</option>
                  <option>Implants</option>
                  <option>Veneers</option>
                  <option>Crowns</option>
                  <option>All-on-6</option>
                </select>
                {errors.service && <p className="error">{errors.service}</p>}
              </div>
            </div>

            <div className="textarea-group">
              <label style={{marginBottom: '8px', fontWeight: 500}}>Your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                maxLength="300"
              />
              <span className="char-count">[{formData.message.length}/300]</span>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>

          <div className="info-row">
            <div className="info-block">
              <span>Instagram:</span>
              <p>@dismimarisi</p>
            </div>
            <div className="info-block" style={{alignItems: 'flex-end'}}>
              <span>Address:</span>
              <p style={{textAlign: 'end'}}>
                Esentepe, Büyükdere Cd. No: 112B, 34394 Şişli/İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="booking-right">
          <img src={girlform} alt="Form background" style={{ width: "100%", height: "100%", borderRadius: 16, objectFit: "cover" }} />
        </div>
      </div>
    </section>
      </div>
      <Footer />{" "}
    </section>
  );
}
