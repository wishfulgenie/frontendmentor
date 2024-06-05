/* Styling imports */
import styles from './ClickableChip.module.css'

const ClickableChip = ({ label, onClickHandler }) => {
  return (
    <div 
      className={styles['change-clickable']}
      onClick={onClickHandler}
    >
      {label}
    </div>
  )
}

export default ClickableChip