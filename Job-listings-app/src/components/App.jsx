import { useState } from 'react'

/* Data Import */
import data from '../data.json'

const App = () => {
  const [jobList, setJobList] = useState([data[0]])
  const [filterSelection, setFilterSelection] = useState([])

  return (
    <div className='job-app'>
      
    </div>
  )
}

export default App
