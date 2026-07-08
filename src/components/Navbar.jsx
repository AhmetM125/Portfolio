"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");
  
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracking
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for triggers

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo} onClick={() => handleLinkClick("home")}>
            <img src="/logo.jpeg" alt="Yurdsoft Logo" className={styles.logoIcon} />
            <span>Yurdsoft</span><span className={styles.logoDot}>.</span>
          </div>

          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ""}`}>
            <li>
              <a 
                href="#home" 
                className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}
              >
                {t("navHome")}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick("about"); }}
              >
                {t("navAbout")}
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`${styles.navLink} ${activeSection === "projects" ? styles.active : ""}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick("projects"); }}
              >
                {t("navProjects")}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick("contact"); }}
              >
                {t("navContact")}
              </a>
            </li>
            <li className={styles.langDropdownLi}>
              <div className={styles.langDropdownWrapper}>
                <button className={styles.langDropdownBtn} aria-label="Select Language">
                  {language === "tr" ? (
                    <>
                      <svg className={styles.flagIcon} viewBox="0 0 512 512"><path fill="#e30a17" d="M0 0h512v512H0z"/><circle cx="215" cy="256" r="111.4" fill="#fff"/><circle cx="237.3" cy="256" r="89.1" fill="#e30a17"/><path fill="#fff" d="M341.2 256l-31 10.1 19.2 26.4-10-30.8-26.6-19.1 32.7.1 10.1-31 10.1 31h32.7l-26.6 19.1 10 30.8z"/></svg>
                      <span className={styles.langText}>TR</span>
                    </>
                  ) : (
                    <>
                      <svg className={styles.flagIcon} viewBox="0 0 512 512"><path fill="#00247d" d="M0 0h512v512H0z"/><path fill="#fff" d="M0 0v57.6l198.4 198.4h57.6L57.6 0zm512 0h-57.6L256 198.4v57.6l256-256zm0 512v-57.6L313.6 256h-57.6l198.4 256zM0 512h57.6L256 313.6v-57.6L0 512z"/><path fill="#cf142b" d="M0 0l222.4 222.4h33.6L33.6 0zm512 0L289.6 222.4h33.6L512 33.6zM0 512l222.4-222.4h33.6L33.6 512zm512 0L289.6 289.6h33.6L512 478.4z"/><path fill="#fff" d="M204.8 0h102.4v512H204.8zm-204.8 204.8h512v102.4H0z"/><path fill="#cf142b" d="M230.4 0h51.2v512h-51.2zm-230.4 230.4h512v51.2H0z"/></svg>
                      <span className={styles.langText}>EN</span>
                    </>
                  )}
                  <svg className={styles.arrowIcon} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className={styles.dropdownMenu}>
                  <button 
                    className={`${styles.dropdownItem} ${language === "tr" ? styles.activeLang : ""}`} 
                    onClick={() => toggleLanguage("tr")}
                  >
                    <svg className={styles.flagIcon} viewBox="0 0 512 512"><path fill="#e30a17" d="M0 0h512v512H0z"/><circle cx="215" cy="256" r="111.4" fill="#fff"/><circle cx="237.3" cy="256" r="89.1" fill="#e30a17"/><path fill="#fff" d="M341.2 256l-31 10.1 19.2 26.4-10-30.8-26.6-19.1 32.7.1 10.1-31 10.1 31h32.7l-26.6 19.1 10 30.8z"/></svg>
                    <span>Türkçe</span>
                  </button>
                  <button 
                    className={`${styles.dropdownItem} ${language === "en" ? styles.activeLang : ""}`} 
                    onClick={() => toggleLanguage("en")}
                  >
                    <svg className={styles.flagIcon} viewBox="0 0 512 512"><path fill="#00247d" d="M0 0h512v512H0z"/><path fill="#fff" d="M0 0v57.6l198.4 198.4h57.6L57.6 0zm512 0h-57.6L256 198.4v57.6l256-256zm0 512v-57.6L313.6 256h-57.6l198.4 256zM0 512h57.6L256 313.6v-57.6L0 512z"/><path fill="#cf142b" d="M0 0l222.4 222.4h33.6L33.6 0zm512 0L289.6 222.4h33.6L512 33.6zM0 512l222.4-222.4h33.6L33.6 512zm512 0L289.6 289.6h33.6L512 478.4z"/><path fill="#fff" d="M204.8 0h102.4v512H204.8zm-204.8 204.8h512v102.4H0z"/><path fill="#cf142b" d="M230.4 0h51.2v512h-51.2zm-230.4 230.4h512v51.2H0z"/></svg>
                    <span>English</span>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <button 
                className={styles.themeToggle} 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </button>
            </li>
            <li>
              <button 
                className={styles.ctaBtn}
                onClick={() => handleLinkClick("contact")}
              >
                {t("navCta")}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
