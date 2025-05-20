import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const Social = styled.div`
  height: 40px;
  width: 100%;
    background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Logos = styled.div`
a {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
}

`


function Footer() {
  return (
    <Social>
      <div>
        <Logos className="logos" style={{display: "flex", gap: "15px"}} id="#contact">
          <Link to={Bio.github} target="display" >
            <FaGithub />
          </Link>
          <Link to={Bio.linkedin} target="display" >
            <FaLinkedin />
          </Link>
          <Link to={Bio.insta} target="display" >
            <FaInstagram />
          </Link>
          <Link to={Bio.twitter} target="display" >
            <FaTwitter />
          </Link>
          <Link to={Bio.facebook} target="display" >
            <FaFacebook />
          </Link>
        </Logos>
      </div>
    </Social>
  );
}

export default Footer;
