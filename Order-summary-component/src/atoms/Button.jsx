/* Styling imports */
import styles from './Button.module.css'

const Button = ({ label, className, onClickHandler }) => {
  return (
    <button
      className={styles[className]}
      onClick={onClickHandler}
    >
      {label}
    </button>
  )
}

export default Button