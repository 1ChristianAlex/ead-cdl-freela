import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CaroselItem = styled(Carousel.Item)`
  padding: 50px;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding: 10px;
  }
`;
