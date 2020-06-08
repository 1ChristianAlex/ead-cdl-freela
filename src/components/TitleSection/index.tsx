import React, { FC } from "react";
import { Title } from "./style";

interface ITitleSection {
  color?: string;
  classTitle?: string;

  size?: number;
}

const TitleSection: FC<ITitleSection> = ({
  children,
  color,
  size,
  classTitle,
}) => {
  return (
    <Title color={color} size={size} className={classTitle}>
      {children}
    </Title>
  );
};
export default TitleSection;
