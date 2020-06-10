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
      filter: { absolutePath: { regex: "/modulo-1/aula-4/" } }
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

const ModuleFour: React.FC<any> = ({ data }) => {
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
          {!ph.includes("_06") &&
            !ph.includes("_09") &&
            !ph.includes("_11") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_06") && (
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
                          title: "Como e feita a pesquisa?",
                          content: [
                            "A pesquisa deve ser considerada a primeira etapa de um bom planejamento. No ambiente digital ela não seria diferente. É por meio do resultado de uma pesquisa bem realizada que será possível traçar os caminhos da ação que será desenvolvida.",
                          ],
                        },
                        {
                          title: "Como e feita a pesquisa?",
                          content: [
                            "A pesquisa deve mostrar como é o cenário atual que se quer entrar. Qual é o público certo para o meu produto/ serviço? Como a concorrência tem atuado com esse público e nesse cenário? A partir dessas perguntas se torna possível traçar os objetivos que a empresa deve buscar, além de desenvolver as metas que pretende alcançar.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<Image src={ph} className="vh-100 w-100" />}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_09") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#237BED"
                ColLeftContent={
                  <TextConteiner
                    className="text-center h-100"
                    bgColor="#237BED"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Monitoramento",
                          content: [
                            "O monitoramento do conteúdo na internet de modo geral, mas especialmente nas redes sociais, traduzir os resultados alcançados com a estratégia, apresentando os impactos obtidos com determinada ação.",
                          ],
                        },
                        {
                          title: "Monitoramento",
                          content: [
                            "Após o monitoramento, é necessário a análise dos dados, interpretando-os de forma a traduzir a relação entre a empresa e o consumidor, a partir da determinada estratégia adotada pelo profissional de marketing.",
                          ],
                        },
                        {
                          title: "Monitoramento",
                          content: [
                            "Saiba ajustar o que der errado. O monitoramento mostra o que está funcionando, mas também o que não está dando bons resultados. Quando se acompanha os números, é possível rever a estratégia se algum retorno não estiver condizente com o esperado.",
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
          {ph.includes("_11") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={5}
                colRight={7}
                bgColor="#FF8D45"
                ColRightContent={
                  <TextConteiner
                    className="text-center h-100"
                    bgColor="#FF8D45"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Erros que você deve evitar",
                          content: [
                            "Não conversar com os consumidores: a interação é a chave da aproximação e conquista do cliente.",
                          ],
                        },
                        {
                          title: "Erros que você deve evitar",
                          content: [
                            "Usar uma única estratégia: nesse universo infinito de possibilidades que é a internet é preciso se mostrar antenado a todas elas e explorar múltiplas plataformas e ferramentas para alcançar os clientes.",
                          ],
                        },
                        {
                          title: "Erros que você deve evitar",
                          content: [
                            "Não ter frequência com os conteúdos: a periodicidade das postagens é fundamental para ser lembrado. Além disso, a frequência facilita a aproximação do usuário com o produto/ serviço.",
                          ],
                        },
                        {
                          title: "Erros que você deve evitar",
                          content: [
                            "Não acompanhar os números: é preciso monitorar as redes e os conteúdos para saber se a ação está atrativa, conhecer o retorno do público, para saber se aquela estratégia deve ser mantida ou repensada.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<Image src={ph} className="vh-100 w-100" />}
              />
            </SectionWindowFull>
          )}
        </>
      ))}
    </>
  );
};

export default ModuleFour;
