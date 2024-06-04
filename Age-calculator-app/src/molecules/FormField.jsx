/* Styling imports */
import styles from './FormField.module.css'

/* Component Imports */ 
import Chip from '../atoms/Chip'
import Input from '../atoms/Input'

const FormField = ({ label, value, errorMessage, onChangeHandler }) => {
  const errorStatus = errorMessage !== ''
  const placeholder = label === 'Day' ? 'DD' : label === 'Month' ? 'MM' : label === 'Year' ? 'YYYY' : '';


  return (
    <div className={styles['form-field']}>
      <Chip 
        label={label}
        type={'input'}
        errorStatus={errorStatus}
      />
      <Input
        placeholder={placeholder}
        value={value}
        errorStatus={errorStatus}
        onChangeHandler={onChangeHandler}
      />
      <Chip 
        label={errorMessage}
        type={'error'}
      />
    </div>
  )
}

export default FormField