import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import JobListingReqs from '../molecules/JobListingReqs'

const App = () => {
  const [jobList, setJobList] = useState([data[1]])
  const [filterSelection, setFilterSelection] = useState(['TypeScript'])

  // TODO
  const updateFilterSelection = (e, action, data) => {
    e.preventDefault()
    console.log(`action: ${action}, data: ${data}`)
    if (action === 'add') {
      if (!filterSelection.includes(data)) {
        console.log('added')
        setFilterSelection(filterSelection.concat(data))
      }
    } else {
      setFilterSelection(filterSelection.filter((sel) => sel !== data))
    }
  }

  return (
    <div className='job-app'>
      <p> Hello </p>
    </div>
  )
}

export default App
