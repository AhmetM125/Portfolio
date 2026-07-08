"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailTo = "yurdsoft@gmail.com";
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Gönderen Adı: ${formData.name}\n` +
      `Gönderen E-posta: ${formData.email}\n\n` +
      `Mesaj:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    // Redirect to default mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>{t("contactSubtitle")}</span>
          <h2 className={styles.title}>{t("contactTitle")}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h3>{t("contactHeading")}</h3>
            <p className={styles.infoDesc}>
              {t("contactDesc")}
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailCard}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.detailInfo}>
                  <h4>E-POSTA / EMAIL</h4>
                  <p>yurdsoft@gmail.com</p>
                </div>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.detailInfo}>
                  <h4>LOKASYON / LOCATION</h4>
                  <p>Güzelyurt, KKTC</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            {!isSuccess ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t("contactName")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      placeholder={t("contactNamePlaceholder")}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t("contactEmail")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      placeholder={t("contactEmailPlaceholder")}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">{t("contactSubject")}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder={t("contactSubjectPlaceholder")}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{t("contactMessage")}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    placeholder={t("contactMessagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span>{t("contactSubmittingBtn")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("contactSubmitBtn")}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>{t("contactSuccessTitle")}</h3>
                <p>{t("contactSuccessDesc")}</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className={styles.successBtn}
                >
                  {t("contactSuccessNewBtn")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
