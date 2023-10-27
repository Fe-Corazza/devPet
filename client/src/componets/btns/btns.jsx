import { Link } from 'react-router-dom'
import styles from './btns.module.css'

const Btns = ({children,img,link}) => {
  return (
  <Link to={link}> <div className={styles.bt}>
      <img src={img} alt="" />
      <h2>{children}</h2>
    </div>
    </Link>)
}

export default Btns
