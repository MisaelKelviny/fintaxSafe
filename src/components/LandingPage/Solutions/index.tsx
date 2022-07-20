import Image from 'next/image';
import token from '../../../../styles/design-tokens';
import Layout from '../Layout';
import globalStyle from '../styles.module.css';
import SubTitle from '../Subtitle';
import Title from '../Title';
import styles from './styles.module.css';

const Solutions = () => {
  return (
    <Layout id={'solutions'}>
        <div className={globalStyle.templateRow}>
          <div style={{ height: '100%', width: '90%', display: 'block' }}>
            <div className={styles.imageRow}>
              <Image
                src={'/image/business.jpg'}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt={'Image of business man'}
                priority />
            </div>
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
        </div>
      </Layout>
  )
}

export default Solutions 