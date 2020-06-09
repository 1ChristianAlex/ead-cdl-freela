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
    <BgImage bgImage={bgImage}>
      <ContainerFull>{children}</ContainerFull>
    </BgImage>
  </SuperiorContainer>
);

export default SectionWindow;
