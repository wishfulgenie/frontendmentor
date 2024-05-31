import { useState } from 'react'

/* Data Import */
import data from '../data.json'

const App = () => {
  const [jobList, setJobList] = useState(data)

  console.log(jobList);

  return (
    <div>
      <p> Hello </p>
    </div>
  )
}

export default App
