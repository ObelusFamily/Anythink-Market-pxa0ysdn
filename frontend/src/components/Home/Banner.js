import React from "react";
import styled from "styled-components";
import logo from "../../imgs/logo.png";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.dark}
`

const Banner = () => {
  return (
    <StyledDiv>
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span>A place to </span>
            <span id="get-part">get</span>
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Banner;
