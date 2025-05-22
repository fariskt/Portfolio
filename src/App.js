import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import { useEffect, useRef, useState } from "react";
import bgVideo from "./assets/bg-mobile.mp4";

const Body = styled.div`
  background-color: #121212;
  color: #ffffff;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);

  const rafId = useRef(null);
  const targetTime = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const updateVideoTime = () => {
      if (!video || isNaN(video.duration)) return;

      const current = video.currentTime;
      const diff = targetTime.current - current;

      if (Math.abs(diff) > 0.01) {
        video.currentTime += diff * 0.1; // Slower = smoother
        rafId.current = requestAnimationFrame(updateVideoTime);
      } else {
        video.currentTime = targetTime.current;
      }
    };

    const handleScroll = () => {
      if (!video || isNaN(video.duration)) return;

      const scrollY = window.scrollY;
      const scrollRatio = scrollY / maxScroll;
      targetTime.current = scrollRatio * video.duration;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Router>
      {!isMobile && <VideoBackground
        ref={videoRef}
        preload="auto"
        disablePictureInPicture
        playsInline
        muted
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>}

      <Body>
        <Hero />
        <Skills />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Education />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <div>
          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            Thank you for visiting
          </p>
        </div>
      </Body>
    </Router>
  );
}

export default App;
