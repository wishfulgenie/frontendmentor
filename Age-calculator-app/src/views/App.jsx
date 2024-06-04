/* Component Imports */
import Chip from '../atoms/Chip'
import Input from '../atoms/Input'
import Button from '../atoms/Button'


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
    </div>
  )
}

export default App