import { useState } from 'react'

/* Data Import */
import data from '../data.json'

/* Component Imports */
import ClickableChip from '../atoms/ClickableChip'

const App = () => {
  const [jobList, setJobList] = useState([data[0]])
  const [filterSelection, setFilterSelection] = useState(['TypeScript'])

  const updateFilterSelection = (e, action, data) => {
    e.preventDefault()
    if (action === 'add') {
      console.log(`add click: ${data}`)
      setFilterSelection(filterSelection.concat(data))
    } else if (action == 'remove') {
      console.log(`remove click: ${data}`)
      setFilterSelection(filterSelection
        .filter((filter) => filter !== data)
      )
    }
  }

  return (
    <div className='job-app'>
      <ClickableChip 
        label={'JavaScript'} 
        type={'add'}
        clicked={filterSelection.includes('JavaScript')}
        onClickHandler={updateFilterSelection}/>
    </div>
  )
}

export default App
