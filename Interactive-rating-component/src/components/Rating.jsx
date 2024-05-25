import { useState } from 'react';

/* Styling imports */
import styles from './Rating.module.css'

/* Component Imports */
import Button from './Button';
import Image from './Image';

/* Image Imports */
import Star from '../../assets/images/icon-star.svg'

const Rating = ({ onSubmissionUpdate }) => {
  const [rating, setRating] = useState(null);

  const ratings = [1, 2, 3, 4, 5]

  const handleUpdateRating = (newRating) => {
    setRating(newRating)
  }

  return (
    <div className={styles['interactive-rating-display']}>
      <div className={styles['star-image']}>
        <Image src={Star} width={"15"} height={"15"}/>
      </div>
      <div className={styles['rating-message']}>
        <h2 className={styles['display-title']}>How did we do?</h2>
        <p className={styles['display-message']}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className={styles['rating-buttons']}>
      {ratings.map((value) => (
        <Button
          key={value}
          label={value}
          type="rate"
          active={rating === value}
          onClick={handleUpdateRating}
        />
      ))}
      </div>
      <Button label={"Submit"} type="submit" active={false} onClick={onSubmissionUpdate} />
    </div>
  )
}

export default Rating;