import { useState } from "react";
import "./Form.scss";
import { useTranslation } from "react-i18next";

export default function Form({ theme = "white" }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 👇 здесь будет логика отправки формы
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className={`booking-section booking-section--${theme}`}>
      <div className="booking-container">
        {/* Левая часть */}
        <div className="booking-left">
          <span className="booking-span">{t("form_tab")}</span>
          <h2 className="booking-title">{t("form_title")}</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label>{t("form_label_name")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("form_name_placeholder")}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="input-group">
                <label>{t("form_label_phone")}</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("form_phone_placeholder")}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>{t("form_label_email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("form_email_placeholder")}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>

            <div className="textarea-group">
              <label style={{ marginBottom: "8px", fontWeight: 500 }}>
                {t("form_label_message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form_message_placeholder")}
                maxLength="300"
              />
              <span className="char-count">
                [{formData.message.length}/300]
              </span>
            </div>

            <button type="submit" className="send-btn">
              {t("form_send")}
            </button>
          </form>

          <div className="info-row">
            <div className="info-block-social">
              <span>Instagram:</span>
              <p>@dismimarisi</p>
            </div>
            <div className="info-block-address">
              <span>Address:</span>
              <p>
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
