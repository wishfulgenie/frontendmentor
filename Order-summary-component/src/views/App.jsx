/* Component Imports */
import OrderSummary from "../molecules/OrderSummary";

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className="order-card-container">
      <OrderSummary />
    </div>
  )
}

export default App
