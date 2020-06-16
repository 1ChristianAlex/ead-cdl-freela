/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import {
  ImageFullWidth,
  Header,
  SectionWindowFull,
  ContentTwo,
  TextConteiner,
  CarosselText,
  ImageResponsive,
} from "../components";
import { Colors } from "../styles/colors";

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "/modulo-1/aula-2/" } }
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
          {!ph.includes("_11") &&
            !ph.includes("_14") &&
            !ph.includes("_12") &&
            !ph.includes("_22") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_11") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor={Colors.black}
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor={Colors.black}
                    padding="0 40px"
                  >
                    <CarosselText
                      carouselItem={[
                        {
                          title: "Você sabe como surgem as mídias sociais?",
                          content: [
                            "As mídias sociais surgem a partir da ação entre os atores sociais (os usuários) e os nós (os laços sociais que se formam quando duas - ou mais pessoas - interagem entre elas). Quando há o encontro desses dois elementos formam-se o Fluxo de Informação e isso que faz com que as redes sociais existam. Sem fluxo de informação, ou seja, sem interação entre usuários, a rede social deixa de existir.",
                          ],
                        },
                        {
                          title: "Você sabe como surgem as mídias sociais?",
                          content: [
                            "Algumas destas redes ganham destaque no ciberespaço pelo grande número de usuários e especificidade das informações que nelas são compartilhadas. É possível encontrar redes de fotografia (Flickr), vídeos (Youtube, DailyMotion), música (BitTorrent), de conhecimentos enciclopédicos (Wikipedia, Freebase) e de compartilhamentos pessoais, como os blogs.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<ImageResponsive src={ph} />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_12") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor={Colors.white}
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor={Colors.white}
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.black}
                      carouselItem={[
                        {
                          title: "Mídias pagas",
                          content: [
                            "Assim como é feita pela publicidade e pelo marketing tradicional (offline), no ambiente virtual é possível investir recursos financeiros em mídia paga. O objetivo desse tipo de investimento é conseguir resultados em um período de tempo menor que teria com o alcance orgânico.",
                          ],
                        },
                        {
                          title: "Mídias pagas",

                          content: [
                            "Nesse tipo de estratégia investe-se uma determinada quantidade em dinheiro - <strong> a quantidade varia de acordo com a plataforma, a periodicidade do anúncio e a duração</strong> - para se conseguir um alcance maior do anúncio, trazendo mais visibilidade para o negócio.",
                          ],
                        },
                        {
                          title: "Mídias pagas",

                          content: [
                            "A mídia paga pode ser realizada por meio do impulsionamento de conteúdos como posts patrocinados, banners, matérias, textos e materiais do tipo publicitário.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<ImageResponsive src={ph} />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_14") && (
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
                      color={Colors.white}
                      carouselItem={[
                        {
                          content: [
                            "Trata-se de uma estratégia fundamental para que, quando o consumidor for buscar por determinado tipo de produto ou serviço, encontra entre as primeiras opções o negócio que se busca potencializar.",
                          ],
                        },
                        {
                          content: [
                            "A estratégia do SEO acontece por meio de técnicas que buscam melhorar o ranking das páginas a partir dos resultados do Google. Por isso, se coloque no lugar do usuário. Imagine como ele faria a busca por determinado negócio.",
                            "A pesquisa do usuário pode acontecer quando ele já sabe o que quer descobrir, como um endereço, um telefone ou a medida de um produto.",
                          ],
                        },
                        {
                          content: [
                            "Mas também quando quer saber algo que desconhece, como a solução de um problema tipo “o que é”. Em ambos os casos a escolha das palavras-chaves no texto ajuda com que a empresa apareça nos primeiros links de forma orgânica.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<ImageResponsive src={ph} />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_22") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#2D3436"
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#2D3436"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "Clique nos marcadores abaixo e veja como Outbound Marketing pode ser considerado:",
                          content: [
                            "Uma comunicação de mão única, com pouca interação, uma vez que a empresa fala, mas não busca o retorno de quem recebeu a mensagem.",
                          ],
                        },
                        {
                          title:
                            "Clique nos marcadores abaixo e veja como Outbound Marketing pode ser considerado:",
                          content: [
                            "Uma estratégia que não tem como objetivo criar laços com os consumidores. A fidelização, para esses casos, não é tão importante no momento.",
                          ],
                        },
                        {
                          title:
                            "Clique nos marcadores abaixo e veja como Outbound Marketing pode ser considerado:",
                          content: [
                            "Podemos considerar como estratégia de Outbound marketing os anúncios em sites, banners e comerciais em plataformas diversas, se assemelhando com publicações existentes em revistas e jornais impressos.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<ImageResponsive src={ph} />}
              />
            </SectionWindowFull>
          )}
        </>
      ))}
    </>
  );
};

export default ModuleTree;
