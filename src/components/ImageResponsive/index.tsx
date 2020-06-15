import React, { FC } from "react";
import { ImageResp } from "./style";

interface IImageResponsive {
  src: string;
}

const ImageResponsive: FC<IImageResponsive> = ({ src }) => (
  <ImageResp src={src} />
);

export default ImageResponsive;
