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
      filter: { absolutePath: { regex: "/modulo-2/aula-1/" } }
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
          {!ph.includes("_04") &&
            !ph.includes("_06") &&
            !ph.includes("_07") &&
            !ph.includes("_08") &&
            !ph.includes("_09") &&
            !ph.includes("_10") &&
            !ph.includes("_11") &&
            !ph.includes("_12") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_04") && (
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
                          title: "ENTENDENDO AS FINANÇAS DAS EMPRESAS",
                          content: [
                            "Como praticamente toda ciência, as finanças corporativas incorporam em seu escopo as grandes evoluções do mundo contemporâneo. Você quer saber como?",
                          ],
                        },
                        {
                          title: "ENTENDENDO AS FINANÇAS DAS EMPRESAS",
                          content: [
                            "Seus métodos de avaliação conceitual assumiram um caráter bem mais abrangente, elevando sua importância para as empresas. Deste modo, observamos que finanças têm ligações com as decisões em que o administrador financeiro está envolvido, e no que requisito dinheiro que interfere no crescimento das empresas.",
                          ],
                        },
                        {
                          title: "ENTENDENDO AS FINANÇAS DAS EMPRESAS",
                          content: [
                            "A administração financeira envolve-se tanto com a problemática da escassez de recursos, quanto à realidade operacional e prática da gestão financeira das empresas, assumindo assim uma definição de maior amplitude.",
                          ],
                        },
                        {
                          title: "ENTENDENDO AS FINANÇAS DAS EMPRESAS",
                          content: [
                            "Diante deste cenário, exige do administrador uma necessidade maior de visualizar toda a empresa, realçando suas estratégias de competitividade, continuidade e crescimento futuro.",
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
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "As decisões financeiras são tomadas pelas empresas de forma contínua e inevitável. A decisão de investimento, considerada como a mais importante de todas, envolve todo o processo de identificação, avaliação e seleção das alternativas de aplicações de recursos na expectativa de se auferirem benefícios econômicos futuros.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Por não se ter certeza da realização futura de lucros, a decisão de investimento envolve risco, devendo ser avaliada em termos da relação risco-retorno. As decisões de investimento têm por objetivo criar valor.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Todo investimento mostra-se economicamente atraente quando o seu retorno esperado exceder a taxa de retorno exigida pelos proprietários de capital (credores e acionistas), ou seja, ao custo total do capital.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "As decisões de financiamento, por outro lado, preocupam-se principalmente com a escolha das melhores fontes de financiamento e a melhor proporção a ser mantida entre capital de terceiros (dívidas) e capital próprio.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "O objetivo central dessa decisão envolve a determinação da melhor estrutura de financiamento da empresa, de maneira a preservar sua capacidade de pagamento (viabilidade financeira) e dispor de fundos com custos reduzidos em relação ao retorno que se espera apurar de suas aplicações (viabilidade econômica).",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Cabe ainda o estabelecimento de políticas que envolvem a distribuição do lucro líquido da empresa, conhecida por decisão de dividendos, estabelecendo métricas para distribuição de resultados aos investidores e/ou retenção para financiamento de outros investimentos.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Na prática, as empresas têm a sua disposição diversas fontes de financiamentos, como fornecedores, instituições financeiras, acionistas etc., às quais apresentam diferentes condições de custos, sistemas de amortizações, prazos de pagamentos e garantias exigidas.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Essas condições devem ser combinadas de forma a adequar o passivo às características de rentabilidade e liquidez das aplicações desses recursos.",
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
          {ph.includes("_07") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#237BED"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#237BED"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Vamos discutir como é feita a definição do processo de seleção das decisões financeiras.",
                            "No processo de seleção das decisões financeiras, a empresa deve delinear seu objetivo a perseguir, de maneira que essas decisões sejam tomadas ,segundo critério mais racional.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "A definição de seu objetivo , deve ainda, permitir que as empresas possam avaliar os vários resultados provenientes das decisões financeiras tomadas, o que não é tarefa fácil, requerendo algumas reflexões diante de seu caráter controvertido e, muitas vezes, complexo.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Conheça agora o objetivo da empresa.",
                            "Na economia de mercado, as empresas são atraídas fundamentalmente pelas possibilidades de lucros, e seus preços de venda são regidos livremente, segundo comportamento de oferta e procura dos bens e serviços.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Dessa forma, sugere- se que o objetivo da empresa deve estar voltado para a satisfação do retorno exigido por seus proprietários ou por algum parâmetro de desempenho mais abrangente, que incorpora o bem-estar de toda a sociedade.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Conheça como as empresas criam valor.",
                            "Uma empresa somente cria valor, se o retorno do capital investido em sua atividade exceder o custo de suas fontes de financiamento.",
                          ],
                        },
                        {
                          title:
                            "DINâMICA DAS DECISÕES FINANCEIRAS E O DILEMA RISCO X RETORNO",
                          content: [
                            "Ao tomar decisões de investimentos que promovam esse diferencial economicamente favorável, a empresa passa a promover um aumento de seu valor agregado, revelando uma atraente aplicação de seus recursos.",
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
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "ANÁLISE DE VIABILIDADE ECONÔMICO-FINANCEIRA",
                          content: [
                            "Uma fase muito importante nas decisões financeiras consiste na utilização de métodos de avaliação econômica, com o objetivo de se apurar os resultados e atratividade das aplicações de capital. As propostas de investimentos, para serem aceitas, devem oferecer um retorno mínimo definido pela empresa e/ou pelo investidor.",
                          ],
                        },
                        {
                          title: "ANÁLISE DE VIABILIDADE ECONÔMICO-FINANCEIRA",
                          content: [
                            "A decisão de aceitar ou rejeitar determinado investimento consiste em selecionar propostas que atendam ao critério mínimo de retorno estabelecido.",
                          ],
                        },
                        {
                          title: "ANÁLISE DE VIABILIDADE ECONÔMICO-FINANCEIRA",
                          content: [
                            "As propostas de investimentos aceitáveis podem ser classificadas, ainda segundo alguma medida estabelecida pela empresa, como rentabilidade, riqueza criada etc. A de melhor resultado é classificada em primeiro lugar, seguida das demais, até atingir a de mais baixo resultado em último.",
                          ],
                        },
                        {
                          title: "ANÁLISE DE VIABILIDADE ECONÔMICO-FINANCEIRA",
                          content: [
                            "Avaliação como Valor Presente Líquido, Taxa Interna de Retorno, Playback e Playback descontado são de extrema importância para que a decisão de investimento seja feita de forma mais assertiva.",
                          ],
                        },
                        {
                          title: "ANÁLISE DE VIABILIDADE ECONÔMICO-FINANCEIRA",
                          content: [
                            "Vamos discutir como é feita a definição do processo de seleção das decisões financeiras.",
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
                bgColor="#FF8D45"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#FF8D45"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Análise de Riscos",
                          content: [
                            "É importante que se destaque, ainda, o risco associado às decisões financeiras tomadas pelas empresas, o qual pode ser identificado segundo a natureza da decisão tomada. Clique no destaque.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "<strong>Risco Econômico (Operacional)<strong>",
                            "Inerente à própria atividade da empresa e às características do mercado em que opera. Esse risco independe da forma como a empresa é financiada, restringindo-se exclusivamente às decisões de investimentos (ativos). Alguns exemplos:",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "<strong>Risco Econômico (Operacional)<strong>",
                            "&bull; Sazonalidade de mercado;",
                            "&bull; Tecnologia;",
                            "&bull; Concorrência;",
                            "&bull; Estrutura de custos mantida pela empresa;",
                            "&bull; Qualidade dos produtos negociados;",
                            "&bull; Variações nas taxas de juros de mercado etc.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "É importante destacar o risco associado às decisões financeiras tomadas pelas empresas, o qual pode ser identificado segundo a natureza da decisão tomada. Clique no destaque.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "Reflete o risco associado às decisões de financiamento, ou seja, a capacidade da empresa em liquidar seus compromissos financeiros assumidos.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "Empresas com reduzido nível de endividamento apresentam baixo nível de risco financeiro; altos níveis de endividamento. Por outro lado, ao mesmo tempo em que podem promover maior capacidade de alavancar os resultados, denotam também maior risco financeiro.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "É importante que se destaque, ainda, o risco associado às decisões financeiras tomadas pelas empresas, o qual pode ser identificado segundo a natureza da decisão tomada. Clique no destaque.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "Saiba Mais",
                            "Os desempenhos desses dois componentes de risco afeta evidentemente, o risco total da empresa e o seu valor de mercado. Esses riscos não são tratados de forma independente, pois uma decisão financeira tende a afetar a outra.",
                          ],
                        },
                        {
                          title: "Análise de Riscos",
                          content: [
                            "Saiba Mais",
                            "Em termos práticos, a administração financeira preocupa-se com o equilíbrio na relação risco-retorno de suas decisões, alcançando a máxima rentabilidade associada a um nível de risco que promova a maximização do valor de mercado da empresa.",
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
          {ph.includes("_10") && (
            <SectionWindowFull key={index} bgColor={Colors.darkBlue}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="#6C63FF"
                ColLeftContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="#6C63FF"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Ambiente financeiro brasileiro",
                          content: [
                            "Como isso funciona na realidade brasileira ?",
                            "Na realidade brasileira, as decisões financeiras em condições ideais de equilíbrio são bastante prejudicadas pela persistente insuficiência de recursos em longo prazo para as empresas.",
                          ],
                        },
                        {
                          title: "Ambiente financeiro brasileiro",
                          content: [
                            "Como isso funciona na realidade brasileira ?",
                            "Basicamente, os recursos oficiais são as grandes fontes de capital permanente e, mesmo assim, em volume bastante aquém das efetivas necessidades de mercado.",
                          ],
                        },
                        {
                          title: "Ambiente financeiro brasileiro",
                          content: [
                            "Como isso funciona na realidade brasileira ?",
                            "As linhas de crédito oficiais são limitadas e geralmente direcionadas a programas específicos, atendendo a um número reduzido de empresas.",
                          ],
                        },
                        {
                          title: "Ambiente financeiro brasileiro",
                          content: [
                            "Como isso funciona na realidade brasileira ?",
                            "Não há, na economia brasileira, poupança a longo prazo em volume suficiente que permita às instituições financeiras financiarem investimentos de maior maturidade das empresas.",
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
          {ph.includes("_11") && (
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
                          title: "Custo de Capital",
                          content: [
                            "Custo de capital diz respeito ao custo dos recursos necessários para realizar investimentos empresariais, certo?",
                            "Todas as empresas, pequenas, médias ou grandes companhias, necessitam de capital para realizarem seus investimentos. Esse custo refere-se a remuneração do capital do empresário ou pagamento de juros ao banco.",
                          ],
                        },
                        {
                          title: "Custo de Capital",
                          content: [
                            "Portanto, o custo de capital afeta diretamente a vida de todas as pessoas, pois a economia, como um todo, é impactada pelas decisões e pelos investimentos empresariais, que geram empregos , riquezas e beneficiam toda sociedade.",
                          ],
                        },
                        {
                          title: "Custo de Capital",
                          content: [
                            "Assim, o custo de capital também poderá ser entendido como o custo dos recursos captado no mercado para financiamento da empresa. Em outros momentos será o retorno mínimo que o investidor exigirá, para investir recursos por ele disponível nas organizações a uma taxa mínima, para fazer um aporte de capital no negócio.",
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
                          title: "CONHECENDO O MERCADO DE CAPITAIS",
                          content: [
                            "O mercado de capitais é um sistema que proporciona a distribuição de valores mobiliários para que empresas possam viabilizar a sua capitalização por meio da liquidação dos títulos emitidos por elas.",
                          ],
                        },
                        {
                          title: "CONHECENDO O MERCADO DE CAPITAIS",
                          content: [
                            "Um dos objetivos para o funcionamento do mercado de capitais é a disponibilização de recursos financeiros para a indústria e comércios e outras atividades econômicas.",
                          ],
                        },
                        {
                          title: "CONHECENDO O MERCADO DE CAPITAIS",
                          content: [
                            "A negociação de ações é o exemplo mais conhecido no mercado de capitais. É através da Bolsa de Valores que se permite aos investidores a aquisição de ativos das empresas listadas e, consequentemente, a movimentação de capital para custear o desenvolvimento econômico.",
                          ],
                        },
                        {
                          title: "CONHECENDO O MERCADO DE CAPITAIS",
                          content: [
                            "Conforme as empresas se desenvolvem é necessário ter acesso a mais recursos, havendo assim 3 meios para conseguir financiar suas atividades, a saber, o empréstimo de terceiros, reinvestimentos de lucros e participação de acionistas.",
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

export default ModuleFive;
