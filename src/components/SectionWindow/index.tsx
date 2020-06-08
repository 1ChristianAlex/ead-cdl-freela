import React, { FC } from "react";
import { ContainerFull, BgImage, SuperiorContainer } from "./style";

interface ISectionWindow {
  bgImage?: string;
  bgColor?: string;
  className?: string;
}

const SectionWindow: FC<ISectionWindow> = ({
  children,
  bgColor,
  bgImage,
  className,
}) => (
  <SuperiorContainer
    className={`d-flex  align-items-center ${className || ""}`}
    bgColor={bgColor}
  >
    {bgImage && <BgImage src={bgImage} />}
    <ContainerFull>{children}</ContainerFull>
  </SuperiorContainer>
);

export default SectionWindow;
