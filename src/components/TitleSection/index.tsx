import React, { FC } from "react";
import { Title } from "./style";

interface ITitleSection {
  color?: string;
  size?: number;
}

const TitleSection: FC<ITitleSection> = ({ children, color, size }) => {
  return (
    <Title color={color} size={size}>
      {children}
    </Title>
  );
};
export default TitleSection;
