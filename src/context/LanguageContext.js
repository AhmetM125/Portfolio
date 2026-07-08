"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  tr: {
    navHome: "Ana Sayfa",
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navContact: "İletişim",
    navCta: "Bana Ulaşın",
    heroBadge: "Projeler İçin Uygun & Aktif",
    heroWelcome: "Merhaba, Ben",
    heroDescription: "Modern web teknolojilerini kullanarak hızlı, güvenli ve kullanıcı odaklı web deneyimleri tasarlıyorum. Fikirleri estetik ve işlevsel dijital ürünlere dönüştürmek en büyük tutkum.",
    heroCtaPrimary: "Projelerimi Gör",
    heroCtaSecondary: "Bana Ulaşın",
    heroScroll: "Kaydır",
    aboutExplore: "Keşfet",
    aboutTitle: "Hakkımda",
    aboutHeading: "Sınırları Zorlayan Teknolojiler Üretiyorum",
    aboutBio: "Yazılım dünyasındaki yolculuğum, karmaşık algoritmaları çözmeye ve estetik ile işlevselliği birleştiren çözümler geliştirmeye olan tutkumla başladı. Kod yazarken en çok önem verdiğim konular; performans, temiz kod mimarisi ve kusursuz bir kullanıcı deneyimidir.",
    aboutStatExp: "Yıllık Deneyim",
    aboutStatProj: "Tamamlanan Proje",
    aboutTimelineHeading: "Deneyim & Eğitim",
    aboutSkillsFront: "Frontend Yeteneklerim",
    aboutSkillsBack: "Backend & DevOps Yeteneklerim",
    projectsSubtitle: "Çalışmalarım",
    projectsTitle: "Seçkin Projeler",
    projectsFilterAll: "Tümü",
    projectsFilterFront: "Frontend",
    projectsFilterFull: "Full-Stack",
    projectsFilterDesign: "UI/UX Tasarım",
    projectDetailsBtn: "Detayları İncele",
    modalUsedTech: "Kullanılan Teknolojiler",
    modalDemoBtn: "Canlı Önizleme",
    modalGitBtn: "GitHub'da İncele",
    contactSubtitle: "İletişim",
    contactTitle: "Bana Ulaşın",
    contactHeading: "Yeni Projeler İçin Heyecanlıyım!",
    contactDesc: "Aklınızda bir proje mi var yoksa sadece merhaba mı demek istiyorsunuz? Aşağıdaki yollardan biriyle bana ulaşabilir veya formu doldurarak doğrudan mesaj gönderebilirsiniz. En kısa sürede dönüş yapacağım.",
    contactName: "Adınız",
    contactNamePlaceholder: "Adınız Soyadınız",
    contactEmail: "E-posta Adresiniz",
    contactEmailPlaceholder: "adiniz@eposta.com",
    contactSubject: "Konu",
    contactSubjectPlaceholder: "Nasıl yardımcı olabilirim?",
    contactMessage: "Mesajınız",
    contactMessagePlaceholder: "Projeniz hakkında detaylar...",
    contactSubmitBtn: "Mesaj Gönder",
    contactSubmittingBtn: "Gönderiliyor...",
    contactSuccessTitle: "Teşekkürler!",
    contactSuccessDesc: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.",
    contactSuccessNewBtn: "Yeni Mesaj Gönder",
    footerCopyright: "Tüm Hakları Saklıdır.",
    heroWords: [".NET & C# Geliştirici", "Next.js & React Uzmanı", "Full-Stack Developer"],
    experienceList: [
      {
        year: "2025 - Günümüz",
        title: "Senior Full-Stack Developer",
        org: "Freelance",
      },
      {
        year: "2022 - 2024",
        title: "Full-Stack Developer",
        org: "Yakın Doğu Teknoloji",
      },
      {
        year: "2018 - 2023",
        title: "Yazılım Mühendisliği",
        org: "Lefke Avrupa Üniversitesi",
      },
    ],
    projectsList: [
      {
        id: 1,
        title: "Berber Randevu Uygulaması",
        shortDesc: "Berber salonları ve kuaförler için dinamik randevu yönetimi, çalışma saatleri planlaması ve müşteri takip sistemi.",
        longDesc: "Bu tam kapsamlı randevu yönetim sistemi, berber ve kuaför salonlarının dijital randevu süreçlerini otomatikleştirir. Müşteriler için kolay randevu oluşturma ekranı, berberler için çalışma saatleri paneli ve randevu öncesi otomatik SMS/E-posta bildirimleri gibi gelişmiş özellikler içerir. Backend yapısında C# .NET Web API ve veritabanı olarak MSSQL kullanılmıştır.",
        category: "fullstack",
        image: "/barber_app.png",
        images: ["/barber_app.png", "/barber_app2.png", "/barber_app3.png"],
        imageCaptions: ["Randevu Takvimi ve Yönetici Arayüzü", "Müşteri Randevu Ekranı", "Müşteri Randevu Takip Ekranı"],
        tech: ["C#", ".NET Core API", "React Native", "MSSQL", "Entity Framework"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Fizik Tedavi Yönetim Uygulaması",
        shortDesc: "Klinikler ve hastalar için egzersiz planlama, tedavi takibi ve iyileşme raporlaması sunan sağlık otomasyonu.",
        longDesc: "Fizik Tedavi Yönetim uygulaması, fizyoterapistlerin hastalarına kişiselleştirilmiş egzersiz programları tanımlamasına ve hastaların iyileşme süreçlerini grafiklerle takip etmesine olanak tanır. 3D vücut kas haritası desteği ve interaktif gelişim takipleri barındıran modern bir arayüze sahiptir.",
        category: "fullstack",
        image: "/PhysicalMng.jpg",
        images: ["/PhysicalMng.jpg", "/PhysicalMng2.jpg"],
        imageCaptions: ["Giriş Ekranı", "Finansal Raporlama"],
        tech: ["C#", ".NET Core API", "React.js", "MSSQL", "Entity Framework"],
        demoUrl: "https://physio-3b5e5uite-yurd-soft.vercel.app/",
        githubUrl: "#",
      }
    ]
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    navCta: "Contact Me",
    heroBadge: "Available & Active for Projects",
    heroWelcome: "Hello, I'm",
    heroDescription: "I design fast, secure, and user-centric web experiences using modern web technologies. Transforming ideas into aesthetic and functional digital products is my ultimate passion.",
    heroCtaPrimary: "View My Projects",
    heroCtaSecondary: "Contact Me",
    heroScroll: "Scroll",
    aboutExplore: "Explore",
    aboutTitle: "About Me",
    aboutHeading: "I Build Technologies That Push Boundaries",
    aboutBio: "My journey in the software world started with my passion for solving complex algorithms and developing solutions that combine aesthetics and functionality. When writing code, the aspects I value most are performance, clean code architecture, and flawless user experience.",
    aboutStatExp: "Years of Experience",
    aboutStatProj: "Completed Projects",
    aboutTimelineHeading: "Experience & Education",
    aboutSkillsFront: "My Frontend Skills",
    aboutSkillsBack: "My Backend & DevOps Skills",
    projectsSubtitle: "My Works",
    projectsTitle: "Featured Projects",
    projectsFilterAll: "All",
    projectsFilterFront: "Frontend",
    projectsFilterFull: "Full-Stack",
    projectsFilterDesign: "UI/UX Design",
    projectDetailsBtn: "View Details",
    modalUsedTech: "Used Technologies",
    modalDemoBtn: "Live Preview",
    modalGitBtn: "View on GitHub",
    contactSubtitle: "Contact",
    contactTitle: "Contact Me",
    contactHeading: "Excited for New Projects!",
    contactDesc: "Do you have a project in mind or just want to say hello? You can reach out to me through one of the ways below or fill out the form to send a message directly. I will get back to you as soon as possible.",
    contactName: "Your Name",
    contactNamePlaceholder: "Your Name & Surname",
    contactEmail: "Your Email Address",
    contactEmailPlaceholder: "yourname@email.com",
    contactSubject: "Subject",
    contactSubjectPlaceholder: "How can I help you?",
    contactMessage: "Your Message",
    contactMessagePlaceholder: "Details about your project...",
    contactSubmitBtn: "Send Message",
    contactSubmittingBtn: "Sending...",
    contactSuccessTitle: "Thank you!",
    contactSuccessDesc: "Your message has been sent successfully. I will get back to you as soon as possible.",
    contactSuccessNewBtn: "Send New Message",
    footerCopyright: "All Rights Reserved.",
    heroWords: [".NET & C# Developer", "Next.js & React Expert", "Full-Stack Developer"],
    experienceList: [
      {
        year: "2025 - Present",
        title: "Senior Full-Stack Developer",
        org: "Freelance",
      },
      {
        year: "2023 - 2025",
        title: "Full-Stack Developer",
        org: "Neareast Technology",
      },
      {
        year: "2018 - 2023",
        title: "Software Engineering",
        org: "European University of Lefke",
      },
    ],
    projectsList: [
      {
        id: 1,
        title: "Barber Appointment Application",
        shortDesc: "Dynamic appointment management, working hours scheduling, and customer tracking system for barber shops and salons.",
        longDesc: "This full-stack appointment management system automates the digital booking workflows of barbers and beauty salons. It includes an intuitive interface for clients to schedule slots, a shift management dashboard for barbers, and automated pre-appointment notification alerts. Developed using C# .NET Web API for the backend and MSSQL for data storage.",
        category: "fullstack",
        image: "/barber_app.png",
        images: ["/barber_app.png", "/barber_app2.png", "/barber_app3.png"],
        imageCaptions: ["Appointment Calendar and Admin Interface", "Customer Appointment Screen", "Customer Appointment Tracking Screen"],
        tech: ["C#", ".NET Core API", "React Native", "MSSQL", "Entity Framework"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Physical Therapy Management App",
        shortDesc: "Healthcare automation offering exercise scheduling, treatment tracking, and recovery progress reporting for clinics and patients.",
        longDesc: "The Physical Therapy Management application enables physiotherapists to assign customized exercise regimes to their patients and track recovery steps with visual charts. It features a modern user interface equipped with an interactive 3D muscle mapping module.",
        category: "fullstack",
     image: "/PhysicalMng.jpg",
        images: ["/PhysicalMng.jpg", "/PhysicalMng2.jpg"],
        imageCaptions: ["Home Screen", "Financial Reporting"],
        tech: ["C#", ".NET Core API", "React.js", "MSSQL", "Entity Framework"],
        demoUrl: "#",
        githubUrl: "#",
      }
    ]
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "tr";
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
