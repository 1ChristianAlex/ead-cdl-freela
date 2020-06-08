import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ImageModule = styled.img`
  width: auto;
  height: 100vh;
  position: absolute;
  z-index: 2;
`;
export const ImageTitle = styled.h1`
  position: absolute;
  right: 3em;
  top: calc(100vh - 10em);
  font-size: 44px;
  color: ${Colors.white};
`;

export const ImageText = styled.p`
  position: absolute;
  right: 1em;
  top: calc(100vh - 15em);
  font-size: 24px;
  width: calc(100% - 200px);
  color: ${Colors.white};
`;

export const ImageTextContainer = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-flow: column;

  align-content: center;
  height: 100vh;
  justify-items: center;
  justify-content: center;
`;
