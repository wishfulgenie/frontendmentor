/* Component Imports */
import OrderSummary from '../molecules/OrderSummary.jsx';
import PlanPanel from '../organisms/PlanPanel.jsx'

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className='order-card-container'>
      <OrderSummary />
      <PlanPanel />
    </div>
  )
}

export default App
