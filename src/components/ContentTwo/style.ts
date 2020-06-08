import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface IContentMargin {
  bgColor?: string;
}
export const ContentMargin = styled.div<IContentMargin>`
  height: 100%;
  background-color: #ffffff;
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column-reverse;
  background-color: ${props => (props.bgColor ? props.bgColor : Colors.white)};
`;
