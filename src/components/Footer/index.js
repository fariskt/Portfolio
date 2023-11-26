import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Bio} from "../../data/constants";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const Social = styled.div`

  bottom: 0;
  height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.card_light};
  border-top: 1px solid ${({ theme }) => theme.primary + 29};
  @media (max-width: 768px){
    height: 150px;
  };
`;

const LogoContainer = styled.div`
position: relative;
top: 50px;

.logos{
  position:absolute;
  left:0;
  right:0;
  margin-left: auto; 
  margin-right: auto;
  cursor:pointer;
  font-size: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:15px;
  :hover{
    color:rgba(180, 188, 188, 0.8);
    transition: 0.2s ease-in-out;
  }
}
@media (max-width:768px){
  top:30px;
  color:white;
}
`;

const Desc = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 16px;
    position:relative;
    bottom:20px;
   
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  font-size: 12px;
  color: rgba(140, 148, 148, 0.6);
  

`;

function Footer() {
  return (
    <Social >
      <LogoContainer>
        <div className="logos">
       <Link to={Bio.github} target="display" style={{color:"white"}}>
       <FaGithub  />
       </Link>
       <Link to={Bio.linkedin} target="display" style={{color:"white"}}>
       <FaLinkedin />
       </Link>
       <Link to={Bio.insta} target="display" style={{color:"white"}}>
       <FaInstagram />
       </Link>
         <Link to={Bio.twitter} target="display" style={{color:"white"}}>
         <FaTwitter />
         </Link>
         <Link to={Bio.facebook} target="display" style={{color:"white"}}>
         <FaFacebook />
         </Link>
         
        </div>
      </LogoContainer>
      <Desc>
        <Copyright>Copyright © All Right Reserved</Copyright>
      </Desc>
    </Social>
  );
}

export default Footer;
