/* Styling imports */
import styles from './ButtonGroup.module.css'

/* Component imports */
import Button from '../atoms/Button.jsx';

const ButtonGroup = ({ proceedHandler, cancelHandler }) => {
  return (
    <div className={styles['button-group-container']}>
      <Button
        label={'Proceed to Payment'}
        className={'payment-button'}
        onClickHandler={proceedHandler}
      />
      <Button
        label={'Cancel Order'}
        className={'cancel-button'}
        onClickHandler={cancelHandler}
      />
    </div>
  )
}

export default ButtonGroup