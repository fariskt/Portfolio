import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypewriterComponent from "typewriter-effect";
import Socials from "../Socials/index";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

// Styled components with motion
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  z-index: 1;
  overflow: hidden;
`;


const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
`;


const Title = motion(styled.div`
  font-size: 52px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;

  @media screen and (max-width: 640px) {
    font-size: 36px;
  }
`);

const TextLoop = motion(styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #00ffe1;
  margin: 20px 0;
`);

const Span = styled.span`
  color: #00ffe1;
  font-weight: bold;
`;

const Subtitles = motion(styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
`);

const ResumeButton = motion(styled.a`
  background: linear-gradient(225deg, #6a11cb 0%, #2575fc 100%);
  padding: 14px 32px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`);

const Hero = () => {
  return (
    <>
      <Navbar />
      <div id="about">
        <HeroContainer>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Title
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Hi, I am <br /> {Bio.name}
              </Title>

              <TextLoop
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                I am a{" "}
                <Span>
                  <TypewriterComponent
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>

              <Subtitles
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                {Bio.description}
              </Subtitles>

              <Socials />

              <ResumeButton
                href={Bio.resume}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </div>
    </>
  );
};

export default Hero;
