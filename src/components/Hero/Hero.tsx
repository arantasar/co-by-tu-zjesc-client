import * as React from "react";
import styled from "styled-components";

import background from "../../assets/pizza.png";

const Wrapper = styled.div`
  height: 100vh;
  background: url(${background});
  background-size: cover;
  padding-top: 20%;
`;

const Hero: React.FC = props => <Wrapper>{props.children}</Wrapper>;

export default Hero;
