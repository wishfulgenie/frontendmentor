import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import JobListingInfo from '../organisms/JobListingInfo'

const App = () => {
  const [jobList, setJobList] = useState(data)
  const [filterSelection, setFilterSelection] = useState(['TypeScript', 'JavaScript', 'React', 'Python'])

  // TODO
  const updateFilterSelection = (e, action, data) => {
    e.preventDefault()
    console.log(`action: ${action}, data: ${data}`)
    if (action === 'add') {
      if (!filterSelection.includes(data)) {
        console.log('added')
        setFilterSelection(filterSelection.concat(data))
      }
    } else if (action === 'remove') {
      setFilterSelection(filterSelection.filter((sel) => sel !== data))
    } else {
      setFilterSelection([])
    }
  }

  return (
    <div className='job-app'>
      <p> Hello </p>
    </div>
  )
}

export default App
