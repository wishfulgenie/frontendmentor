import { useState } from 'react';

/* Component Imports */
import Rating from './Rating/Rating'
import Response from './Response/Response'

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const handleSubmissionUpdate = () => {
    setSubmitted(true);
  }

  const handleUpdateRating = (newRating) => {
    setRating(newRating)
  }

  return (
    <>
      {submitted 
        ? <Response rating={rating} />
        : <Rating rating={rating} onUpdateRating={handleUpdateRating}onSubmissionUpdate={handleSubmissionUpdate}/>}
    </>
  )
}

export default App;