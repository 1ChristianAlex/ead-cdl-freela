import React, { FC } from "react";
import { BgImagem, BgImagemContainer } from "./style";

interface ISectionWindow {
  bgImage?: string;
  bgColor?: string;
}

const SectionWindow: FC<ISectionWindow> = ({ children, bgColor, bgImage }) => (
  <BgImagemContainer>
    <BgImagem src={bgImage} bgColor={bgColor} />
    {children}
  </BgImagemContainer>
);

export default SectionWindow;
