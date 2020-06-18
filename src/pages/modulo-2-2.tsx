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
      filter: { absolutePath: { regex: "/modulo-2/aula-2/" } }
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
            !ph.includes("_05") &&
            !ph.includes("_06") &&
            !ph.includes("_07") &&
            !ph.includes("_08") &&
            !ph.includes("_09") &&
            !ph.includes("_10") &&
            !ph.includes("_11") &&
            !ph.includes("_12") &&
            !ph.includes("_13") &&
            !ph.includes("_14") &&
            !ph.includes("_15") && <ImageFullWidth key={index} image={ph} />}
          {ph.includes("_04") && (
            <SectionWindowFull key={index} bgImage={ph} bgColor="transparent">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "INFORMAÇÕES CONTÁBEIS COMO INSTRUMENTO DE GESTÃO",
                          content: [
                            "A contabilidade é um instrumento indispensável dentro da gestão financeira. Por meio dela é possível conseguir informações necessárias para a avaliação do desempenho econômico e financeiro de uma empresa.",
                          ],
                        },
                        {
                          title:
                            "INFORMAÇÕES CONTÁBEIS COMO INSTRUMENTO DE GESTÃO",
                          content: [
                            "É o trabalho constante de examinar dados passados e sustentar as projeções para o futuro. Com a contabilidade, é possível pensar na elaboração e execução de todos os projetos vindouros. E, por fim, realizá-los.",
                          ],
                        },
                        {
                          title:
                            "INFORMAÇÕES CONTÁBEIS COMO INSTRUMENTO DE GESTÃO",
                          content: [
                            "Podemos afirmar que a contabilidade é essencial para: - fornecer informações e sustentar bases para que, uma visão de médio e longo prazo, possa ser construída. A Gestão Financeira, portanto guiará todo o negócio no âmbito “micro gerencial” no dia a dia.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<></>}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_05") && (
            <SectionWindowFull key={index} bgColor="#FF8D45">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "ENTENDENDO AS PRINCIPAIS DEMONSTRAÇÕES FINANCEIRAS",
                          content: [
                            "Vamos agora estudar sobre as demonstrações financeiras produzidas pela contabilidade.",
                            "As demonstrações financeiras trazem as informações resumidas de natureza financeira, econômica e patrimonial de uma empresa, por meio dos dados colhidos pela contabilidade. O seu objetivo é mostrar os principais fatos registrados em determinado período e, assim, gerar informações úteis para tomada de decisão.",
                          ],
                        },
                        {
                          title:
                            "ENTENDENDO AS PRINCIPAIS DEMONSTRAÇÕES FINANCEIRAS",
                          content: [
                            "Dentre as demonstrações financeiras, destacam-se o Balanço Patrimonial (BP) e a Demonstração do Resultado do Exercício (DRE).",
                            "&bull; Balanço Patrimonial;",
                            "&bull; Demonstração do resultado do exercício;",
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
            <SectionWindowFull key={index} bgColor="#23CC6B">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Balanço Patrimonial",
                          content: [
                            "O Balanço Patrimonial reflete a situação financeira da empresa em determinado momento (normalmente no fim do ano). Ele é estático, como uma fotografia da situação patrimonial. O balanço Patrimonial é dividido em três grandes grupos, a saber: ativo, passivo e patrimônio líquido.",
                          ],
                        },
                        {
                          title: "Balanço Patrimonial",
                          content: [
                            "Sua estrutura é formada por duas colunas: à esquerda, fica o ativo, que representa, de forma didática, os bens e direitos de uma entidade. À direita, ficam o passivo (obrigações) e o patrimônio líquido (recursos dos proprietários). Saiba mais sobre balanço patrimonial no material de estudo.",
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
          {ph.includes("_07") && (
            <SectionWindowFull key={index} bgColor="#FF8D45">
              <ContentTwo
                colLeft={5}
                colRight={7}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "ENTENDENDO AS PRINCIPAIS DEMONSTRAÇÕES FINANCEIRAS",
                          content: [
                            "Vamos agora estudar sobre as demonstrações financeiras produzidas pela contabilidade.",
                            "As demonstrações financeiras trazem as informações resumidas de natureza financeira, econômica e patrimonial e dos dados colhidos pela contabilidade. O seu objetivo é mostrar os principais fatos registrados, em determinado período, e assim gerar informações úteis para tomada de decisão.",
                          ],
                        },
                        {
                          title:
                            "ENTENDENDO AS PRINCIPAIS DEMONSTRAÇÕES FINANCEIRAS",
                          content: [
                            "Dentre as demonstrações financeiras, destacam-se o Balanço Patrimonial (BP) e a Demonstração do Resultado do Exercício (DRE). Clique nas caixas em destaque.",
                            "&bull; Balanço Patrimonial;",
                            "&bull; Demonstração do resultado do exercício;",
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
            <SectionWindowFull key={index} bgColor="#23CC6B">
              <ContentTwo
                colLeft={5}
                colRight={7}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Demonstração do Resultado do Exercício",
                          content: [
                            "A demonstração de resultado é um resumo ordenado das receitas e despesas da empresa em um determinado período e, tem como objetivo demonstrar a composição do lucro ou prejuízo de uma instituição.",
                          ],
                        },
                        {
                          title: "Demonstração do Resultado do Exercício",
                          content: [
                            "Saiba mais sobre demonstração do resultado do exercício no material de estudo.",
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
          {ph.includes("_09") && (
            <SectionWindowFull key={index} bgColor={Colors.white}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.black}
                      carouselItem={[
                        {
                          title: "Indicadores de Análise",
                          content: [
                            "O uso de índices constitui-se na técnica empregada com o objetivo de extrair informações fundamentais para tomada de decisão. Um índice isolado dificilmente contribui com informações relevantes para o gestor financeiro, por isso, é importante a análise de um conjunto de indicadores.",
                          ],
                        },
                        {
                          title: "Indicadores de Análise",
                          content: [
                            "Mesmo que se tenha mensurado um conjunto de índices complementares, é necessário efetuar uma comparação temporal e setorial. Os dados básicos para a análise do desempenho econômico-financeiro baseiam-se nos diversos valores e rubricas constantes das demonstrações financeiras.",
                          ],
                        },
                        {
                          title: "Indicadores de Análise",
                          content: [
                            "Os <b>indicadores de liquidez</b> visam medir a capacidade de pagamento (folga financeira) de uma empresa, ou seja, sua habilidade em cumprir corretamente as obrigações passivas assumidas.",
                          ],
                        },
                        {
                          title: "Indicadores de Análise",
                          content: [
                            "A <b>liquidez corrente</b>, refere-se à relação existente entre o ativo circulante e o passivo circulante, ou seja, de $ 1,00 aplicado em bens e direitos circulantes (disponível, valores a receber e estoques, fundamentalmente), a quanto à empresa deve em curto prazo (duplicatas a pagar, dividendos, impostos e contribuições sociais, empréstimos em curto prazo etc.).",
                          ],
                        },
                        {
                          title: "Indicadores de Análise",
                          content: [
                            "Saiba mais sobre os indicadores de análises no material de estudo.",
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
            <SectionWindowFull key={index} bgImage={ph} bgColor="transparent">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Conhecer as terminologias de custos é o caminho para que o gestor financeiro consiga mensurar de forma eficaz os elementos que compões seus gastos. Dessa forma, conseguem contribuir com melhoria de processos e, consequente, maximizar os resultados da instituição.",
                          ],
                        },
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Essas terminologias indicam como é composto o valor de seus produtos e serviços. A partir disso, uma análise irá definir se vale ou não a pena produzir determinado produto, se um modelo de negócio funcionará e o que precisa ser melhorado (quais itens) para que a empresa se torne mais eficiente.",
                          ],
                        },
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Veja a seguir as principais terminologias na gestão de custos.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<></>}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_10") && (
            <SectionWindowFull key={index} bgImage={ph} bgColor="transparent">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Conhecer as terminologias de custos é o caminho para que o gestor financeiro consiga mensurar de forma eficaz os elementos que compões seus gastos. Dessa forma, conseguem contribuir com melhoria de processos e, consequente, maximizar os resultados da instituição.",
                          ],
                        },
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Essas terminologias indicam como é composto o valor de seus produtos e serviços. A partir disso, uma análise irá definir se vale ou não a pena produzir determinado produto, se um modelo de negócio funcionará e o que precisa ser melhorado (quais itens) para que a empresa se torne mais eficiente.",
                          ],
                        },
                        {
                          title: "ENTENDENDO A GESTÃO DE CUSTOS",
                          content: [
                            "Veja a seguir as principais terminologias na gestão de custos.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<></>}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_11") && (
            <SectionWindowFull key={index} bgImage={ph} bgColor="transparent">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className=" h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          content: [
                            "<b>Gasto:</b> é uma saída financeira com a qual a organização arca para obter um produto ou serviço qualquer. É representado pela entrega ou promessa de entrega de ativos, normalmente dinheiro. Exemplos: gasto com mão de obra e gasto com compra de matéria-prima.",
                          ],
                        },
                        {
                          content: [
                            "<b>Investimento:</b> Corresponde ao gasto com aquisição de bens e direitos na qual a empresa possui expectativa de ganhos futuros. Exemplos: compra de maquinário (investimento permanente) e compra de matéria-prima (investimento circulante).",
                          ],
                        },
                        {
                          content: [
                            "<b>Custo</b>: é um gasto relacionado a um bem ou serviço utilizado para produzir outros bens ou serviços. Os custos têm subdivisões",
                            "<b>Fixos</b> (aqueles que não alteram em relação ao volume produzido: aluguel da fábrica, por exemplo);",
                          ],
                        },
                        {
                          content: [
                            "<b>Variáveis</b> (aqueles que alteram de acordo com o volume de produção:consumo de matéria prima, por exemplo). Eles também são classificados como:",
                            "<b>Diretos</b> (aqueles que estão alocados diretamente no produto: matéria prima, por exemplo) e",
                          ],
                        },
                        {
                          content: [
                            "<b>Indiretos</b> (aqueles que estão alocados nos produtos de forma indireta ou através de rateio: depreciação, aluguel, por exemplo).",
                          ],
                        },
                        {
                          content: [
                            "<b>Despesa</b>: é o bem ou serviço consumido de forma direta ou indireta para se obter receitas, seja com vendas ou administrativamente. Também pode ser:",
                            "<b>Variável</b> (altera em relação ao volume de venda: comissão sobre venda, por exemplo);",
                            "<b>Fixa</b> (não altera em relação ao volume de venda: salário do pessoal administrativos, por exemplo).",
                          ],
                        },
                        {
                          content: [
                            "<b>Desembolso</b>: é o pagamento relacionado à aquisição do bem ou serviço.",
                          ],
                        },
                        {
                          content: [
                            "<b>Perda</b>: bem ou serviço consumidos de forma anormal e involuntária: perdas com incêndios, por exemplo.",
                          ],
                        },
                        {
                          content: [
                            "<b>Perda</b>: bem ou serviço consumidos de forma anormal e involuntária: perdas com incêndios, por exemplo.",
                          ],
                        },
                        {
                          content: [
                            "<b>Perda</b>: bem ou serviço consumidos de forma anormal e involuntária: perdas com incêndios, por exemplo.",
                          ],
                        },
                        {
                          title: "Saiba Mais",
                          content: [
                            " A terminologia exige cuidado e atenção pois muitos elementos mudam de definição conforme o processo. O gasto com mão-de-obra, por exemplo, é um custo de produção. No entanto, se ocorre uma greve e a organização precisa contratar mão de obra externa para continuar com a produção, esse gasto será identificado como perda.",
                          ],
                        },
                      ]}
                    />
                  </TextConteiner>
                }
                ColLeftContent={<></>}
              />
            </SectionWindowFull>
          )}
          {ph.includes("_12") && (
            <SectionWindowFull key={index} bgColor="#FFFFFF">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColLeftContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.black}
                      carouselItem={[
                        {
                          title:
                            "ANÁLISE DA MARGEM DE CONTRIBUIÇÃO E DO PONTO DE EQUILÍBRIO",
                          content: [
                            "Os produtos (fabricados e vendidos ) e os serviços ao serem prestados geram custos e despesas. Assim, há custos e despesas que ocorrem em virtude da produção e da venda: são os custos e as despesas variáveis.",
                          ],
                        },
                        {
                          title:
                            "ANÁLISE DA MARGEM DE CONTRIBUIÇÃO E DO PONTO DE EQUILÍBRIO",
                          content: [
                            "Entende-se por margem a diferença entre o preço de venda líquido (livre dos impostos) e a soma das despesas e custos variáveis de um produto ou serviço. A Margem de Contribuição é, em outras palavras, a “sobra financeira” de cada produto de uma empresa para a recuperação – ou amortização – das despesas e dos custos fixos.",
                          ],
                        },
                        {
                          title:
                            "ANÁLISE DA MARGEM DE CONTRIBUIÇÃO E DO PONTO DE EQUILÍBRIO",
                          content: [
                            "É possível conhecer quanto determinado produto ou serviço contribui para o pagamento dos gastos fixos e para a geração de lucro. A empresa só começa a ter lucro quando a margem de contribuição total dos produtos vendidos superar os custos e despesas fixas do período.",
                          ],
                        },
                        {
                          title:
                            "ANÁLISE DA MARGEM DE CONTRIBUIÇÃO E DO PONTO DE EQUILÍBRIO",
                          content: [
                            "A margem de contribuição resulta do seguinte cálculo: <br>MC = PV – (CONVERSA + DV) :<br> MC = Margem de Contribuição;<br> PV = Preço de Venda;<br> CONVERSA = Custo variável;<br> DV = Despesa Variável.",
                          ],
                        },
                        {
                          title:
                            "ANÁLISE DA MARGEM DE CONTRIBUIÇÃO E DO PONTO DE EQUILÍBRIO",
                          content: [
                            "Saiba mais análise da margem de contribuição e do ponto de equilíbrio no material de estudo.",
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
          {ph.includes("_13") && (
            <SectionWindowFull key={index} bgColor="#23CC6B">
              <ContentTwo
                colLeft={5}
                colRight={7}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title:
                            "PONTO DE EQUILÍBRIO E A ANÁLISE CUSTO X VOLUME X LUCRO",
                          content: [
                            "O ponto de equilíbrio, onde o resultado operacional se anula, é denominado ponto de equilíbrio contábil, uma vez que é baseado no lucro contábil igual à zero, ou seja, o ponto de equilíbrio contábil corresponde ao volume de vendas que uma empresa precisa operar para tornar seu lucro igual à zero.",
                          ],
                        },
                        {
                          title:
                            "PONTO DE EQUILÍBRIO E A ANÁLISE CUSTO X VOLUME X LUCRO",
                          content: [
                            "Porém, toda empresa persegue um lucro mínimo, que compense o investimento realizado.",
                          ],
                        },
                        {
                          title:
                            "PONTO DE EQUILÍBRIO E A ANÁLISE CUSTO X VOLUME X LUCRO",
                          content: [
                            "O nível de venda que e a empresa precisa ter para obter o lucro mínimo desejado, pode ser encontrado no ponto de equilíbrio econômico.",
                          ],
                        },
                        {
                          title:
                            "PONTO DE EQUILÍBRIO E A ANÁLISE CUSTO X VOLUME X LUCRO",
                          content: [
                            "Também ocorre de, nem sempre, os custos e despesas fixos serem desembolsáveis, como é o caso das depreciações.",
                          ],
                        },
                        {
                          title:
                            "PONTO DE EQUILÍBRIO E A ANÁLISE CUSTO X VOLUME X LUCRO",
                          content: [
                            "Assim, uma empresa pode saber qual o volume de venda necessário para que a empresa tenha condições de arcar com os gastos desembolsáveis, mesmo operando em prejuízo (abaixo do ponto de equilíbrio contábil) Tem-se aí o ponto de equilíbrio financeiro.",
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
            <SectionWindowFull key={index} bgColor="#6C63FF">
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColLeftContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.white}
                      carouselItem={[
                        {
                          title: "Alavancagem e Alavancagem Operacional",
                          content: [
                            "Alavancagem é uma estratégia que as empresas utilizam na busca de maximizar seus resultados. Refere-se ao uso de ativos operacionais e financeiros visando aumentar o resultado da empresa. Dessa forma, a alavancagem pode ser <b>Operacional</b> ou <b>Financeira.</b>",
                          ],
                        },
                        {
                          title: "Alavancagem e Alavancagem Operacional",
                          content: [
                            "<b>Vamos agora estudar sobre alavancagem operacional.</b>",
                            "A alavancagem operacional indica a capacidade de a empresa aumentar seus lucros com acréscimos de vendas e com apoio em determinado nível de gastos fixos.",
                          ],
                        },
                        {
                          title:
                            "Veja como podemos estimar a alavancagem operacional nas finanças corporativa.",
                          content: [
                            "Uma forma de estimar a alavancagem operacional em finanças corporativas é pelo Grau de Alavancagem Operacional (GAO), que pode ser calculado dividindo a variação percentual do lucro operacional pela variação percentual das vendas.",
                          ],
                        },
                        {
                          title: "Alavancagem e Alavancagem Operacional",
                          content: [
                            "ara exemplificar a equação do GAO, digamos que em uma determinada empresa com uma variação percentual nas Receitas e 20% de um ano para o outro o gestor consiga um aumento de 40% no Lucro operacional durante o mesmo período. Neste exemplo o GAO será igual a 2.",
                          ],
                        },
                        {
                          title: "Alavancagem e Alavancagem Operacional",
                          content: [
                            "Isso significa que para cada 1% de aumento nas vendas, o lucro operacional aumenta 2% com a manutenção dos gastos operacionais fixos.",
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
          {ph.includes("_15") && (
            <SectionWindowFull key={index} bgColor={Colors.white}>
              <ContentTwo
                colLeft={6}
                colRight={6}
                bgColor="transparent"
                ColRightContent={
                  <TextConteiner
                    className="h-100"
                    bgColor="transparent"
                    padding="0 40px"
                  >
                    <CarosselText
                      color={Colors.black}
                      carouselItem={[
                        {
                          title: "Alavancagem Financeira",
                          content: [
                            "<b>Vamos agora estudar sobre alavancagem financeira.</b>",
                            "Alavancagem Financeira: é a utilização de recursos de terceiros em sua estrutura de capital. Uma empresa pode modificar a rentabilidade do capital próprio.",
                          ],
                        },
                        {
                          title: "Alavancagem Financeira",
                          content: [
                            "Uma forma de mensurar a alavancagem financeira é pelo Grau de Alavancagem Financeira (GAF), o qual pode ser calculado com a divisão da variação percentual do lucro líquido de um período para o outro, pela variação percentual do lucro operacional nesse mesmo período.",
                          ],
                        },
                        {
                          title: "Alavancagem Financeira",
                          content: [
                            "Vamos imaginar que uma determinada empresa obteve uma variação de 20% no lucro operacional, ou seja, foi capaz de aumentar 33% seu lucro líquido. Nesse caso teremos um GAF de 1,67.",
                          ],
                        },
                        {
                          title: "Alavancagem Financeira",
                          content: [
                            "Isso significa que, para cada 1% de aumento no lucro operacional, a empresa teve 1,76% de aumento no lucro líquido, considerando o volume de encargos financeiros fixos para custear sua operação.",
                          ],
                        },
                        {
                          title: "Alavancagem Financeira",
                          content: [
                            "A ideia central para estimar a alavancagem financeira é perceber a mudança que ocorre no lucro líquido para cada alteração no lucro operacional.",
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
