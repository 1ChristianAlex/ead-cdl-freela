import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface ITitle {
  color?: string;
  size?: number;
}

export const Title = styled.h1<ITitle>`
  font-weight: 600;
  letter-spacing: 0px;
  color: ${props => (props.color ? props.color : Colors.black)};
  text-shadow: 4px 4px 8px #00000067;
  opacity: 1;
  font-size: ${props => (props.size ? `${props.size}px` : "29px")};
`;
