import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Colors } from "../../styles/colors";

export const ContainerFull = styled.div`
  height: 100vh;
  z-index: 2;
  position: relative;
  @media only screen and (max-width: 991px) {
    height: unset;
  }
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
    height: unset;
    width: 100%;
  }
`;
interface ISuperiorContainer {
  bgColor?: string;
}
export const SuperiorContainer = styled(Row)<ISuperiorContainer>`
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 991px) {
    height: unset;
    width: unset;
  }
  position: relative;
  background-color: ${props => (props.bgColor ? props.bgColor : Colors.white)};
`;
