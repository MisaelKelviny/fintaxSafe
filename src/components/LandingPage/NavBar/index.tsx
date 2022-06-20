import Image from 'next/image'
import styled from 'styled-components'
import token from '../../../../styles/design-tokens'
import logoEscuro from '/public/image/logo_escuro.png'

const NavContainer = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  padding: 10px 10%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${token.color.secondary};
  z-index: 99;
`

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media ${token.size.tablet} {
    justify-content: flex-end;
  }
`

const MenuItem = styled.li`
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 0px;

  &:hover{
    color: ${token.color.four}
  }

  @media ${token.size.tablet} {
    margin-right: 35px;  
  }
`

function Navbar() {
  return (
    <NavContainer>
      <div>
        <Image
          src={logoEscuro}
          alt="O logo da fintaxSafe escuro"
          width={50}
          height={50}
          objectFit='contain'
        />
      </div>
      <Menu>
        <MenuItem>Produtos</MenuItem>
        <MenuItem>Fale Conosco</MenuItem>
      </Menu>
    </NavContainer>
  )
}

export default Navbar