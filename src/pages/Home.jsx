import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import EducationTimeline from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';
import Achievements from '../components/Achievements';
import styled from "styled-components";
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

// Lazy load the components
const Projects = lazy(() => import('../components/Projects'));

const Home = ({ firebaseData, openModal, setOpenModal }) => {
  return (
    <>
      <Helmet>
        <title>Doan Huu Nguyen | Software Developer Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Doan Huu Nguyen, a Software Developer with 3 years of experience in backend development, API design, and web applications." />
        <meta name="keywords" content="Doan Huu Nguyen, Software Developer, Backend Developer, JavaScript, Python, React, ExpressJS, Django, Portfolio" />
      </Helmet>

      <Navbar
        navbarData={firebaseData.Bio || {}}
        sections={['About', 'Experience', 'Education', 'Skills', 'Projects', 'Achievements']}
      />

      <HeroSection 
        heroData={firebaseData.Bio || {}} 
      />

      <Wrapper>
        <Experience />
        <EducationTimeline
          education={firebaseData.education || []}
        />
      </Wrapper>

      <Wrapper>
        <Skills
          skillsData={firebaseData.skills || []}
        />
      </Wrapper>

      <Suspense>
        <Projects
          projectsData={firebaseData.projects || []}
          openModal={openModal}
          setOpenModal={setOpenModal}
          defaultfilter="top"
          AllCard={1}
          projectFilters={null}
          ShowTitle={true}
          IntroText={true}
        />
      </Suspense>

      <Wrapper>
        <Achievements
          achievementsData={firebaseData.achievements || []}
        />
        <Contact />
      </Wrapper>
      
      <Footer
        footerData={firebaseData.Bio || {}}
        links={["About", "Experience", "Education", "Skills", "Projects", "Achievements"]}
      />

      {openModal.state && (
        <ProjectDetails 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
        />
      )}
    </>
  );
};

export default Home;
