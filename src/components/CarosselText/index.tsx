import React, { FC, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

import { TitleSection, Text } from "..";
import { Colors } from "../../styles/colors";

interface ICarrouselText {
  carouselItem: {
    title?: string;
    content: string[];
  }[];
}

const CarrouselText: FC<ICarrouselText> = ({ carouselItem }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="h-100 pt-5"
    >
      {carouselItem.map((itemCa, indexSlide) => {
        return (
          <Carousel.Item key={`ca-${indexSlide}`} className="p-5">
            <Row className="text-left">
              <Col md={12}>
                {itemCa.title && (
                  <TitleSection classTitle="text-left p-2" color={Colors.white}>
                    {itemCa.title.toLocaleUpperCase()}
                  </TitleSection>
                )}
              </Col>
              {itemCa.content.map((textItem, indexTExt) => {
                return (
                  <Col md={12} key={indexTExt * 6}>
                    <Text colors={Colors.white} size={18} className="p-2">
                      {textItem}
                    </Text>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default CarrouselText;
