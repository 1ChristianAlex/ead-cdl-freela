/* eslint-disable react/jsx-key */
import React, { useRef, useEffect } from "react";
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
} from "../components";
import { imagens, icons } from "../assets";
import { Colors } from "../styles/colors";

const ModuleOne: React.FC = () => {
  return (
    <>
      <Header />
      <SectionWindow bgImage={imagens.estudante}>
        <ModuleTitle
          image={imagens.blobAmareloAzul}
          imageTitle="Modulo 1"
          imageText="Fundamentos do Marketing Digital"
        />
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
          ColRightContent={<Image src={imagens.setaRight} className="vh-100" />}
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
                No marketing tradicional, ou offline, contamos com o{" "}
                <strong>Mix de Marketing</strong>. Trata-se de um conjunto de
                variáveis que precisam ser consideradas quando se comercializa
                um produto ou serviço. Para esse mix devemos considerar os 4Ps
                do Marketing.
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
    </>
  );
};

export default ModuleOne;
