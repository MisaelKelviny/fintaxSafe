import styles from './styles.module.css'
interface LayoutProp {
  children: any,
  id: string
}

function Layout({ children, id }: LayoutProp) {
  return (
    <div className={styles.container} id={id}>
      {children}
    </div>
  )
}

export default Layout