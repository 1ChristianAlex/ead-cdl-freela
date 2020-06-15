import React, { FC, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { CaroselItem } from "./style";
import { TitleSection, Text } from "..";

interface ICarrouselText {
  carouselItem: {
    title?: string;
    content: string[];
  }[];
  color?: string;
}

const CarrouselText: FC<ICarrouselText> = ({ carouselItem, color }) => {
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
          <CaroselItem key={`ca-${indexSlide}`}>
            <Row className="">
              <Col md={12}>
                {itemCa.title && (
                  <TitleSection classTitle=" p-2" color={color}>
                    {itemCa.title.toLocaleUpperCase()}
                  </TitleSection>
                )}
              </Col>
              {itemCa.content.map((textItem, indexTExt) => {
                return (
                  <Col md={12} key={indexTExt * 6}>
                    <Text colors={color} size={18} className="p-2">
                      <div dangerouslySetInnerHTML={{ __html: textItem }} />
                    </Text>
                  </Col>
                );
              })}
            </Row>
          </CaroselItem>
        );
      })}
    </Carousel>
  );
};
export default CarrouselText;
