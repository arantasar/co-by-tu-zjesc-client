import * as React from "react";
import styled from "styled-components";

const Div = styled.div`
  font: Bold 34px/46px Segoe UI;
  color: var(--primaryColor);
`;

const Logo: React.FC = () => <Div className="hoverable">CoByTuZjeść</Div>;

export default Logo;
