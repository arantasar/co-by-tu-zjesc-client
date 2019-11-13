import * as React from "react";
import styled from "styled-components";

import background from "../../assets/pizza.png";

const Wrapper = styled.div`
  height: 100vh;
  background: transparent url(${background}) 0% 0% no-repeat padding-box;
`;

const Hero: React.FC = props => <Wrapper>{props.children}</Wrapper>;

export default Hero;
