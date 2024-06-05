/* Component Imports */
import PlanCost from "../molecules/PlanCost";

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className="order-card-container">
      <PlanCost />
    </div>
  )
}

export default App
