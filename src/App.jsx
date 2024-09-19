import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import MySkillsSection from "./components/MySkillsSection";
import Navbar from "./components/Navbar";
import TopNavBar from "./components/TopNavBar";
import React, { useRef } from "react";
function App() {
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <TopNavBar></TopNavBar>
      <Navbar
        scrollToHeader={() => scrollToSection(headerRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
      />
      <header ref={headerRef}>
        <HeaderSection></HeaderSection>
      </header>
      <section ref={aboutMeRef}>
        <AboutMeSection></AboutMeSection>
      </section>
      <MySkillsSection></MySkillsSection>
      <Footer></Footer>
    </>
  );
}

export default App;
