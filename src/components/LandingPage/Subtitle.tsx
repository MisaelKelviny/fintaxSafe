import styled from 'styled-components'
import token from '../../../styles/design-tokens'

interface SubTitleProp {
  text?: string
  align?: string
}

const Text = styled.div`
  color: ${token.color.terciary};
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 24px;

  @media ${token.size.tablet}  {
    font-size: 1.5rem;
    text-align:  ${(props: SubTitleProp) => props.align};
  }
`

function SubTitle({ text, align = 'unset' }: SubTitleProp) {
  return (
    <Text align={align}>
      {text}
    </Text>
  )
}

export default SubTitle