import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import {
  ImageModule,
  ImageTitle,
  ImageText,
  ImageTextContainer,
} from "./style";

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
        {/* {(imageTitle || imageText) && (
          <ImageTextContainer>
            {imageTitle && <ImageTitle>{imageTitle.toUpperCase()}</ImageTitle>}
            {imageText && <ImageText>{imageText}</ImageText>}
          </ImageTextContainer>
        )} */}
      </Col>
    </Row>
  );
};

export default ModuleTitle;
