/* Component Imports */
import Chip from '../atoms/Chip'

const App = () => {
  return (
    <div className="age-calculator">
      <Chip
        type={'input'}
        label={'years'}
      />
    </div>
  )
}

export default App