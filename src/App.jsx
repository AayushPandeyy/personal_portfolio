import AboutMeSection from "./components/AboutMeSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import MySkillsSection from "./components/MySkillsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";
import TopNavBar from "./components/TopNavBar";
import React, { useRef } from "react";
function App() {
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
        scrollToSkills={()=> scrollToSection(skillsRef)}
        scrollToProjects={()=> scrollToSection(projectsRef)}
        scrollToContact={()=> scrollToSection(contactRef)}
      />
      <header ref={headerRef}>
        <HeaderSection></HeaderSection>
      </header>
      <section ref={aboutMeRef}>
        <AboutMeSection></AboutMeSection>
      </section>
      <section ref={skillsRef}>
        <MySkillsSection></MySkillsSection>
      </section>
      <section ref={projectsRef}>
        <ProjectsSection></ProjectsSection>
      </section>
      <TechStackSection></TechStackSection>
      <section ref={contactRef}>
        <ContactMe></ContactMe>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
