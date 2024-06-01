import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import Chip from '../atoms/Chip'

const App = () => {
  const [jobList, setJobList] = useState([data[0]])
  const [filterSelection, setFilterSelection] = useState([])

  return (
    <div className='job-app'>
      <p> Hello </p>
    </div>
  )
}

export default App
