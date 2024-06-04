/* Component Imports */
import FormField from '../molecules/FormField'


const App = () => {
  const testFunction = (e, dateLabel) => {
    console.log(`event value: ${e.target.value}, dateLabel: ${dateLabel}`)
  }

  return (
    <div className="age-calculator">
      <FormField
        label={'Day'}
        value={'125'}
        errorMessage={'Must be a valid day'}
        onChangeHandler={testFunction}
      />
    </div>
  )
}

export default App