import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import ClickableChip from '../atoms/ClickableChip'

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
      <ClickableChip
        label={'Clear'}
        type={'clear'}
        onClickHandler={updateFilterSelection}
      />
    </div>
  )
}

export default App
