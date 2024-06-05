import { useState } from 'react'

/* Function Imports */
import { checkEmptyInput, checkValidInput } from '../utils'

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

    // Perform checks for empty fields
    const fields = ['day', 'month', 'year']
    let anyEmpty = false
    const emptyError = { ...error }
    fields.forEach(field => {
      if (checkEmptyInput(date, field)) {
        emptyError[field].errorStatus = true
        emptyError[field].errorMessage = 'This field is required'
        anyEmpty = true
      } else {
        emptyError[field].errorStatus = false
        emptyError[field].errorMessage = ''
      }
    })
    if (anyEmpty) {
      setError(emptyError)
      return
    }

    // Perform checks for invalid fields
    let anyInvalid = false
    const invalidError = { ...error }
    fields.forEach(field => {
      const invalidCheck = checkValidInput(date, field)
      if (invalidCheck !== '') {
        invalidError[field].errorStatus = true
        invalidError[field].errorMessage = invalidCheck
        anyInvalid = true
      } else {
        emptyError[field].errorStatus = false
        emptyError[field].errorMessage = ''
      }
    })
    if (anyInvalid) {
      setError(invalidError)
      return
    }

    console.log('This is our check');
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