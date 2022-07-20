import styles from './styles.module.css'
interface TitleProp {
  text?: string,
  isBold?: boolean,
  align?: any
}

function Title({ text, isBold = false, align = 'unset' }: TitleProp) {
  return (
    <div className={styles.title} style={{ textAlign: align, fontWeight: isBold ? '900' : 'bold' }}>
      {text}
    </div>
  )
}

export default Title