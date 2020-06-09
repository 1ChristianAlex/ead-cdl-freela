/* eslint-disable react/jsx-key */
import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import {
  SectionWindow,
  SectionWindowFull,
  Header,
  ModuleTitle,
  ContentTwo,
  Text,
  TextConteiner,
  ContentOpacity,
  TitleSection,
  ListDot,
  CardItem,
  ImageText,
  TextBuble,
  SectionBubleFull,
  SectionWindowHaf,
  CarosselText,
} from "../components";
import { imagens, icons } from "../assets";
import { Colors } from "../styles/colors";

const ModuleOne: React.FC = () => {
  return (
    <>
      <Header />
      <SectionWindow bgImage={imagens.estudante}>
        <ModuleTitle image={imagens.blobAmareloAzul} />
      </SectionWindow>
      <SectionWindow className="mt-5">
        <ContentTwo
          colLeft={6}
          colRight={6}
          ColLeftContent={<Image src={imagens.emailSending} fluid />}
          ColRightContent={
            <TextConteiner>
              <Text colors={Colors.darkBlue}>
                Seja bem-vindo ao curso <strong>Marketing Digital</strong>.
                Neste 1º módulo - Fundamentos do Marketing Digital vamos estudar
                os elementos que compõem o marketing digital e suas
                possibilidades. Siga em frente!
              </Text>
            </TextConteiner>
          }
        />
      </SectionWindow>
      <SectionWindowFull bgColor={Colors.darkBlue}>
        <ContentTwo
          colLeft={5}
          colRight={7}
          bgColor={Colors.darkBlue}
          ColLeftContent={<Image src={imagens.taras} className="vh-100" />}
          ColRightContent={
            <TextConteiner
              padding="30px 100px"
              className="h-100"
              bgColor={Colors.darkBlue}
            >
              <Text colors={Colors.white}>
                A <strong>internet</strong> é indispensável para os dias atuais,
                seja para conversar com os amigos, se localizar e, é claro,
                fazer negócios. Para aqueles que querem vender produtos e
                serviços, conhecer o marketing feito a partir do ambiente
                virtual é essencial entender os fundamentos do marketing
                digital, seu diferencial do Marketing convencional e suas
                aplicações no mercado.
              </Text>
            </TextConteiner>
          }
        />
      </SectionWindowFull>
      <SectionWindowFull bgColor={Colors.darkBlue}>
        <ContentTwo
          colLeft={4}
          colRight={8}
          bgColor={Colors.green}
          ColLeftContent={
            <TextConteiner
              className=" h-100"
              bgColor={Colors.green}
              padding="0 40px"
            >
              <Row>
                <Col md={12}>
                  <Text colors={Colors.white}>
                    O objetivo deste módulo é fazer com que o aluno saiba
                    identificar as principais características do marketing feito
                    no <strong>ambiente digital</strong> e faça a relação do seu
                    negócio com esse cenário.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.white}>
                    Além disso, espera-se que o aluno saiba reconhecer os
                    diferentes caminhos que o marketing digital oferece enquanto
                    estratégia de negócios.
                  </Text>
                </Col>
              </Row>
            </TextConteiner>
          }
          ColRightContent={
            <Image src={imagens.setaRight} fluid className="vh-100" />
          }
        />
      </SectionWindowFull>
      <SectionWindowFull bgColor="transparent">
        <ContentOpacity
          bgImage={imagens.alvo}
          colLeft={7}
          colRight={5}
          bgColor="transparent"
          ColRightContent={
            <TextConteiner
              className=" h-100"
              bgColor="transparent"
              padding="0 40px"
            >
              <Row>
                <Col md={12}>
                  <TitleSection>
                    {"Objetivos de aprendizagem".toLocaleUpperCase()}
                  </TitleSection>
                </Col>
                <Col md={12}>
                  <ListDot
                    listItem={[
                      <Text colors={Colors.black}>
                        Entender as características do Marketing Digital.
                      </Text>,
                      <Text colors={Colors.black}>
                        Diferenciar o Marketing online e offline.
                      </Text>,
                      <Text colors={Colors.black}>
                        Identificar ações de Marketing Digital.
                      </Text>,
                    ]}
                  />
                </Col>
              </Row>
            </TextConteiner>
          }
        />
      </SectionWindowFull>
      <SectionWindowFull bgColor="transparent">
        <ContentOpacity
          bgImage={imagens.handsKey}
          colLeft={7}
          colRight={5}
          bgColor="transparent"
          ColRightContent={
            <TextConteiner
              className=" h-100"
              bgColor="transparent"
              padding="0 40px"
            >
              <Row>
                <Col md={12}>
                  <TitleSection>
                    {"O que é marketing digital?".toLocaleUpperCase()}
                  </TitleSection>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.black}>
                    O <strong>Marketing Digital</strong> é o conjunto de
                    atividades que uma empresa (ou pessoa) executa online com o
                    objetivo de atrair novos negócios, criar relacionamentos e
                    desenvolver uma identidade de marca.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.black}>
                    O objetivo do marketing digital é desenvolver estratégias
                    que consigam criar o diálogo entre as empresas e o ambiente
                    virtual.
                  </Text>
                </Col>
              </Row>
            </TextConteiner>
          }
        />
      </SectionWindowFull>
      <SectionWindowFull>
        <Row>
          <Col md={12}>
            <Container className="mt-3 mb-3">
              <Text colors={Colors.darkBlue}>
                No marketing tradicional, ou offline, contamos com o
                <strong> Mix de Marketing</strong>. Trata-se de um conjunto de
                variáveis que precisam ser consideradas quando se comercializa
                um produto ou serviço. Para esse mix devemos considerar os
                <strong> 4Ps</strong> do Marketing.
              </Text>
            </Container>
          </Col>
          <Col md={12}>
            <Container fluid className="pr-5 pl-5 mt-5">
              <Row>
                <Col>
                  <CardItem
                    Icon={icons.trolley}
                    title="Produto"
                    textContent="É aquilo que será comercializado - pode ser um produto físico, palpável ou um serviço."
                  />
                </Col>
                <Col>
                  <CardItem
                    Icon={icons.wallet}
                    title="preço"
                    textContent="O valor no mercado que aquele produto ou serviço será apresentado para o consumidor final."
                  />
                </Col>
                <Col>
                  <CardItem
                    Icon={icons.deliveryTruck}
                    title="praça"
                    textContent="Trata-se da dinâmica de distribuição e venda do produto ou a área em que se abrange o serviço."
                  />
                </Col>
                <Col>
                  <CardItem
                    Icon={icons.tag}
                    title="promoção"
                    textContent="A divulgação do produto/serviço. É como as pessoas serão informadas sobre a existência do produto, como adquirir, seus benefícios e vantagens."
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </SectionWindowFull>
      <SectionWindowFull bgColor={Colors.darkBlue}>
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
              <Row>
                <Col md={12}>
                  <TitleSection color={Colors.white}>
                    {"Os 8ps do marketing".toLocaleUpperCase()}
                  </TitleSection>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.white}>
                    Mas, quando falamos em Marketing Digital, essas variáveis
                    mudam. E se adaptam ao cenário mutante e volátil da
                    internet.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.white}>
                    Passamos então a considerar o Mix de Marketing com 8 Ps, ou
                    seja, 8 variáveis que precisam ser acompanhadas junto ao
                    produto ou serviço a ser trabalhado.
                  </Text>
                </Col>
              </Row>
            </TextConteiner>
          }
          ColRightContent={
            <>
              <ImageText image={imagens.elioSantos}>
                <Text colors={Colors.white}>
                  Passamos então a considerar o{" "}
                  <strong>Mix de Marketing</strong> com 8 Ps, ou seja, 8
                  variáveis que precisam ser acompanhadas junto ao produto ou
                  serviço a ser trabalhado.
                </Text>
              </ImageText>
            </>
          }
        />
      </SectionWindowFull>
      <SectionBubleFull bgImage={imagens.ruiva}>
        <TextBuble
          positionY={60}
          left={-1}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-50"
        >
          A <strong>Produção</strong> é também chamada execução e se trata da
          realização do planejamento. É o momento de tirar as ideas do papel e
          colocá-las em prática.
        </TextBuble>
      </SectionBubleFull>
      <SectionBubleFull bgImage={imagens.cellFacebook}>
        <TextBuble
          positionY={70}
          right={-56}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-50"
        >
          A <strong>Publicação</strong> trabalha os conteúdos nas plataformas
          que serão envolvidas nas ações. As publicações precisam ser relevantes
          para o relacionamento positivo entre as empresas e os consumidores.
        </TextBuble>
      </SectionBubleFull>
      <SectionBubleFull bgImage={imagens.megafone}>
        <TextBuble
          positionY={40}
          right={25}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-50"
        >
          A <strong>Promoção</strong> busca, no ambiente virtual, as melhores
          estratégias para levar a informação até o cliente. Lembrando sempre
          que Promoção, neste contexto vem de Promover, de divulgar o
          produto/serviço. Na <strong>internet</strong> é preciso promover de
          forma criativa, dinâmica e com uma linguagem próxima do usuário.
        </TextBuble>
      </SectionBubleFull>
      <SectionBubleFull bgImage={imagens.planeta}>
        <TextBuble
          positionY={-1}
          right={-38}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-50"
        >
          A <strong>Propagação</strong> busca, principalmente, atingir o
          compartilhamento das informações divulgadas por meio dos próprios
          consumidores.
        </TextBuble>
      </SectionBubleFull>
      <SectionBubleFull bgImage={imagens.pintando}>
        <TextBuble
          positionY={50}
          left={-1}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-50"
        >
          A <strong>Personalização</strong> ajuda a atingir os públicos-alvo de
          maneira mais positiva, já que ela acontece por meio da segmentação. A
          partir da personalização é possível definir as melhores estratégias
          para cada público de forma a atingi-lo da forma mais efetiva dentro do
          ambiente virtual. Como na internet há um bombardeio de informações
          constantes, aquele que enviar a mensagem mais bem direcionada tem mais
          chances de acertar o receptor.
        </TextBuble>
      </SectionBubleFull>
      <SectionBubleFull bgImage={imagens.regua}>
        <TextBuble
          positionY={30}
          left={60}
          color={Colors.black}
          bgColor={Colors.white}
          textClass="w-80"
        >
          A <strong>Precisão</strong> ocorre por meio da mensuração dos
          resultados alcançados. A precisão se faz necessária para corrigir os
          erros e otimizar as atividades positivas. No módulo 5 do curso vamos
          estudar mais sobre a precisão entendendo como funcionam as métricas,
          os resultados e como esses números podem ser trabalhados para atingir
          os públicos-alvo.
        </TextBuble>
      </SectionBubleFull>
      <SectionWindowFull bgColor={Colors.white}>
        <ContentTwo
          colLeft={5}
          colRight={7}
          bgColor={Colors.white}
          ColRightContent={
            <Image src={imagens.womanPc} className="w-100 p-5" />
          }
          ColLeftContent={
            <TextConteiner bgColor="transparent" padding="0 40px">
              <Row>
                <Col md={12}>
                  <TitleSection
                    classTitle="text-left"
                    size={24}
                    color={Colors.darkBlue}
                  >
                    {"Você sabe como se da a mudança no comportamento do consumidor na era digital?".toLocaleUpperCase()}
                  </TitleSection>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.darkBlue} size={24}>
                    No <strong>Marketing Tradicional</strong>, inicia-se a
                    trajetória do cliente conhecendo sua necessidade e a
                    transformando em desejo. Em seguida, o consumidor busca por
                    informações a respeito do produto que ele pretende comprar.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.darkBlue} size={24}>
                    O diferencial do ambiente digital é que{" "}
                    <strong>
                      a opinião de outros consumidores interfere, e muito
                    </strong>
                    , na decisão da compra - usuário busca pela experiência de
                    outros para decidir finalizar a compra.
                  </Text>
                </Col>
              </Row>
            </TextConteiner>
          }
        />
      </SectionWindowFull>
      <SectionWindowHaf bgImage={imagens.creditCard}>
        <TextConteiner bgColor={Colors.darkBlue} padding="30px 40px">
          <Row className="align-content-center align-items-center ">
            <Col md={4}>
              <TitleSection classTitle="text-center" color={Colors.white}>
                <p>COMPRADOR</p>
                <p>X</p>
                <p>CONSUMIDOR</p>
              </TitleSection>
            </Col>
            <Col md={7}>
              <Row>
                <Col md={12}>
                  <Text colors={Colors.white} size={20}>
                    O consumidor busca a opinião de outras pessoas antes de
                    efetivar a compra e que se pode perceber o quanto a
                    interação é o diferencial do marketing digital. E o reflexo
                    direto do momento pós-compra.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.white} size={20}>
                    <strong>
                      A satisfação de um comprador passa a ser fundamental não
                      só porque pretendesse fidelizar esse cliente, mas por ele
                      estar diretamente ligado às compras de outros usuários.
                    </strong>
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </TextConteiner>
      </SectionWindowHaf>
      <SectionWindowFull>
        <Row>
          <Col md={12}>
            <Container className="mt-4 mb-3">
              <TitleSection classTitle="text-center" color={Colors.black}>
                {`Trajetória do Consumidor`.toLocaleUpperCase()}
              </TitleSection>
            </Container>
          </Col>
          <Col md={12}>
            <Container fluid>
              <Row>
                <Col md={6} className="text-center">
                  <Image
                    src={imagens.trajetoria}
                    style={{
                      width: "auto",
                      height: " 65%",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                    fluid
                  />
                </Col>
                <Col md={6} className="text-center">
                  <Image
                    src={imagens.compras}
                    style={{
                      width: "auto",
                      height: "65%",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </SectionWindowFull>
      <SectionWindowFull bgColor={Colors.darkBlue}>
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
          ColRightContent={
            <Image src={imagens.nordwood} className="vh-100 w-100" />
          }
        />
      </SectionWindowFull>
      <SectionWindowFull bgColor={Colors.white}>
        <ContentTwo
          colLeft={6}
          colRight={6}
          bgColor={Colors.white}
          ColLeftContent={<Image src={imagens.celebrating} className="w-100" />}
          ColRightContent={
            <TextConteiner
              bgColor="transparent"
              padding="0 40px"
              className="h-100"
            >
              <Row>
                <Col md={12}>
                  <TitleSection
                    classTitle="text-center"
                    color={Colors.darkBlue}
                    size={55}
                  >
                    {`parabéns!!!`.toLocaleUpperCase()}
                  </TitleSection>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.darkBlue} size={24}>
                    No <strong>Marketing Tradicional</strong>, inicia-se a
                    trajetória do cliente conhecendo sua necessidade e a
                    transformando em desejo. Em seguida, o consumidor busca por
                    informações a respeito do produto que ele pretende comprar.
                  </Text>
                </Col>
                <Col md={12}>
                  <Text colors={Colors.black} size={24}>
                    A avaliação será realizada através da sua participação no
                    fórum de discussão, e/ou atividades no Ambiente de Virtual
                    de Aprendizagem. Serão distribuídos 20 pontos ao longo do
                    módulo, conforme a orientação do tutor.
                  </Text>
                </Col>
              </Row>
            </TextConteiner>
          }
        />
      </SectionWindowFull>
    </>
  );
};

export default ModuleOne;
