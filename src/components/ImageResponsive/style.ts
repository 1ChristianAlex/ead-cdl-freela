import styled from "styled-components";
import { Image } from "react-bootstrap";

export const ImageResp = styled(Image)`
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 991px) {
    height: 100%;
    width: 100%;
  }
`;
