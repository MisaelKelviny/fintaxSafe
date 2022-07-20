import Image from 'next/image'
import useScroll from '../../../data/hooks/useScroll'
import Navbar from '../NavBar'
import SubTitle from '../Subtitle'
import Title from '../Title'
import styles from './styles.module.css'
// import background from '/public/image/background.png'

type ImagePropos = {
  imgUrl: string
}

function Header() {
  const { scrollTo } = useScroll()

  return (
    <div>
      <Navbar />
      <div className={styles.headerContainer}>
        <div className={styles.headerBanner}>
          <Title text='Certificado Digital Para Sua Empresa' isBold={true} />
          <SubTitle text='Te ajudamos a emitir seu certificado digital para que você tenha mais segurança, beneficios, e praticidade no seu negócio!' />
          <button className={styles.landingButton} onClick={() => scrollTo('products')}>
            MIGRAR PARA O DIGITAL
          </button>
        </div>
        <div className={styles.imageRaw} >
          <Image
            src={'/image/background.png'}
            layout="fill"
            objectFit="contain"
            quality={100}
            alt={'Image background'}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}


export default Header