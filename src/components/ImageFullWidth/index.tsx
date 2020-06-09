import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { ImageContainer, ImageData } from "./style";

interface IImageFullWidth {
  image: string;
}

const ImageFullWidth: FC<IImageFullWidth> = ({ image }) => {
  return (
    <Row>
      <Col md={12}>
        <ImageContainer>
          <ImageData src={image} />
        </ImageContainer>
      </Col>
    </Row>
  );
};
export default ImageFullWidth;
