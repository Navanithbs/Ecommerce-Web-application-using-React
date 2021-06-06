import React from "react";
import styled from "styled-components";
import logo from "../assets/logo1.png";
const Footer = () => {
  return (
    <Container>
      <h5>
        {/* &copy;  */}
        {new Date().getFullYear()}
      </h5>

      <span>
        <img src={logo} className="logo" alt="coding addict" />
      </span>
      {/* <h5>All rights reserved</h5> */}
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 20px;
    padding: 5px;
    width: 200px;
  }
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
