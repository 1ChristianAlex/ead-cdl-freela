import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface ITextCont {
  bgColor?: string;
  padding?: string;
}

export const TextCont = styled.div<ITextCont>`
  background-color: ${props => (props.bgColor ? props.bgColor : Colors.white)};
  padding: ${props => (props.padding ? props.padding : 0)};
`;
