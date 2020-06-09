import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ContainerFull = styled.div`
  height: 100vh;
  z-index: 2;
  position: relative;
`;
export const BgImage = styled.div<any>`
  width: 100vw;
  z-index: 1;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.bgImage});
  @media (max-width: 991px) {
    width: 100%;
  }
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
