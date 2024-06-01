import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import JobFilterPanel from '../organisms/JobFilterPanel'
import JobListing from '../templates/JobListing'

const App = () => {
  const [jobList, setJobList] = useState(data)
  const [filterSelection, setFilterSelection] = useState([])

  const displayFilterPanel = filterSelection.length !== 0

  // TODO: Limit to a maximum of 8 filters
  const updateFilterSelection = (e, action, data) => {
    e.preventDefault()
    console.log(`action: ${action}, data: ${data}`)

    if (action === 'add' && filterSelection.length === 8) {
      console.log('exceeded 8 filters, this is an issue')
      return
    }

    switch (action) {
      case 'add':
        if (!filterSelection.includes(data)) {
          console.log(`added ${data}`)
          setFilterSelection(filterSelection.concat(data))
        }
        break;
      case 'remove':
        const newSelection = filterSelection.filter((s) => s !== data)
        setFilterSelection(newSelection)
        break;
      case 'clear':
        setFilterSelection([])
        break;
      default:
        break;
    }
  }

  return (
    <div className='job-app'>
      {displayFilterPanel &&
        <JobFilterPanel 
          filterSelection={filterSelection}
          updateFilterSelection={updateFilterSelection}
        />
      }
      {jobList.map(
        (job) => 
          <JobListing
            key={job.id} 
            job={job} 
            filterSelection={filterSelection} 
            updateFilterSelection={updateFilterSelection}
          />
      )}
      
    </div>
  )
}

export default App
