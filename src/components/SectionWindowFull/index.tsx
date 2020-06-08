import React, { FC } from "react";
import { ContainerFull, BgImage, SuperiorContainer } from "./style";

interface ISectionWindow {
  bgImage?: string;
  bgColor?: string;
}

const SectionWindow: FC<ISectionWindow> = ({ children, bgColor, bgImage }) => (
  <SuperiorContainer bgColor={bgColor}>
    {bgImage && <BgImage src={bgImage} />}
    <ContainerFull>{children}</ContainerFull>
  </SuperiorContainer>
);

export default SectionWindow;
