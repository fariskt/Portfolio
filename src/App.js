import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";

const Body = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
          </Wrapper>
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
