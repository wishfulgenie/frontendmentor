import { useState } from 'react'

/* Component Imports */
import JobList from './JobList'

/* Data Import */
import data from '../data.json'

const App = () => {
  const [jobList, setJobList] = useState([data[0]])
  const [filterSelection, setFilterSelection] = useState([])

  return (
    <div className='job-app'>
      <JobList jobList={jobList} />
    </div>
  )
}

export default App
