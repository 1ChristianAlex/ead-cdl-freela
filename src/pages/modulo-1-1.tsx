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
import { ImageResp } from "../components/ImageResponsive/style";

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "/modulo-1/aula-1/" } }
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

const ModuleOne: React.FC<any> = ({ data }) => {
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
          {!ph.includes("_20") ? (
            <ImageFullWidth key={index} image={ph} />
          ) : (
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
                          title: "Alcance do público",
                          content: [
                            "O alcance do público é uma das principais diferenças entre o marketing digital e marketing tradicional. As estratégias trabalhadas na internet podem atingir uma infinidade de pessoas em qualquer lugar, permitindo acesso muito maior do consumidor à informação que as ações que podemos realizar no ambiente físico.",
                          ],
                        },
                        {
                          title: "Valor das Ações",
                          content: [
                            "O custo para realizar ações de marketing no ambiente digital é um forte diferencial quando comparado ao marketing tradicional. O marketing feito pela internet tende a ser mais barato, já que ele utiliza estratégias pouco ou nada dispendiosas. Redes sociais por exemplo, podem ser empregados em favor da empresa sem que isso represente um custo adicional.",
                            "Já as estratégias do marketing tradicional, por outro lado, costumam ter alto custo. Anúncios em jornais ou revistas e propagandas em televisão e em rádio são praticamente inviáveis para empreendimentos iniciantes ou de menor porte.",
                          ],
                        },
                        {
                          title: "Adaptação ao Público",
                          content: [
                            "Mesmo que a intenção seja uma, é possível adaptar as campanhas ao seus públicos e à plataforma que será utilizada, alcançando a mais pessoas com um esforço menor. Na internet, há mais espaço para informalidade e adaptações, independentemente do seu público-alvo.",
                          ],
                        },
                        {
                          title: "Resposta do Público",
                          content: [
                            "Outra diferença do marketing digital em relação ao marketing tradicional é que ele permite que a empresa consiga mensurar e aferir com precisão os seus resultados. Na internet, tudo é muito mais fácil de ser medido, os números são entregues pelos próprios site, o que permite interpretar a reação do público àquela estratégia. No ambiente tradicional é mais difícil mensurar a respostas dos consumidores a um anúncio ou a qualquer outro tipo de interação.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColRightContent={<ImageResp src={imagens.nordwood} />}
              />
            </SectionWindowFull>
          )}
        </>
      ))}
    </>
  );
};

export default ModuleOne;
