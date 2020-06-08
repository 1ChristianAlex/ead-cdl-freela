import styled from "styled-components";

interface IBgImagem {
  bgColor?: string;
}

export const BgImagemContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
export const BgImagem = styled.img<IBgImagem>`
  height: 100vh;
  position: absolute;
  width: 100%;
`;
