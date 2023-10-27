import styles from './Petesc.module.css'
import { Link } from 'react-router-dom'

const Petesc = ({children, link}) => {
  return (
    <Link to={link}><div className={styles.escolhas}>
      <h1 className={styles.escrito}>{children}</h1>
    </div></Link>
  )
}

export default Petesc
