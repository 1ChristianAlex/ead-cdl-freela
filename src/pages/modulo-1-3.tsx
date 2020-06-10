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
  const [path, setPath] = useState<string[]>([]);
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
          {!ph.includes("_03") &&
            !ph.includes("_07") &&
            !ph.includes("_08") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_03") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor={Colors.green}
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor={Colors.green}
                    padding="0 40px"
                  >
                    <CarosselText
                      carouselItem={[
                        {
                          content: [
                            "As redes sociais são facilitadoras de conexões sociais entre pessoas, grupos ou organizações que possuem os mesmos interesses. Portanto, acabam interagindo entre si.",
                            "Esse conceito foi ampliado com a internet e a criação das mídias sociais.",
                          ],
                        },
                        {
                          content: [
                            "Atualmente mais de 3,8 bilhões de pessoas em todo o mundo estão conectadas ao mundo virtual.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<Image src={ph} className="vh-100 w-100" />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_07") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#237BED"
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#237BED"
                    padding="0 40px"
                  >
                    <CarosselText
                      carouselItem={[
                        {
                          content: [
                            "Você já parou para pensar qual a importância dos vídeos e fotos para a mobilização nas redes? Como comportar nas redes? Qual a melhor linguagem? Como identificar o perfil do meu potencial cliente?",
                          ],
                        },
                        {
                          content: [
                            "Negócios que utilizam bem as redes sociais vendem mais. Por isso elas são tão importantes para as estratégias de vendas de toda empresa. O investimento e a ação certa podem trazer inúmeros benefícios para aumentar a receita, ganhar visibilidade e ainda estar próximo de seu cliente ideal.",
                          ],
                        },
                        {
                          content: [
                            "Segundo a pesquisa Social Média Trends, no Brasil, 96,2% dos usuários de internet estão em alguma rede social.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<Image src={ph} className="vh-100 w-100" />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_08") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#23CC6B"
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#23CC6B"
                    padding="0 40px"
                  >
                    <CarosselText
                      carouselItem={[
                        {
                          content: [
                            "Atrair clientes é um desafio para qualquer tipo de empresa. Os consumidores são fundamentais para o sucesso de um negócio. Não basta apenas oferecer produtos e serviços de boa qualidade, caso não sejam utilizados adequadamente os recursos necessários para divulgá-los.",
                          ],
                        },
                        {
                          content: [
                            "Em um mercado cada vez mais competitivo, os empresários precisam compreender a postura do público-alvo para alcançarem resultados expressivos. Do contrário, vão perder espaço para os concorrentes e ter dificuldades de obter um bom faturamento.",
                          ],
                        },
                        {
                          content: [
                            "Conhecer o perfil do cliente que você deseja atrair e com as características bem alinhadas é possível direcionar as ações e investir no que realmente gera grandes resultados, além de otimizar seus recursos.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<Image src={ph} className="vh-100 w-100" />}
              />
            </SectionWindowFull>
          )}
        </>
      ))}
    </>
  );
};

export default ModuleTree;
