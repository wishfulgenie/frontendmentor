/* Component Imports */
import Chip from '../atoms/Chip'

const App = () => {
  return (
    <div className="age-calculator">
      <Chip
        type={'input'}
        label={'Day'}
      />
    </div>
  )
}

export default App