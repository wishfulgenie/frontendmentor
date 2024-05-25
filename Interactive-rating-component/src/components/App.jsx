import { useState } from 'react';

/** Component Imports */
import Button from './Button';
import Image from './Image';

/** Image Imports */
import Star from '../../assets/images/icon-star.svg'

const App = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const ratings = [1, 2, 3, 4, 5]

  const handleUpdateRating = (newRating) => {
    setRating(newRating)
  }

  const handleUpdateSubmission = () => {
    setSubmitted(true);
  }

  return (
    <div className="interactive-rating-display">
      <div className='star-image'>
        <Image src={Star} width={"15"} height={"15"}/>
      </div>
      <div className="rating-message">
        <h2 className="display-title">How did we do?</h2>
        <p className="display-message">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className="rating-buttons">
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
      <Button label={"Submit"} type="submit" active={false} onClick={handleUpdateSubmission} />
    </div>
  )
}

export default App;