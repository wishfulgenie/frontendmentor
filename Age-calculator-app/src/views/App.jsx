/* Component Imports */
import FormField from '../molecules/FormField'
import AgeDisplay from '../molecules/AgeDisplay'


const App = () => {
  const testFunction = (e, dateLabel) => {
    console.log(`event value: ${e.target.value}, dateLabel: ${dateLabel}`)
  }

  const age = { days: '26', months: '3', years: '38' }

  return (
    <div className="age-calculator">
      <FormField
        label={'day'}
        value={'125'}
        errorMessage={'Must be a valid day'}
        onChangeHandler={testFunction}
      />
      <AgeDisplay
        age={age}
      />
    </div>
  )
}

export default App