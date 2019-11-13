import * as React from "react";
import styled from "styled-components";

interface LinkProps {
  text: string;
}

const Div = styled.div`
  font: lighter 34px/46px Segoe UI;
  color: var(--primaryColor);
  margin: 0 15px;
`;

const Link: React.FC<LinkProps> = (props: LinkProps) => (
  <Div className="hoverable">{props.text}</Div>
);

export default Link;
