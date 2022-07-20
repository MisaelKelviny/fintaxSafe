import { useState } from 'react'
import Layout from '../Layout'
import Title from '../Title'
import styles from './styles.module.css'

type BackgroundColorPropos = {
  isOpen: boolean
}

const faqs = [
  {
    title: 'O que é PUK e PIN?',
    awnser: 'Quando uma pessoa Adquire um certificado digital A3, nos formatos de cartão - smart card - ou token criptográfico, ela também recebe duas informações importantes: o pin e o puk /n/n  - O pin (personal identification number ou, em português, número pessoal de identificação) representa uma senha pessoal para acessar o certificado digital. Já o Puk (pin unlock key, em português, chave de desbloqueio do pin) trata-se de um código que deve ser utilizado para desbloquear o certificado digital quando, por algum motivo, o pin estiver bloqueado. Dessa forma, é importante manter sempre com você os seus códigos pin e puk, juntamente com a sua midia externa, para que a sua identidade eletrônica esteja protegedia e segura.',
    id: '1'
  },
  {
    title: 'Como o Certificado Digital pode ajudar minha empresa na LGPD?',
    awnser: `Na prática, a LGPD visa garantir mais segurança aos dados dos titulares concedidos para uma empresa.

    A importância dessa fiscalização, no entanto, se dá em um contexto em que há cada vez mais troca de informações, principalmente em ambiente virtual.
    O problema é que com esse grande volume de dados circulando na rede, aumentam os riscos de violação e roubo dessas informações por terceiros.
    Diante disso, é necessário procurar por ferramentas que ajudem a evitar ataques e garantam a sua segurança.
    
    O certificado digital, por sua vez, cumpre bem essa função.Ele permite que as transações eletrônicas e as trocas de dados em ambiente virtual sejam realizadas de forma segura e com autenticidade.
    
    Toda essa vantagem se deve à criptografia, tecnologia presente na ferramenta, que permite que as informações contidas nela permaneçam protegidas, à prova de qualquer interferência de terceiros.
    Somente usuários com as chaves criptográficas podem decifrar e acessá - las.
    Além disso, o certificado digital auxilia no controle de acesso às informações pessoais dos clientes, ou seja, é possível identificar quais colaboradores têm contato com esses dados cobertos pela LGPD, o que evita problemas com desvios e fraudes.`,
    id: '2'
  },
  {
    title: 'Como Integrar com o App do Gov.br?',
    awnser: `A conta gov.br é gratuita e tem três níveis de segurança:

    Bronze para acessar serviços digitais menos sensíveis;
    Prata para acessar grande parte dos serviços digitais;
    e ouro que libera o acesso a qualquer serviço digital.
    A restrição de acesso também já foi aplicada para outros serviços do governo federal, como a Central de Atendimento ao Contribuinte(e - CAC), resgate de valores esquecidos em bancos por meio do Sistema Valores a Receber, além da declaração pré - preenchida do Imposto de Renda.
    
    Contas gov.br
    
    São consideradas de nível bronze as contas cadastradas, exclusivamente, com dados do CPF ou INSS do usuário.O mesmo vale para o registro feito presencialmente nas unidades do Instituto Nacional do Seguro Social(INSS) ou Denatran.
    
    Por outro lado, as contas autenticadas por biometria facial da carteira de motorista(CNH), dados bancários(internet banking ou banco credenciado) ou cadastro SIGEPE(servidores públicos) passam a ter nível prata de segurança.

Já as contas validadas pela biometria facial da Justiça Eleitoral ou por certificado digital compatível com ICP - Brasil têm nível ouro de segurança.`,
    id: '3'
  },
  {
    title: 'Seguro desemprego com certificado digital?',
    awnser: `No contexto atual, cada vez mais se percebe o empenho dos Poderes Públicos e das instituições privadas em difundir o uso da Certificação Digital.

    A tecnologia — que no passado era restrita às grandes organizações e a uma quantidade limitada de possibilidades — hoje é amplamente utilizada, estando acessível a profissionais, empresas e cidadãos comuns sem qualquer dificuldade.
    
    Essa realidade, sem dúvida, está intimamente relacionada com a transformação digital e com o uso crescente das plataformas online para a realização dos mais diferentes serviços.
    
    No entanto, ela também é fruto de uma série de vantagens que o Certificado Digital foi capaz de gerar, encurtando distâncias, simplificando relações e aumentando a segurança na transmissão de dados via internet.`,
    id: '4'
  },
  {
    title: 'Preenchimento automatico do imposto de renda?',
    awnser: `Contribuintes já podem utilizar a funcionalidade de pré - preenchimento da declaração do Imposto de Renda, desenvolvida pelo Serpro para a Receita Federal, desde a última segunda - feira, 14 / 03.A facilidade está disponível, em todas as plataformas digitais do IRPF, para pessoas que possuem certificado digital e conta nível ouro ou prata na plataforma gov.br.Com a funcionalidade, é possível recuperar os dados preenchidos na declaração do ano anterior e o contribuinte tem menos chance de errar o preenchimento e cair na malha fina.
    `,
    id: '5'
  }
]

export default function Faq() {
  const [open, setOpen] = useState(false)
  const [choose, setChoose] = useState('')

  const handleOpen = (id: string) => {
    setChoose(id)
    setOpen(!open)

    console.log(choose)
    console.log(open && choose === id)
  }

  return (
    <Layout id={'Faq'}>
      <Title text={`FAQ's`} />
      <div id={'faq'}>
        {faqs.map((f, i) => {
          return (
            <div
              key={f.id}
              onClick={() => handleOpen(f.id)}
              className={styles.container}
            >
              <div className={styles.containerHeader}>
                {f.title}
              </div>
              <div
                className={styles.backgroundColor}
                style={{ display: open && f.id === choose ? 'block' : 'none' }}
              >
                {f.awnser}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

