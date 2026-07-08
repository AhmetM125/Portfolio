"use client";

import React, { useState } from "react";
import styles from "./Projects.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const projectsData = t("projectsList");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveImageIdx(0);
  };

  const currentMainImage = selectedProject 
    ? (selectedProject.images ? selectedProject.images[activeImageIdx] : selectedProject.image) 
    : "";

  return (
    <section id="projects" className={`section-padding ${styles.projects}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>{t("projectsSubtitle")}</span>
          <h2 className={styles.title}>{t("projectsTitle")}</h2>
        </div>

        {/* Grid of Projects */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={() => handleProjectClick(project)}
            >
              <div className={styles.imgWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDesc}</p>
                <div className={styles.techStack}>
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={styles.techTag}>+{project.tech.length - 3}</span>
                  )}
                </div>
                <button 
                  className={styles.detailsBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                >
                  {t("projectDetailsBtn")}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.modalHero}>
              <img src={currentMainImage} alt={selectedProject.title} />
              
              <button 
                className={styles.fullscreenBtn} 
                onClick={() => setIsFullscreen(true)}
                aria-label="Fullscreen view"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>

              {selectedProject.imageCaptions && selectedProject.imageCaptions[activeImageIdx] && (
                <div className={styles.imageCaption}>
                  {selectedProject.imageCaptions[activeImageIdx]}
                </div>
              )}
            </div>
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              
              {/* Thumbnail Selector */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className={styles.thumbnailGrid}>
                  {selectedProject.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`${styles.thumbnailWrapper} ${activeImageIdx === idx ? styles.activeThumbnail : ""}`}
                      onClick={() => setActiveImageIdx(idx)}
                    >
                      <img src={img} alt={`Preview ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              <p className={styles.modalDesc}>{selectedProject.longDesc}</p>
              
              <div className={styles.techSection}>
                <h4>{t("modalUsedTech")}</h4>
                <div className={styles.techStack}>
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalLinks}>
                <a href={selectedProject.demoUrl} className={styles.modalPrimaryBtn}>
                  {t("modalDemoBtn")}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Overlay */}
      {isFullscreen && selectedProject && (
        <div className={styles.fullscreenOverlay} onClick={() => setIsFullscreen(false)}>
          <button className={styles.fullscreenCloseBtn} onClick={() => setIsFullscreen(false)} aria-label="Close fullscreen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <img src={currentMainImage} alt={selectedProject.title} className={styles.fullscreenImg} />
            {selectedProject.imageCaptions && selectedProject.imageCaptions[activeImageIdx] && (
              <div className={styles.fullscreenCaption}>
                {selectedProject.imageCaptions[activeImageIdx]}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
