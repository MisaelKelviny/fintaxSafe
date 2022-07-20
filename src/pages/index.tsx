import type { NextPage } from 'next'
import Head from 'next/head'
import Benefits from '../components/LandingPage/Benefits'
import Faq from '../components/LandingPage/FAQ'
import Footer from '../components/LandingPage/Footer'
import Header from '../components/LandingPage/Header'
import Products from '../components/LandingPage/Products'
import Solutions from '../components/LandingPage/Solutions'


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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Certificados Digitais - FintaxSafe</title>
      </Head>
      <Header />
      <Benefits />
      <Solutions />
      <Products />
      <Faq />
      <Footer />
    </div >
  )
}

export default Home
