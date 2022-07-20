import styles from './styles.module.css'
interface SubTitleProp {
  text?: string
  align?: any
}

function SubTitle({ text, align = 'unset' }: SubTitleProp) {
  return (
    <div className={styles.subtitle} style={{ textAlign: align }} >
      {text}
    </ div>
  )
}

export default SubTitle