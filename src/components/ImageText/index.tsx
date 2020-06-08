import React, { FC } from "react";
import { ImageBg, ContainerText, ContainerImageBg } from "./style";

interface IImageText {
  image: string;
}

const ImageText: FC<IImageText> = ({ children, image }) => {
  return (
    <ContainerImageBg>
      <ImageBg src={image} />
      <ContainerText>{children}</ContainerText>
    </ContainerImageBg>
  );
};

export default ImageText;
