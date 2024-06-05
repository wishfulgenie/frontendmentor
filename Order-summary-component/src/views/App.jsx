/* Component Imports */
import Chip from '../atoms/Chip.jsx'
import ClickableChip from '../atoms/ClickableChip.jsx'
import Button from '../atoms/Button.jsx'

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
      <Button 
        label={'Proceed to Payment'} 
        className={'payment-button'} 
        onClickHandler={testfn}
      />
      <Button 
        label={'Cancel Order'} 
        className={'cancel-button'} 
        onClickHandler={testfn}
      />
    </div>
  )
}

export default App
