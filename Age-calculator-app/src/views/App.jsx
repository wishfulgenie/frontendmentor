/* Component Imports */
import Chip from '../atoms/Chip'
import Input from '../atoms/Input'


const App = () => {
  const testFunction = (e, dateLabel) => {
    console.log(`event value: ${e.target.value}, dateLabel: ${dateLabel}`)
  }

  return (
    <div className="age-calculator">
      <Chip 
        label={'Month'}
        type={'input'}
        errorStatus={true}
      />
      <Input
        placeholder={'DD'}
        value={'22'}
        errorStatus={true}
        onChangeHandler={testFunction}
      />
      <Chip 
        label={'Must be a valid month'}
        type={'error'}
      />
    </div>
  )
}

export default App