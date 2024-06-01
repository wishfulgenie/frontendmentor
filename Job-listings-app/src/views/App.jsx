import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import JobListingHeader from '../molecules/JobListingHeader'

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
      <p> Hello </p>
    </div>
  )
}

export default App
