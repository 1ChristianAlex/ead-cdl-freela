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
      filter: { absolutePath: { regex: "/modulo-1/aula-5/" } }
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

const ModuleFive: React.FC<any> = ({ data }) => {
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
          {!ph.includes("_05") &&
            !ph.includes("_06") &&
            !ph.includes("_09") &&
            !ph.includes("_10") &&
            !ph.includes("_12") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_05") && (
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
                          title: "Como é conhecido o tráfego Orgânico?",
                          content: [
                            "Para se destacar no cenário digital é preciso fazer com que as pessoas se interessem pelos conteúdos disponibilizados, seja em sites, blogs ou redes sociais. Esse interesse gera um movimento nas plataformas digitais, conhecido como tráfego orgânico.",
                          ],
                        },
                        {
                          title: "Como é conhecido o tráfego Orgânico?",
                          content: [
                            "É por meio desse tráfego, ou seja, desse movimento de pessoas na página que se torna possível se a estratégia está adequada. Para garantir o tráfego orgânico é importante conhecer o público como quem está se comunicando.",
                          ],
                        },
                        {
                          title: "Como é conhecido o tráfego Orgânico?",
                          content: [
                            "Mas também é essencial a escolha das palavras-chave adequadas. Para isso deve-se pensar como o usuário: Quais palavras essa pessoa usaria em suas buscas para chegar até o meu produto?",
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
          {ph.includes("_06") && (
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
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Métricas de Atração",
                          content: [
                            "A métrica é um indicador que mostra um determinado comportamento do usuário em site, redes sociais ou blogs. Uma métrica é a forma bruta de um indicador, e geralmente não está associada a nenhuma Meta de Conversão. Essas métricas podem ser:",
                          ],
                        },
                        {
                          title: "Métricas de Atração",
                          content: [
                            "&bull; Visitas do Site.",
                            "&bull; Visitantes Únicos.",
                            "&bull; Taxa de Rejeição.",
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
          {ph.includes("_09") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor={Colors.white}
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor={Colors.white}
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.black}
                      carouselItem={[
                        {
                          title: "Métricas de Atração",
                          content: [
                            "O marketing digital é fundamental para conseguir atrair os seguidores para os produtos e serviços. Mas já é de conhecimento de todos que não adianta somente atrair os usuários da rede. É preciso fazer com que haja a conversão, ou seja, que o usuário passe de expectador para consumidor. A métrica de conversão tem como objetivo apresentar os números dessa conversão para o consumo.",
                          ],
                        },
                        {
                          title: "Métricas de Atração",
                          content: [
                            "Para saber se a taxa de conversão está positiva, ou seja, se está convergindo o usuário para a ação, é necessário acompanhar os indicativos como o ROI (Retorno sobre Investimento) e investir em CRO (Conversion Rate Optimization). Hoje esses cálculos podem ser feitos online, com a ajuda de links que otimizam essas informações. Você pode saber mais em: <a href='https://resultadosdigitais.com.br/blog/o-que-e-roi-retorno-sobre-investimento/'>https://resultadosdigitais.com.br/blog/o-que-e-roi-retorno-sobre-investimento/</a>",
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
          {ph.includes("_10") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#FF8D45"
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#FF8D45"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Métricas de Receita",
                          content: [
                            "Atualmente são vários indicadores que ajudam nesse acompanhamento, que podem auxiliar na interpretação e uso dessas métricas, como:",
                            "CAC - Custo de Aquisição por Cliente - indicador que aponta quanto cada consumidor custa para ser conquistado.",
                          ],
                        },
                        {
                          title: "Métricas de Receita",
                          content: [
                            "LTV - Lifetime Value - conhecido como o valor permanente do cliente. Trata-se de uma previsão de quanto o consumidor irá comprar ao longo de um determinado prazo.",
                          ],
                        },
                        {
                          title: "Métricas de Receita",
                          content: [
                            "MRR - Receita Mensal Recorrente - trata-se de um indicador que auxilia as empresas na organização dos gastos mensais, se baseando na média de consumo dos usuários. Essa estratégia é fundamental para saber se é necessário mudar a estratégia, se houver queda brusca nos rendimento.",
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
                bgColor="#6C63FF"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#6C63FF"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Métricas de Receita",
                          content: [
                            "Atualmente são vários indicadores que ajudam nesse acompanhamento, que podem auxiliar na interpretação e uso dessas métricas, como:",
                            "CAC - Custo de Aquisição por Cliente - indicador que aponta quanto cada consumidor custa para ser conquistado.",
                          ],
                        },
                        {
                          title: "Métricas de Receita",
                          content: [
                            "LTV - Lifetime Value - conhecido como o valor permanente do cliente. Trata-se de uma previsão de quanto o consumidor irá comprar ao longo de um determinado prazo.",
                          ],
                        },
                        {
                          title: "Métricas de Receita",
                          content: [
                            "MRR - Receita Mensal Recorrente - trata-se de um indicador que auxilia as empresas na organização dos gastos mensais, se baseando na média de consumo dos usuários. Essa estratégia é fundamental para saber se é necessário mudar a estratégia, se houver queda brusca nos rendimento.",
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
        </>
      ))}
    </>
  );
};

export default ModuleFive;
