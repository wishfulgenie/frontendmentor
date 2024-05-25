/* Styling imports */
import styles from './Button.module.css'

const Button = ({ label, type, active, onUpdateRating }) => {
  const buttonClass = active 
    ? `${styles.button} ${styles[type]} ${styles['active']}` 
    : `${styles.button} ${styles[type]}`

    const handleUpdateClick = (e) => {
      e.preventDefault()
      onUpdateRating(label);
    }
  
    return (
    <button className={buttonClass} onClick={handleUpdateClick}>
      <span>{label}</span>
    </button>
  )
}

export default Button