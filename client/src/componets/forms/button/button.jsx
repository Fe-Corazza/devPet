import React from 'react'
import styles from "./button.module.css"
const Button = ({children, fullwidth, ...props}) => {
  return (
    <div>
      <div className={`${styles.button} ${fullwidth && styles.fullwidth}`} {...props}>{children}</div>
   
    </div>
  )
}

export default Button