/* Styling imports */
import styles from './Button.module.css'

const Button = ({ children, type }) => {
  const buttonClass = `${styles.button} ${styles[type]}`
  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}

export default Button