/* Styling imports */
import styles from './Chip.module.css'

const Chip = ({ label, value, type }) => {

  const renderInputLabel = (label) => {
    return (
      <div>

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
      {type === 'inputLabel' && renderInputLabel(label)}
      {type === 'errorLabel' && renderErrorLabel(label)}
      {type === 'ageLabel' && renderAgeLabel(label, value)}
    </>
  )
}