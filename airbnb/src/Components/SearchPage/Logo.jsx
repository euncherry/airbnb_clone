import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/icons/Logo1.svg";
import logo2 from "../../assets/icons/Logo2.svg";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  box-sizing: border-box;
`;

const StyledLogo1 = styled.img`
  width: 102px;
  height: 32px;
  @media  (max-width: 1024px) {
    display: none;
  }
`;
const StyledLogo2 = styled.img`
  width: 30px;
  height: 32px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Logo = () => {
    return (
        <StyledContainer>
            <StyledLogo1 src={logo1} alt="airbnb로고1" />
            <StyledLogo2 src={logo2} alt="airbnb로고2" />
        </StyledContainer>
    );
};

export default Logo;