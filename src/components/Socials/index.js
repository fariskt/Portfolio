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
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.primary + 29};
  @media (max-width: 768px) {
    height: 150px;
  }
`;


function Footer() {
  return (
    <Social>
      <div>
        <div className="logos" style={{display: "flex", gap: "15px"}} id="#contact">
          <Link to={Bio.github} target="display" style={{ color: "black" }}>
            <FaGithub />
          </Link>
          <Link to={Bio.linkedin} target="display" style={{ color: "black" }}>
            <FaLinkedin />
          </Link>
          <Link to={Bio.insta} target="display" style={{ color: "black" }}>
            <FaInstagram />
          </Link>
          <Link to={Bio.twitter} target="display" style={{ color: "black" }}>
            <FaTwitter />
          </Link>
          <Link to={Bio.facebook} target="display" style={{ color: "black" }}>
            <FaFacebook />
          </Link>
        </div>
      </div>
    </Social>
  );
}

export default Footer;
