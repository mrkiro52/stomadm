import { useState } from "react";
import "./Form.scss";

export default function Form() {
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
          <iframe
            title="map"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 16 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=Esentepe,+Büyükdere+Cd.+No:+112B,+34394+Şişli/İstanbul,+Türkiye&output=embed`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
