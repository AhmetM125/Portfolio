"use client";

import React from "react";
import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "4+", label: t("aboutStatExp") },
    { number: "30+", label: t("aboutStatProj") },
  ];

  const experience = t("experienceList");

  const skillsData = {
    frontend: [
      { name: "Next.js / React.js" },
      { name: "JavaScript / TypeScript" },
      { name: "HTML5 / CSS3 (Flexbox/Grid)" },
    ],
    backend: [
      { name: "C# / .NET Core" },
      { name: "MSSQL" },
      { name: "RESTful APIs (Web API)" },
    ],
  };

  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>{t("aboutExplore")}</span>
          <h2 className={styles.title}>{t("aboutTitle")}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.bioSection}>
            <h3>{t("aboutHeading")}</h3>
            <p className={styles.bioText}>
              {t("aboutBio")}
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.timelineSection}>
              <h4>{t("aboutTimelineHeading")}</h4>
              <div className={styles.timeline}>
                {experience.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h5 className={styles.timelineTitle}>{item.title}</h5>
                    <span className={styles.timelineOrg}>{item.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <div className={styles.skillsGroup}>
              <h3>{t("aboutSkillsFront")}</h3>
              <div className={styles.skillsGrid}>
                {skillsData.frontend.map((skill, i) => (
                  <span key={i} className={styles.skillBadge}>{skill.name}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillsGroup}>
              <h3>{t("aboutSkillsBack")}</h3>
              <div className={styles.skillsGrid}>
                {skillsData.backend.map((skill, i) => (
                  <span key={i} className={styles.skillBadge}>{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
