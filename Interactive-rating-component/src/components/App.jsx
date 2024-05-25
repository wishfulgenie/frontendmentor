import { useState } from 'react';

/* Component Imports */
import Rating from './Rating'

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmissionUpdate = () => {
    console.log('updated submission state')
    setSubmitted(true);
  }

  return (
    <>
      {submitted 
        ? ''
        : <Rating onSubmissionUpdate={handleSubmissionUpdate}/>}
    </>
  )
}

export default App;