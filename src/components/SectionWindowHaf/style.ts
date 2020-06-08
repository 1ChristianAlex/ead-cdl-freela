import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ContainerFull = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
`;
export const BgImage = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
interface ISuperiorContainer {
  bgColor?: string;
}
export const SuperiorContainer = styled.div<ISuperiorContainer>`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => (props.bgColor ? props.bgColor : Colors.white)};
`;
