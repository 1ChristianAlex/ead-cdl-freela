import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface IParagraph {
  color: string;
  size: number;
}

export const Paragraph = styled.p<IParagraph>`
  color: ${props => (props.color ? props.color : Colors.white)};
  font-size: ${props => (props.size ? `${props.size}px` : "28px")};
`;
