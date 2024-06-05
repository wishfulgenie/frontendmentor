/* Component Imports */
import Chip from '../atoms/Chip.jsx'

const App = () => {
  return (
    <div className="order-card-container">
      <Chip label={'Order Summary'} className={'header-text'}/>
      <Chip label={'Annual Plan'} className={'alt-header-text'}/>
      <Chip label={'$59.99/year'} className={'regular-text'}/>
    </div>
  )
}

export default App
