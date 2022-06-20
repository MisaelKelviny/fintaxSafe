import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import bg1 from '../../assets/image/bg1.png'
import bg2 from '../../assets/image/bg2.png'
import bg3 from '../../assets/image/bg3.png'
import bg4 from '../../assets/image/bg4.png'
import business from '../../assets/image/business.jpg'
import logoClaro from '../../assets/image/logo_claro.png'
import token from '../../styles/design-tokens'
import Faq from '../components/LandingPage/FAQ'
import Header from '../components/LandingPage/Header'
import Layout from '../components/LandingPage/Layout'
import SubTitle from '../components/LandingPage/Subtitle'
import Title from '../components/LandingPage/Title'

interface TextProp {
  text?: string,
  isBold?: boolean,
  align?: string
}

interface AttributeProp {
  color?: string
  imgUrl?: string
  reverse?: boolean
}

const Text = styled.p`
  color: ${token.color.terciary};
  text-align: ${(props: TextProp) => props.align};
  
  @media ${token.size.tablet} {
    font-size: 24px;
    line-height: 36px;
    color: ${token.color.terciary}
    text-align: ${(props: TextProp) => props.align};
  }
`

const LinkTerms = styled.a`
  &:hover{
    color: blue;
  }
`

const TemplateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  direction: ${(props: AttributeProp) => props.reverse ? 'rtl' : 'ltr'};
  height: 100%;
  width: 100%;

  @media ${token.size.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const ImageRaw = styled.div`
  width: 100%;
  height: 100%;
  background: url(${business.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0% 10% 0% 0%;
`

const CardsOption = styled.div`
  height: 100%;
  background-color: ${(props: AttributeProp) => props.color};
  padding: 10px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  color: white; 
  
  @media ${token.size.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

`

const BuyButton = styled.button`
  background-color: ${token.color.primary};
  border: 0px solid transparent;
  color: white;
  font-weight: bolder;
  font-size: 16px;
  padding: 16px;
  cursor: pointer;
  width: 100%;
`

const Footer = styled.footer`
  background-color: ${token.color.primary};
  height: 100vh;
  width: 100%;
  padding: 50px 100px 10px 100px;
  margin-top: 100px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media ${token.size.tablet} {
    height: 100%;
  }
`

const benefits = [
  {
    img: bg4,
    title: "Segurança",
    text: `O certificado digital permite que qualquer tipo de documento eletrônico seja assinado com valor jurídico, sem
    que o mesmo corra o risco de ser fraudado ou alterado.`,
    reverse: false,
  },
  {
    img: bg3,
    title: "Praticidade",
    text: `Você pode fazer tudo isso sem sair da empresa o que gera praticidade é a possibilidade de armazenar arquivos na nuvem com o máximo de segurança.`,
    reverse: true,
  },
  {
    img: bg1,
    title: "Redução de Custo",
    text: `A partir do momento em que você começa a utilizar o certificado digital, você não precisa mais se preocupar com a impressão de documentos, gastos com reconhecimento de firma em cartórios e transporte para o envio de arquivo.`,
    reverse: false,
  },
  {
    img: bg2,
    title: "Sustentabilidade",
    text: `Você consegue tornar a sua empresa muito mais sustentável, já que a emissão das notas fiscais eletrônicas, por exemplo, é feita virtualmente, dispensando a utilização de papel.`,
    reverse: true,
  }
]

const Home: NextPage = () => {

  const [option, setOption] = useState('')
  const [device, setDevice] = useState('')
  const [validate, setValidate] = useState('')
  const [atendimento, setAtendimento] = useState('')
  const [aceptTerms, setAceptTerms] = useState(false)

  const buy = () => {
    if (aceptTerms && option && device && validate && atendimento) {
      console.log('comprou')
    } else {
      if (option === '') {
        alert('Está faltando escolher o certificado')
      }
      if (device === '') {
        alert('Está faltando escolher o dispositivo')
      }
      if (validate === '') {
        alert('Está faltando escolher a validade')
      }
      if (atendimento === '') {
        alert('Está faltando escolher a forma de atendimento')
      }
      if (aceptTerms === false) {
        alert('Leia e Aceite os termos de uso antes de efetuar a compra')
      }
    }
  }

  const cards = [
    {
      title: 'Certificados',
      values: [
        { type: 'Certificados', value: 'E-CNPJ' },
        { type: 'Certificados', value: 'E-CPF' },
        { type: 'Certificados', value: 'NF-E / CT-E' },
        { type: 'Certificados', value: 'E-MED' },
        { type: 'Certificados', value: 'E-OAB' },
        { type: 'Certificados', value: 'E-MEI' },
        { type: 'Certificados', value: 'NUVEM' },
        { type: 'Certificados', value: 'ACERTO' }
      ],
      color: token.color.primary,
      option: option,
      set: (e: any) => setOption(e.target.value)
    },
    {
      title: 'Dispositivos',
      values: [
        { type: 'Dispositivos', value: 'INAPTO ARQUIVO (A1)' },
        { type: 'Dispositivos', value: 'INAPTO CARTÃO (A3)' },
        { type: 'Dispositivos', value: 'INAPTO CARTÃO E  LEITORA (A3)' },
        { type: 'Dispositivos', value: 'INAPTO SEM MIDIA (A3)' },
        { type: 'Dispositivos', value: 'INAPTO TOKEN (A3)' },
        { type: 'Dispositivos', value: 'ARQUIVO (A1)' },
        { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)' },
        { type: 'Dispositivos', value: 'CARTAO (A3)' },
        { type: 'Dispositivos', value: 'SEM MIDIA (A3)' },
        { type: 'Dispositivos', value: 'TOKEN (A3)}' }
      ],
      color: token.color.primary,
      option: device,
      set: (e: any) => setDevice(e.target.value)
    },
    {
      title: 'Validade',
      values: [{ type: 'Validade', value: '12 Meses' }],
      color: token.color.primary,
      option: validate,
      set: (e: any) => setValidate(e.target.value)
    },
  ]

  return (
    <div>
      <Header />
      <Layout>
        <Title text='Beneficios do certificado digital' align='center' />
        <SubTitle align='center' text='O Certificado Digital garante, por meio da criptografia de dados,
          autenticidade, confidencialidade, integridade e não repúdio às informações eletrônicas.
          Ou seja, a proteção dos dados é mais que garantida!' />
        {benefits.map((object, index) => {
          return (
            <TemplateRow reverse={object.reverse} key={`${index}_${object.title}`} >
              <div style={{ margin: '0 auto' }}>
                <Image src={object.img} alt="security icon" width={400} height={400} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <h2>{object.title}</h2>
                <Text align="start">
                  {object.text}
                </Text>
              </div>
            </TemplateRow>
          )
        })}
      </Layout>
      <Layout>
        <TemplateRow>
          <div style={{ height: '100%', width: '90%' }}>
            <ImageRaw />
          </div>
          <div>
            <Title text='Solução para diferentes tipos de negócio' />
            <SubTitle text='Tem se tornado cada vez mais presente na realidade de muitos profissionais liberais e empresas.' />
            <ul>
              <li>
                <h2>Advogados</h2>
                <p style={{ color: token.color.primary }}>As práticas processuais com o uso do Certificado Digital têm crescido consideravelmente nos órgãos do Poder Judiciário, sobretudo por promover mais comodidade e facilidade na execução de procedimentos.</p>
              </li>
              <li>
                <h2>Engenharia e Arquitetura</h2>
                <p style={{ color: token.color.primary }}>Assinatura de forma eletrônica de documentos como ART (Anotação de Responsabilidade Técnica) e RRT (Registro de Responsabilidade Técnica) com total segurança e validade jurídica;</p>
              </li>
              <li>
                <h2>Área da Saúde</h2>
                <p style={{ color: token.color.primary }}>Segundo a norma RDC 30/2015 será obrigatório o uso da assinatura digital na emissão de laudos clínicos visando erradicar adulterações.</p>
              </li>
              <li>
                <h2>Influenciador Digital</h2>
                <p style={{ color: token.color.primary }}>Caso o Influencer possua o CNPJ, para transmitir as declarações (variando do regime tributário da empresa). Se o influencer utiliza apenas o CPF como forma de recebimento de cursos, patrocínios e demais serviços, o mesmo deverá pagar o carnê leão todo mês e a anualmente deverá realizar a declaração.</p>
              </li>
            </ul>
          </div>
        </TemplateRow>
      </Layout>
      <Layout>
        <Title text='Escolha seu certificado digital' align='center' />
        <SubTitle
          align='center'
          text='Entre em contato conosco e solicite e emissão por videoconferência ou presencial.
          Muito mais rapidez e praticidade pra você!'
        />
        <Cards>
          {cards.map((card, index) => {
            return (
              <CardsOption key={`${index}_${card.title}`} color={card.color}>
                <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
                <div>
                  {card.values.map(c => {
                    return (
                      <div style={{ margin: '24px 0px' }} key={`${index}_${c.value}`}>
                        <input
                          type='radio'
                          name={c.value}
                          value={c.value}
                          id={c.value}
                          checked={option === c.value || device === c.value || validate === c.value}
                          onChange={card.set}
                        />
                        <span style={{ marginLeft: '10px' }}>{c.value}</span>
                      </div>
                    )
                  })}
                </div>
              </CardsOption>
            )
          })}
          <CardsOption color={token.color.four}>
            <div>
              <h3 style={{ textAlign: 'center' }}>Atendimento</h3>
              <div>
                <div style={{ margin: '24px 0px' }}>
                  <input
                    type='radio'
                    name={'presencial'}
                    value={'presencial'}
                    id={'presencial'}
                    checked={atendimento === 'presencial'}
                    onChange={() => setAtendimento('presencial')}
                  />
                  <span style={{ marginLeft: '10px' }}>Presencial</span>
                </div>
                <div style={{ margin: '24px 0px' }}>
                  <input
                    type='radio'
                    name={'conferencia'}
                    value={'conferencia'}
                    id={'conferencia'}
                    checked={atendimento === 'conferencia'}
                    onChange={() => setAtendimento('conferencia')}
                  />
                  <span style={{ marginLeft: '10px' }}>Video Conferencia</span>
                </div>
                <div style={{ margin: '24px 0px' }}>
                  <input
                    type='radio'
                    name={'renovação'}
                    value={'renovação'}
                    id={'renovação'}
                    checked={atendimento === 'renovação'}
                    onChange={() => setAtendimento('renovação')}
                  />
                  <span style={{ marginLeft: '10px' }}>Renovação Online</span>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ textAlign: 'center' }}>Seu Certificado</h3>
              <div>
                <h4 style={{ color: token.color.primary }}>
                  {option} - {device} - {validate} - {atendimento}
                </h4>
                <div style={{ display: 'grid' }}>
                  <small>Por</small>
                  <span style={{ fontWeight: 'bold', fontSize: '18pxf' }}>R$ 230,00</span>
                  <small>ou 6x de R$ 40,00</small>
                  <div style={{ marginTop: '20px' }}>
                    <LinkTerms href='#' target='_blank'>Leia os termos de uso</LinkTerms>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                      <input
                        type='checkbox'
                        value={aceptTerms ? 'true' : 'false'}
                        name="accept"
                        checked={aceptTerms}
                        onChange={() => setAceptTerms(!aceptTerms)}
                      />
                      <span style={{ paddingLeft: '10px' }}>Li e Aceito os termos de uso</span>
                    </div>
                  </div>
                </div>
                <BuyButton onClick={buy}>Comprar</BuyButton>
              </div>
            </div>
          </CardsOption>
        </Cards>
      </Layout>
      <Layout>
        <Title text={`FAQ's`} />
        <Faq />
      </Layout>
      <Footer>
        <div style={{ display: 'grid', gridTemplateColumns: '12fr', marginBottom: '20px', textAlign: 'center' }}>
          <div>
            <Image src={logoClaro} alt="Logo claro" width='62' height='62' layout='intrinsic' />
            <div style={{ marginTop: '20px' }}>
              Entre em contato conosco e solicite e emissão por videoconferência ou presencial
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: token.color.terciary }}>
          <span>Rua das Ruas, nº 4, Sala 6 - Centro. Pouso Alegre/MG. CEP: 37555-000 Contato: 0800 088 0888 CNPJ: 33.333.333/0003-33</span>
        </div>
      </Footer>
    </div>
  )
}

export default Home
