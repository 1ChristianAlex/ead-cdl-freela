import React, { FC } from "react";
import { ContainerFull, BgImage, SuperiorContainer } from "./style";

interface ISectionWindowHaf {
  bgImage?: string;
  bgColor?: string;
}

const SectionWindowHaf: FC<ISectionWindowHaf> = ({
  children,
  bgColor,
  bgImage,
}) => (
  <SuperiorContainer bgColor={bgColor}>
    {bgImage && <BgImage src={bgImage} />}
    <ContainerFull>{children}</ContainerFull>
  </SuperiorContainer>
);

export default SectionWindowHaf;
