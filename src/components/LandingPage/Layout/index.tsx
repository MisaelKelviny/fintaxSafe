import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10% 10% 0px 10%;
  display: inline-table;
  justify-content: center;
  align-items: center;
`

interface LayoutProp {
  children: any
}

function Layout({ children }: LayoutProp) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout