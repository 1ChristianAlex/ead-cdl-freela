import React, { FC } from "react";
import { TextCont } from "./style";

interface TextContainer {
  bgColor?: string;
  className?: string;
  padding?: string;
}
const TextContainer: FC<TextContainer> = ({
  children,
  bgColor,
  className,
  padding,
}) => {
  return (
    <TextCont
      className={`d-flex align-content-center align-items-center  text-center ${
        className || ""
      }`}
      bgColor={bgColor}
      padding={padding}
    >
      {children}
    </TextCont>
  );
};
export default TextContainer;
