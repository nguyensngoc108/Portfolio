import React, { Suspense, lazy, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import Header from '../components/Header/Header.jsx';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Lazy load components
const Projects = lazy(() => import('../components/Projects'));

const ProjectsSection = styled.div`
  padding-top: 80px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  min-height: 100vh;
`;

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Doan Huu Nguyen Portfolio</title>
        <meta name="description" content="Portfolio of Doan Huu Nguyen, showcasing Web and Full Stack development projects." />
        <meta name="keywords" content="Doan Huu Nguyen, Software Developer, Web Development, Portfolio, Projects, JavaScript, Python, React" />
        <meta name="author" content="Doan Huu Nguyen" />

        {/* Open Graph Data */}
        <meta property="og:title" content="Projects | Doan Huu Nguyen Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Explore projects developed by Doan Huu Nguyen, showcasing skills in Web and Full Stack Development." />

        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Doan Huu Nguyen Portfolio" />
        <meta name="twitter:description" content="Explore projects developed by Doan Huu Nguyen." />
      </Helmet>

      <Header 
        Title="Projects Page"
      />
      <ProjectsSection>
        <Suspense>
          <Projects
            projectsData={firebaseData.projects || []}
            openModal={openModal}
            setOpenModal={setOpenModal}
            defaultfilter="all"
            projectFilters={null}
            ViewAllCard={0}
            ShowTitle={null}
            IntroText={1}
          />
        </Suspense>

        {openModal.state && (
          <ProjectDetails 
            projectsData={firebaseData.projects || []} 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
          />
        )}

        <Footer 
          footerData={firebaseData.Bio || {}} 
        />
      </ProjectsSection>
    </>
  );
}

export default AllProjects;
