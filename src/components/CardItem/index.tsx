import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import {
  CardContent,
  CardIcon,
  CardTitle,
  CardContainer,
  CardIconConten,
  CardContentDiv,
} from "./style";

interface ICardItem {
  Icon: string;
  title: string;
  textContent: string;
  color?: string;
}

const CardItem: FC<ICardItem> = ({ Icon, title, textContent, color }) => {
  return (
    <CardContainer className="card-container" color={color}>
      <CardIconConten>
        <CardIcon src={Icon} />
      </CardIconConten>
      <CardTitle color={color}>{title}</CardTitle>
      <CardContentDiv>
        <CardContent color={color}>{textContent}</CardContent>
      </CardContentDiv>
    </CardContainer>
  );
};

export default CardItem;
