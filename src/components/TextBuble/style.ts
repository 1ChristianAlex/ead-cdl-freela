import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface ITextFloating {
  bgColor: string;
  color: string;
}

export const TextFloating = styled.p<ITextFloating>`
  box-shadow: 4px 4px 8px #00000067;
  border-radius: 15px;
  opacity: 0.8;
  padding: 30px;
  color: ${props => props.color};
  background-color: ${props => (props.bgColor ? props.bgColor : Colors.white)};
`;

interface ITextFloatingContainer {
  positionY: number;
  right: number;
  left: number;
}

export const TextFloatingContainer = styled.div<ITextFloatingContainer>`
  position: absolute;
  top: ${props => `${props.positionY}%`};
  ${props =>
    props.right ? { right: `${props.right}%` } : { left: `${props.left}%` }};
`;
