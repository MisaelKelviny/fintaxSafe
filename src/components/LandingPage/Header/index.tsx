import Image from 'next/image'
import styled from 'styled-components'
import token from '../../../../styles/design-tokens'
import Navbar from '../NavBar'
import SubTitle from '../Subtitle'
import Title from '../Title'
// import background from '/public/image/background.png'

type ImagePropos = {
  imgUrl: string
}

const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  position: relative;

  @media ${token.size.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const HeaderBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding: 0% 10%;

  @media ${token.size.tablet} {
    position: relative;
    padding: 0% 0% 0% 20%;
  }
`

const LandingButton = styled.button`
  background-color: ${token.color.four};
  border: 0px solid transparent;
  color: white;
  font-weight: bolder;
  padding: 16px;
  cursor: pointer;
  filter: drop-shadow(0px 13px 33px rgba(0, 122, 255, 0.34));
`

const ImageContainer = styled.div`
  display: block;
  position: absolute;
  filter: blur(9px);
  opacity: 0.4;

  @media ${token.size.tablet} {
    position: relative;
  }
`

const ImageRaw = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(5px);
  opacity: 0.24;

  @media ${token.size.tablet} {
    display: block;
    position: relative;
    filter: unset;
    opacity: 1;
  }
`

function Header() {
  return (
    <div>
      <Navbar />
      <HeaderContainer>
        <HeaderBanner>
          <Title text='Certificado Digital Para Sua Empresa' isBold={true} />
          <SubTitle text='Te ajudamos a emitir seu certificado digital para que você tenha mais segurança, beneficios, e praticidade no seu negócio!' />
          <LandingButton>
            MIGRAR PARA O DIGITAL
          </LandingButton>
        </HeaderBanner>
        <ImageRaw>
          <Image
            src={'/image/background.png'}
            layout="fill"
            objectFit="contain"
            quality={100}
            alt={'Image background'}
            priority />
        </ImageRaw>
      </HeaderContainer>
    </div>
  )
}


export default Header