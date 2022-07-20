import Image from "next/image";
import { benefits } from "../../../data/constants/benefits";
import Layout from "../Layout";
import globalStyle from '../styles.module.css';
import SubTitle from "../Subtitle";
import Title from "../Title";
import styles from './styles.module.css';

const Benefits = () => {
  return (
    <Layout id={'benefits'}>
      <Title isBold={false} text='Beneficios do certificado digital' align={'center'} />
      <SubTitle align={'center'} text='O Certificado Digital garante, por meio da criptografia de dados,
          autenticidade, confidencialidade, integridade e não repúdio às informações eletrônicas.
          Ou seja, a proteção dos dados é mais que garantida!' />
      {benefits.map((object, index) => {
        return (
          <div
            className={globalStyle.templateRow}
            style={{ direction: object.reverse ? 'rtl' : 'ltr'}}
            key={`${index}_${object.title}`}
          >
            <Image
              src={object.img}
              alt="security icon"
              objectFit='contain'
              width={200}
              height={200}
              quality={100}
              layout='responsive'
              loading="lazy"
            />
            <div style={{ direction: 'ltr' }}>
              <h2>{object.title}</h2>
              <div>
                <p className={styles.text} style={{ textAlign: 'start' }}>
                  {object.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  );
}

export default Benefits;