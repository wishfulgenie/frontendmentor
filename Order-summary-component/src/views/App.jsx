/* Component Imports */
import ButtonGroup from "../molecules/ButtonGroup.jsx";

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className="order-card-container">
      <ButtonGroup />
    </div>
  )
}

export default App
