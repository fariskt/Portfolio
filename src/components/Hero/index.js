import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypewriterComponent from "typewriter-effect";
import Socials from "../Socials/index";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.015) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 50px 50px;
`;

const HeroContainer = styled(motion.div)`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #dbeafe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
`;

const TextLoop = styled(motion.div)`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #cbd5e1;
  margin-bottom: 2rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const TypewriterSpan = styled.span`
  color: #8b5cf6;
  font-weight: 700;
  padding-left: 5px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 520px;
  @media (max-width: 968px) {
    margin: 0 auto 2.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 968px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 9999px;
  z-index: 10 ;
  pointer-events: auto;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialsWrapper = styled(motion.div)`
  margin-top: 2rem;
  z-index: 10;
  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
  }
`;


const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
  opacity: 0.7;
  z-index: 5;

  &::after {
    content: "";
    width: 1px;
    height: 30px;
    background: linear-gradient(to bottom, #6366f1, transparent);
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroSection id="about">
      <GridPattern />
      <Navbar />
      <HeroContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContentWrapper>
          <TextContent>
            <Title variants={itemVariants}>
              Hi, I'm <br />
              {Bio.name}
            </Title>

            <TextLoop variants={itemVariants}>
              I'm a {" "}{" "}
              <TypewriterSpan>
                <TypewriterComponent
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </TypewriterSpan>
            </TextLoop>

            <Description variants={itemVariants}>
              Passionate about creating exceptional digital experiences through
              innovative design and cutting-edge technology. Let's build
              something amazing together.
            </Description>

            <ButtonGroup variants={itemVariants}>
              <PrimaryButton
                href={Bio.resume}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
                <span>→</span>
              </PrimaryButton>

              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
              </SecondaryButton>
            </ButtonGroup>

            <SocialsWrapper variants={itemVariants}>
              <Socials />
            </SocialsWrapper>
          </TextContent>
        </ContentWrapper>
      </HeroContainer>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll to explore
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
