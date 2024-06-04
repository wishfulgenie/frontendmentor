/* Component Imports */
import FormField from '../molecules/FormField'
import AgeDisplay from '../molecules/AgeDisplay'
import InteractionPanel from '../molecules/InteractionPanel'


const App = () => {
  const testFunction = (e, dateLabel) => {
    console.log(`event value: ${e.target.value}, dateLabel: ${dateLabel}`)
  }

  const age = { days: '26', months: '3', years: '38' }

  return (
    <div className="age-calculator">
      <FormField
        label={'day'}
        value={''}
        errorMessage={''}
        onChangeHandler={testFunction}
      />
      <InteractionPanel onClickHandler={testFunction}/>
      <AgeDisplay
        age={age}
      />
    </div>
  )
}

export default App