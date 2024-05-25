/* Styling imports */
import styles from './Response.module.css'

/* Component Imports */
import Image from '../Image/Image';

/* Image Imports */
import ThankYou from '../../../assets/images/illustration-thank-you.svg'

const Response = ({ rating }) => {
  return (
    <div className={styles['thank-you-display']}>
      <div className={styles['response-display']}>
        <Image src={ThankYou} />
        <p className={styles['response-message']}>
          You selected <b>{rating}</b> out of 5 
        </p>
      </div>
      <div className={styles['thank-you-message']}>
        <h2 className={styles['thank-you-title']}>Thank you!</h2>
        <p className={styles['thank-you-message']}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default Response;