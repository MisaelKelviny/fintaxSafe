import Image from 'next/image';
import useScroll from '../../../data/hooks/useScroll';
import styles from './styles.module.css';
import logoEscuro from '/public/image/logo_escuro.png';

function Navbar() {
  const { scrollTo } = useScroll()

  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          src={logoEscuro}
          alt="O logo da fintaxSafe escuro"
          width={50}
          height={50}
          objectFit='contain'
          priority
        />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem} onClick={() => scrollTo('products')}>Produtos</li>
        <li className={styles.menuItem} onClick={() => scrollTo('footer')}>Fale Conosco</li>
      </ul>
    </nav>
  )
}

export default Navbar