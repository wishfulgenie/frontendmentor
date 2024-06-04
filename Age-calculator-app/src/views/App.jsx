import { useState } from 'react'

/* Component Imports */
import Form from '../organisms/Form'
import AgeDisplay from '../molecules/AgeDisplay'
import InteractionPanel from '../molecules/InteractionPanel'


const App = () => {
  const [date, setDate] = useState({ day: '26', month: '3', year: '38' })
  const [age, setAge] = useState({ days: '', months: '', years: '' })
  const [error, setError] = useState({
    day: { errorStatus: false, errorMessage: '' },
    month: { errorStatus: false, errorMessage: '' },
    year: { errorStatus: false, errorMessage: '' }
  })

  // TODO: There likely won't be enough time for functionality. Leave this as an exercise for the students
  // The main focus of this lecture was teachng the approach towards designing atomic components
  const handleButtonClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  const handleInputChange = (e, dateLabel) => {
    switch (dateLabel) {
      case 'DD':
        setDate({ ...date, day: e.target.value })
        break;
      case 'MM':
        setDate({ ...date, month: e.target.value })
        break;
      case 'YYYY':
        setDate({ ...date, year: e.target.value })
        break;
      default:
        break;
    }
  }

  return (
    <div className="age-calculator">
      <Form
        date={date}
        error={error}
        onChangeHandler={handleInputChange}
      />
      <InteractionPanel onClickHandler={handleButtonClick}/>
      <AgeDisplay
        age={age}
      />
    </div>
  )
}

export default App