"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const words = t("heroWords");

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (!isDeleting) {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(100);

        if (text === fullWord) {
          // Pause at the end of typing before deleting
          setIsDeleting(true);
          setTypingSpeed(2500);
        }
      } else {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(60);

        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              {t("heroBadge")}
            </div>
            
            <h1 className={styles.title}>
              {t("heroWelcome")} <span className="gradient-text">Ahmet Yurdal</span>
            </h1>
            
            <div className={styles.subtitle}>
              {language === "tr" ? "Ben bir " : "I'm a "}<span className={styles.highlight}>{text}</span>
              <span className={styles.cursor}>|</span>
            </div>
            
            <p className={styles.description}>
              {t("heroDescription")}
            </p>
            
            <div className={styles.ctaContainer}>
              <button 
                className={styles.primaryBtn} 
                onClick={() => scrollToSection("projects")}
              >
                {t("heroCtaPrimary")}
              </button>
              <button 
                className={styles.secondaryBtn} 
                onClick={() => scrollToSection("contact")}
              >
                {t("heroCtaSecondary")}
              </button>
            </div>
          </div>

          <div className={styles.profileWrapper}>
            <div className={styles.profileCard}>
              <img src="/profilephoto.jpg" alt="Ahmet Yurdal" className={styles.profileImg} />
              <div className={styles.profileGlow}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className={styles.scrollIndicator} 
        onClick={() => scrollToSection("about")}
      >
        <span>{t("heroScroll")}</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
