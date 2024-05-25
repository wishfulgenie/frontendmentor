/** Component Imports */
import Button from './Button';

const App = () => {
  return (
    <div className="interactive-rating-display">
      <div className="rating-message">
        <h2 className="display-title">How did we do?</h2>
        <p className="display-message">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className="rating-buttons">
        <Button type="rate">1</Button>
        <Button type="rate">2</Button>
        <Button type="rate">3</Button>
        <Button type="rate">4</Button>
        <Button type="rate">5</Button>
      </div>
    </div>
  )
}

export default App;