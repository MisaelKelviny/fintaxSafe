import styled from 'styled-components'
import token from '../../../styles/design-tokens'

interface TitleProp {
  text?: string,
  isBold?: boolean,
  align?: string
}

const Text = styled.div`
  font-size: 2.5rem;
  font-weight: ${(props: TitleProp) => props.isBold ? '900' : 'bold'};
  margin-bottom: 24px;
  
  @media ${token.size.tablet} {
    color: ${token.color.primary};
    font-size: clamp(3.5rem, 4vw, 5.1rem);
    line-height: 74px;
    text-align: ${(props: TitleProp) => props.align};
  }
`

function Title({ text, isBold = false, align = 'unset' }: TitleProp) {
  return (
    <Text isBold={isBold} align={align}>
      {text}
    </Text>
  )
}

export default Title