import React, { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import { ContentMargin, OpacityBg } from "./style";

interface iContentEqual {
  colLeft: number;
  colRight: number;
  bgColor?: string;
  bgImage: string;
  ColLeftContent?: ReactNode;
  ColRightContent?: ReactNode;
  gradient?: boolean;
}

const ContentOpacity: FC<iContentEqual> = ({
  colLeft = 6,
  ColLeftContent = 6,
  colRight,
  ColRightContent,
  bgColor,
  bgImage,
  gradient = false,
}) => {
  return (
    <ContentMargin bgColor={bgColor}>
      <OpacityBg bgImage={bgImage} gradient={gradient}>
        <Row className="d-flex align-content-center align-items-center h-100">
          <Col md={colLeft}>{ColLeftContent}</Col>
          <Col md={colRight}>{ColRightContent}</Col>
        </Row>
      </OpacityBg>
    </ContentMargin>
  );
};
export default ContentOpacity;
