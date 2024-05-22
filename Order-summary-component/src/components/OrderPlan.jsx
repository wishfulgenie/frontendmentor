/** SVG Imports */
import MusicLogo from "../../assets/images/icon-music.svg"

/** Component Imports */
import Button from "../components/Button"

const OrderPlan = () => {
  return (
    <div className="order-plan">
      <div className="plan-details">
        <img width="45px" height="45px" src={MusicLogo} />
        <div className="plan-details-text">
          <h4>Annual Plan</h4>
          <p>$59.99/year</p>
        </div>
      </div>
      <Button label={"Change"} className={"change-button"} />
    </div>
  )
}

export default OrderPlan;