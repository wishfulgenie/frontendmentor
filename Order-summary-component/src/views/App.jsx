/* Component Imports */
import Chip from '../atoms/Chip.jsx'
import ClickableChip from '../atoms/ClickableChip.jsx'

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className="order-card-container">
      <Chip label={'Order Summary'} className={'header-text'}/>
      <Chip label={'Annual Plan'} className={'alt-header-text'}/>
      <Chip label={'$59.99/year'} className={'regular-text'}/>
      <ClickableChip label={'Change'} onClickHandler={testfn}/>
    </div>
  )
}

export default App
