import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { ImageModule } from "./style";

interface IModuleTitle {
  image?: string;
  imageTitle?: string;
  imageText?: string;
}

const ModuleTitle: FC<IModuleTitle> = ({ image, imageText, imageTitle }) => {
  return (
    <Row>
      <Col md={6} />
      <Col md={6}>
        <ImageModule src={image} />
      </Col>
    </Row>
  );
};

export default ModuleTitle;
