/* Component Imports */
import Chip from '../atoms/Chip'

const App = () => {
  return (
    <div className="age-calculator">
      <Chip
        type={'age'}
        label={'years'}
        value={''}
      />
    </div>
  )
}

export default App