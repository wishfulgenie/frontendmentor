import { useState } from 'react';

/** Component Imports */
import Button from './Button';

const App = () => {
  const [rating, setRating] = useState(null);

  const handleUpdateRating = (newRating) => {
    setRating(newRating)
  }

  return (
    <div className="interactive-rating-display">
      <div className="rating-message">
        <h2 className="display-title">How did we do?</h2>
        <p className="display-message">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className="rating-buttons">
        <Button label={1} type="rate" active={rating==1} onUpdateRating={handleUpdateRating} />
        <Button label={2} type="rate" active={rating==2} onUpdateRating={handleUpdateRating} />
        <Button label={3} type="rate" active={rating==3} onUpdateRating={handleUpdateRating} />
        <Button label={4} type="rate" active={rating==4} onUpdateRating={handleUpdateRating} />
        <Button label={5} type="rate" active={rating==5} onUpdateRating={handleUpdateRating} />
      </div>
      <Button label={"Submit"} type="submit" active={false} />
    </div>
  )
}

export default App;