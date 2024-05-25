/* Styling imports */
import styles from './Button.module.css'

const Button = ({ label, type, active, onClick }) => {
  const buttonClass = active 
    ? `${styles.button} ${styles[type]} ${styles['active']}` 
    : `${styles.button} ${styles[type]}`

    const handleUpdateClick = (e, type) => {
      e.preventDefault()
      if (type == 'rate') {
        onClick(label);
      } else {
        onClick();
      }
    }
  
    return (
    <button className={buttonClass} onClick={(e) => handleUpdateClick(e, type)}>
      <span>{label}</span>
    </button>
  )
}

export default Button