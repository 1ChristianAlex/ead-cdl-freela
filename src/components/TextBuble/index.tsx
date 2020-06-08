import React, { FC } from "react";
import { TextFloating, TextFloatingContainer } from "./style";

interface ITextBuble {
  bgColor: string;
  color: string;
  textClass: string;
  positionY: number;
  right?: number;
  left?: number;
}

const TextBuble: FC<ITextBuble> = ({
  children,
  bgColor,
  color,
  right,
  left,
  positionY,
  textClass,
}) => (
  <TextFloatingContainer positionY={positionY} right={right} left={left}>
    <TextFloating bgColor={bgColor} color={color} className={textClass}>
      {children}
    </TextFloating>
  </TextFloatingContainer>
);

export default TextBuble;
