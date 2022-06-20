import Image from 'next/image'
import styled from 'styled-components'
import token from '../../../../styles/design-tokens'
import logoEscuro from '/public/image/logo_escuro.png'

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  padding: 0px 10%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${token.color.secondary};
  z-index: 99;
`

const Logo = styled.div`
  margin: 0 24px;
  max-width: 62px;
  min-width: 62px;
`

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
`

const MenuItem = styled.li`
  margin-right: 32px;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    color: ${token.color.four}
  }
`

function Navbar() {
  return (
    <NavContainer>
      <Logo>
        <Image
          src={logoEscuro}
          alt="O logo da fintaxSafe escuro"
          layout='responsive'
        />
      </Logo>
      <Menu>
        <MenuItem>Produtos</MenuItem>
        <MenuItem>Fale Conosco</MenuItem>
      </Menu>
    </NavContainer>
  )
}

export default Navbar