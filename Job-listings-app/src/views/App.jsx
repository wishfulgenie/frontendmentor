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

  const performFilter = (job, filterSelection) => {
    const jobReqs = [...job.tools, ...job.languages]
    for (const filter of filterSelection) {
      if (!jobReqs.includes(filter)) {
        return false;
      }
    }
    return true
  }

  return (
    <div className={displayFilterPanel ? 'job-app' : 'job-app-empty'}>
      {displayFilterPanel &&
        <JobFilterPanel 
          filterSelection={filterSelection}
          updateFilterSelection={updateFilterSelection}
        />
      }
      {jobList
      .filter((job) => performFilter(job, filterSelection))
      .map((job) => 
          <JobListing
            key={job.id} 
            job={job} 
            filterSelection={filterSelection} 
            updateFilterSelection={updateFilterSelection}
          />
        )
      }
    </div>
  )
}

export default App
