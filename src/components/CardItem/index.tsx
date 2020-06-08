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
  color: string;
}

const CardItem: FC<ICardItem> = ({ Icon, title, textContent, color }) => {
  return (
    <CardContainer className="card-container" color={color}>
      <Row>
        <Col md={12}>
          <CardIconConten>
            <CardIcon src={Icon} />
          </CardIconConten>
        </Col>
        <Col md={12}>
          <CardTitle color={color}>{title}</CardTitle>
        </Col>
        <CardContentDiv>
          <Row>
            <Col>
              <CardContent color={color}>{textContent}</CardContent>
            </Col>
          </Row>
        </CardContentDiv>
      </Row>
    </CardContainer>
  );
};

export default CardItem;
