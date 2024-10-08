import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  margin-bottom: 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;

`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({theme})=> theme.text_primary};

  @media (max-width: 480px){
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align:  center;
  color: ${({theme})=> theme.text_secondary};
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
  @media (max-width:768px){
    width: 90%;
  }

`;

const Skill = styled.div`
   max-width: 500px;
   width:100%; 
   background-color: ${({theme})=> theme.card};
   border: 0.1px solid #85c4e6;
   border-radius: 16px;
   padding: 18px 36px;

   @media (max-width: 768px){
    max-width: 400p24x;
    padding: 10px 36px;
   }
`;

const SkillTitile = styled.h2`
   font-size: 24px;
   font-weight: 600;
   color: ${({theme})=> theme.text_secondary};
   margin-bottom: 20px;
   text-align: center;
`;

const SkillList = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 12px;
   margin-bottom: 20px;
`;

const SkillItem = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   justify-content: center;
   font-size: 16px;
   color: ${({theme})=> theme.text_primary+80};
   border-radius: 12px;
   border: 1px solid ${({theme})=> theme.text_primary+80};
   padding: 12px 16px;
   font-weight: 400;

   @media (max-width: 768px){
    font-size: 14px;
    padding: 6px 12px;
   }
   @media (max-width: 500px){
    font-size: 14px;
    padding: 6px 12px;
   }
`;

const SkillImage = styled.img`
   width: 24px;
   height: 24px;
`;



const Skills = () => {
  return (
    <Container className='skills' id='skills'>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which i have been working on my projects
        </Desc>
        <SkillsContainer>
          {skills.map((item)=> (
            <Skill>
              <SkillTitile>{item.title}</SkillTitile>
              <SkillList>
                {item.skills.map((skill)=> (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
              
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills