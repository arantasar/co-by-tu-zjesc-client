import * as React from "react";
import styled from "styled-components";

import background from "../../assets/home.jpg";

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Hero: React.FC = (props) => <Wrapper>{props.children}</Wrapper>;

export default Hero;
