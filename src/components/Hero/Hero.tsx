import * as React from "react";
import styled from "styled-components";

import background from "../../assets/pizza.png";

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${background});
  padding-top: 20vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Hero: React.FC = props => <Wrapper>{props.children}</Wrapper>;

export default Hero;
