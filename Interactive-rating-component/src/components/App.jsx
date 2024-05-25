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
        <Button type="rate"><span> 1 </span></Button>
        <Button type="rate"><span> 2 </span></Button>
        <Button type="rate"><span> 3 </span></Button>
        <Button type="rate"><span> 4 </span></Button>
        <Button type="rate"><span> 5 </span></Button>
      </div>
      <Button type="submit"><span> Submit </span></Button>
    </div>
  )
}

export default App;