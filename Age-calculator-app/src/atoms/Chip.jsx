/* Styling imports */
import styles from './Chip.module.css'

const Chip = ({ label, value, type }) => {

  const renderInputLabel = (label) => {
    return (
      <div className={styles['input-label']}>
        {label}
      </div>
    )
  }

  const renderInputErrorLabel = (label) => {
    return (
      <div className={styles['input-label-error']}>
        {label}
      </div>
    )
  }

  const renderErrorLabel = (label) => {
    return (
      <div className={styles['error-label']}>
        {label}
      </div>
    )
  }

  const renderAgeLabel = (label, value) => {
    return (
      <div className={styles['age-label-container']}>
        <span className={styles['age-value']}>{value == '' ? '- -' : value}</span>
        <span className={styles['age-label']}>{label}</span>
      </div>
    )
  }

  return (
    <>
      {type === 'input' && renderInputLabel(label)}
      {type === 'inputError' && renderInputErrorLabel(label)}
      {type === 'error' && renderErrorLabel(label)}
      {type === 'age' && renderAgeLabel(label, value)}
    </>
  )
}

export default Chip