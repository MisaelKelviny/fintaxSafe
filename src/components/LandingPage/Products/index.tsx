import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'
import token from '../../../../styles/design-tokens'
import Layout from '../Layout'
import ModalSimple from '../Modal'
import SubTitle from '../Subtitle'
import Title from '../Title'
import styles from './styles.module.css'

type DeviceProp = {
  type: string,
  value: string,
  price: number
}

type ProductProp = {
  type: string,
  value: string,
  devices: Array<DeviceProp>
}

const Products = () => {
  const [option, setOption] = useState('')
  const [device, setDevice] = useState('')
  const [devices, setDevices] = useState([
    { type: 'Dispositivos', value: 'INAPTO ARQUIVO (A1)', price: 240.0 },
    { type: 'Dispositivos', value: 'INAPTO CARTÃO (A3)', price: 430.0 },
    { type: 'Dispositivos', value: 'INAPTO CARTÃO E  LEITORA (A3)', price: 430.0 },
    { type: 'Dispositivos', value: 'INAPTO SEM MIDIA (A3)', price: 240.0 },
    { type: 'Dispositivos', value: 'INAPTO TOKEN (A3)', price: 430.0 },
    { type: 'Dispositivos', value: 'ARQUIVO (A1)', price: 240.0 },
    { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)', price: 430.0 },
    { type: 'Dispositivos', value: 'CARTAO (A3)', price: 300.0 },
    { type: 'Dispositivos', value: 'SEM MIDIA (A3)', price: 240.0 },
    { type: 'Dispositivos', value: 'TOKEN (A3)}', price: 430.0 }
  ])
  const [validate, setValidate] = useState('')
  const [atendimento, setAtendimento] = useState('')
  const [aceptTerms, setAceptTerms] = useState(false)
  const [modal, setModal] = useState(false)
  const [terms, setTerms] = useState(false)

  const buy = () => {
    if (aceptTerms && option && device && validate && atendimento) {
      console.log('comprou')
      setModal(true)
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
        {
          type: 'Certificados', value: 'E-CNPJ', devices: [
            { type: 'Dispositivos', value: 'INAPTO ARQUIVO (A1)', price: 240.0 },
            { type: 'Dispositivos', value: 'INAPTO CARTÃO (A3)', price: 430.0 },
            { type: 'Dispositivos', value: 'INAPTO CARTÃO E  LEITORA (A3)', price: 430.0 },
            { type: 'Dispositivos', value: 'INAPTO SEM MIDIA (A3)', price: 240.0 },
            { type: 'Dispositivos', value: 'INAPTO TOKEN (A3)', price: 430.0 },
            { type: 'Dispositivos', value: 'ARQUIVO (A1)', price: 240.0 },
            { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)', price: 430.0 },
            { type: 'Dispositivos', value: 'CARTAO (A3)', price: 300.0 },
            { type: 'Dispositivos', value: 'SEM MIDIA (A3)', price: 240.0 },
            { type: 'Dispositivos', value: 'TOKEN (A3)}', price: 430.0 }
          ],
        },
        {
          type: 'Certificados', value: 'E-CPF', devices: [
            { type: 'Dispositivos', value: 'IRREGULAR NA RFB ARQUIVO (A1)', price: 160.0 },
            { type: 'Dispositivos', value: 'IRREGULAR NA RFB CARTÃO (A3)', price: 225.0 },
            { type: 'Dispositivos', value: 'IRREGULAR NA RFB CARTÃO E LEITORA (A3)', price: 355.0 },
            { type: 'Dispositivos', value: 'IRREGULAR NA RFB SEM MIDIA (A3)', price: 160.0 },
            { type: 'Dispositivos', value: 'IRREGULAR NA RFB TOKEN (A3)', price: 355.0 },
            { type: 'Dispositivos', value: 'ARQUIVO (A1)', price: 170.0 },
            { type: 'Dispositivos', value: 'CARTAO (A3)', price: 225.0 },
            { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)', price: 355.0 },
            { type: 'Dispositivos', value: 'SEM MIDIA (A3)', price: 160.0 },
            { type: 'Dispositivos', value: 'TOKEN (A3)', price: 355.0 }]
        },
        {
          type: 'Certificados', value: 'NF-E / CT-E', devices: [
            { type: 'Dispositivos', value: 'ARQUIVO (A1)', price: 240.0 },
            { type: 'Dispositivos', value: 'CARTAO (A3)', price: 300.0 },
            { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)', price: 430.0 },
            { type: 'Dispositivos', value: 'SEM MIDIA (A3)', price: 240.0 },
            { type: 'Dispositivos', value: 'TOKEN (A3)', price: 430.0 },
          ]
        },
        {
          type: 'Certificados', value: 'E-MED', devices: [
            { type: 'Dispositivos', value: 'CARTAO (A3)', price: 200.0 },
            { type: 'Dispositivos', value: 'e-CNPJ ARQUIVO (A1)', price: 200.0 },
            { type: 'Dispositivos', value: 'e-CPF ARQUIVO (A1)', price: 130.0 },
          ]
        },
        {
          type: 'Certificados', value: 'E-OAB', devices: [
            { type: 'Dispositivos', value: 'CARTAO (A3)', price: 195.0 },
            { type: 'Dispositivos', value: 'CARTAO + LEITORA (A3)', price: 255.0 },
            { type: 'Dispositivos', value: 'SEM MIDIA (A3)', price: 135.0 },
            { type: 'Dispositivos', value: 'TOKEN (A3)', price: 255.0 },
          ]
        },
        {
          type: 'Certificados', value: 'E-MEI', devices: [
            { type: 'Dispositivos', value: 'Arquivo (A1)', price: 150.0 }
          ]
        },
        {
          type: 'Certificados', value: 'NUVEM', devices: [
            { type: 'Dispositivos', value: 'e-CNPJ em Nuvem (A3)', price: 399.0 },
            { type: 'Dispositivos', value: 'e-CPF em Nuvem (A3)', price: 286.0 }
          ]
        }
      ],
      color: token.color.primary,
      option: option,
      set: (e: any) => {
        setOption(e.target.value)
        let chooseDevice: any = []
        cards.forEach((card) => {
          if (card.title === 'Certificados') {
            card.values.forEach((item) => {
              if (item.value === e.target.value) {
                chooseDevice.push({ ...item })
              }
            })
          }
        })

        // console.log(chooseDevice[0]?.devices)

        setDevices(chooseDevice[0]?.devices)
        setDevice(chooseDevice[0]?.devices[0]?.value)
      }
    },
    {
      title: 'Dispositivos',
      values: devices,
      color: token.color.primary,
      option: device,
      set: (e: any) => setDevice(e.target.value)
    },
    {
      title: 'Validade',
      values: [{ type: 'Validade', value: '12 Meses', devices: [] }],
      color: token.color.primary,
      option: validate,
      set: (e: any) => setValidate(e.target.value)
    },
  ]

  const phoneNumberMask = ["(", /[1-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
  const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Por favor preencha o seu nome!'),
    company: Yup.string(),
    email: Yup
      .string()
      .email('Email Inválido!')
      .required('Por favor preencha o seu e-mail!'),
    contact: Yup
      .string()
      .matches(brazilianPhoneRegex, 'Número de telefone não é válido!')
  });

  return (
    <Layout id={'products'}>
      <Title text='Escolha seu certificado digital' align='center' />
      <SubTitle
        align='center'
        text='Entre em contato conosco e solicite e emissão por videoconferência ou presencial.
      Muito mais rapidez e praticidade pra você!'
      />
      <div className={styles.cards}>
        {cards.map((card, index) => {
          return (
            <div
              className={styles.cardsOption}
              key={`${index}_${card.title}`}
              style={{ background: 'black' }}
            >
              <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
              <div>
                {card.values.map(c => {
                  return (
                    <div style={{ margin: '24px 0px' }} key={`${index}_${c.value}`}>
                      <label>
                        <input
                          type='radio'
                          name={c.value}
                          value={c.value}
                          id={c.value}
                          checked={option === c.value || device === c.value || validate === c.value}
                          onChange={card.set}
                        />
                        <span style={{ marginLeft: '10px' }}>{c.value}</span>
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <div className={styles.cardsOption} style={{ background: token.color.four }}>
          <div>
            <h3 style={{ textAlign: 'center' }}>Atendimento</h3>
            <div>
              <div style={{ margin: '24px 0px' }}>
                <label>
                  <input
                    type='radio'
                    name={'presencial'}
                    value={'presencial'}
                    id={'presencial'}
                    checked={atendimento === 'presencial'}
                    onChange={() => setAtendimento('presencial')}
                  />
                  <span style={{ marginLeft: '10px' }}>Presencial</span>
                </label>
              </div>
              <div style={{ margin: '24px 0px' }}>
                <label>
                  <input
                    type='radio'
                    name={'conferencia'}
                    value={'conferencia'}
                    id={'conferencia'}
                    checked={atendimento === 'conferencia'}
                    onChange={() => setAtendimento('conferencia')}
                  />
                  <span style={{ marginLeft: '10px' }}>Video Conferencia</span>
                </label>
              </div>
              <div style={{ margin: '24px 0px' }}>
                <label>
                  <input
                    type='radio'
                    name={'renovação'}
                    value={'renovação'}
                    id={'renovação'}
                    checked={atendimento === 'renovação'}
                    onChange={() => setAtendimento('renovação')}
                  />
                  <span style={{ marginLeft: '10px' }}>Renovação Online</span>
                </label>
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
                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>R${option ? devices.filter(d => d.value === device)[0]?.price : '00'},00</span>
                <small>ou 6x de R${device ? (devices.filter(d => d.value === device)[0]?.price / 6).toFixed(2) : '00,00'}</small>
                <div style={{ marginTop: '20px' }}>
                  <a target='_blank' href='/terms' className={styles.link}>Leia os termos de uso</a>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <label>
                      <input
                        type='checkbox'
                        value={aceptTerms ? 'true' : 'false'}
                        name="accept"
                        checked={aceptTerms}
                        onChange={() => setAceptTerms(!aceptTerms)}
                      />
                      <span style={{ paddingLeft: '10px' }}>Li e Aceito os termos de uso</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className={styles.buyButton} onClick={buy}>Comprar</button>
            </div>
          </div>
        </div>
        <ModalSimple open={modal} setOpen={setModal}>
          <div>
            <div className={styles.titleContainer}>
              <span className={styles.title}>Falta pouco para adquirir o seu certificado digital!</span>
              <span className={styles.subtitle}>Preencha o formulário abaixo para estarmos concluindo esta etapa.</span>
            </div>
            <Formik
              initialValues={{
                name: '',
                company: '',
                email: '',
                contact: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values)
              }}
            >
              {({
                errors,
                touched,
                handleChange,
                handleBlur,
              }) => (
                <Form className={styles.form}>
                  <label className={styles.label}>
                    Nome Completo*
                    <Field name="name" className={styles.input} placeholder="Nome completo" />
                    {errors.name && touched.name ? (
                      <div className={styles.error}>{errors.name}</div>
                    ) : null}
                  </label>
                  <label className={styles.label}>
                    Empresa
                    <Field name="company" className={styles.input} placeholder="Nome ou tipo do seu negócio" />
                    {errors.company && touched.company ? (
                      <div className={styles.error}>{errors.company}</div>
                    ) : null}
                  </label>
                  <label className={styles.label}>
                    E-mail*
                    <Field name="email" type="email" className={styles.input} placeholder="Seu e-mail para o primeiro contato" />
                    {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}
                  </label>
                  <label className={styles.label}>
                    Contato
                    <Field
                      name="contact"
                      render={({ field }: any) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          id="contact"
                          placeholder="Seu número de telefone"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={styles.input}
                        />
                      )}
                    />
                    {errors.contact && touched.contact ? <div className={styles.error}>{errors.contact}</div> : null}
                  </label>
                  <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.submitButton}>Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </ModalSimple>
      </div>
    </Layout>
  )
}

export default Products