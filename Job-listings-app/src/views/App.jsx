import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import JobListingDetails from '../molecules/JobListingDetails'

const App = () => {
  const [jobList, setJobList] = useState([data[0]])
  const [filterSelection, setFilterSelection] = useState(['TypeScript'])

  // TODO
  const updateFilterSelection = (e, action, data) => {
    e.preventDefault()
    console.log(`action: ${action}, data: ${data}`)
  }

  return (
    <div className='job-app'>
      <JobListingDetails postedAt={'1d ago'} contract={'Full Time'} location={'USA only'} />
    </div>
  )
}

export default App
