import React, { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import { ContentMargin } from "./style";

interface iContentEqual {
  colLeft: number;
  colRight: number;
  bgColor?: string;
  ColLeftContent: ReactNode;
  ColRightContent: ReactNode;
}

const ContentTwo: FC<iContentEqual> = ({
  colLeft = 6,
  ColLeftContent = 6,
  colRight,
  ColRightContent,
  bgColor,
}) => {
  return (
    <ContentMargin bgColor={bgColor}>
      <Row>
        <Col md={colLeft}>{ColLeftContent}</Col>
        <Col md={colRight}>{ColRightContent}</Col>
      </Row>
    </ContentMargin>
  );
};
export default ContentTwo;
