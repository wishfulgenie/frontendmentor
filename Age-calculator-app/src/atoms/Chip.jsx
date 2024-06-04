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
      <div>

      </div>
    )
  }

  const renderAgeLabel = (label) => {
    return (
      <div>

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