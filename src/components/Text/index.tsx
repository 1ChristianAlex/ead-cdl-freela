import React, { FC } from "react";
import { Paragraph } from "./style";

interface ITextCustom {
  colors?: string;
  size?: number;
  className?: string;
}

const TextCustom: FC<ITextCustom> = ({ children, colors, size, className }) => (
  <Paragraph size={size} color={colors} className={className}>
    {children}
  </Paragraph>
);
export default TextCustom;
