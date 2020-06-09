/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Image } from "react-bootstrap";
import {
  ImageFullWidth,
  Header,
  SectionWindowFull,
  ContentTwo,
  TextConteiner,
  CarosselText,
} from "../components";
import { Colors } from "../styles/colors";
import { imagens } from "../assets";

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "/modulo-1/aula-3/" } }
      sort: { order: ASC, fields: base }
    ) {
      edges {
        node {
          id
          name
          publicURL
        }
      }
    }
  }
`;

const ModuleTree: React.FC<any> = ({ data }) => {
  const [path, setPath] = useState([]);
  useEffect(() => {
    const pathImage = [];
    data.allFile.edges.forEach(item => {
      pathImage.push(item.node.publicURL);
    });

    setPath(
      pathImage.sort((a, b) => {
        const nameA = `${a}`.split("/");
        const nameB = `${b}`.split("/");

        return `${nameA[nameA.length]}`.localeCompare(nameB[nameB.length]);
      })
    );
  }, [data]);

  return (
    <>
      <Header />
      {path.map((ph, index) => (
        <>
          <ImageFullWidth key={index} image={ph} />
        </>
      ))}
    </>
  );
};

export default ModuleTree;
