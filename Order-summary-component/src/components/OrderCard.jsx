/** SVG Imports */
import BannerImage from "../../assets/images/illustration-hero.svg"

/** Component Imports */
import OrderPlan from "../components/OrderPlan"
import Button from "../components/Button"

const OrderCard = () => {
  return (
    <div className="card-and-banner">
      <img className="order-banner" src={BannerImage} />
      <div className="order-card">
        <div className="order-summary">
          <h1> Order Summary </h1>
          <p> You can now listen to millions of songs, audiobooks, and podcasts on any device anwhere you like! </p>
        </div>
        <OrderPlan />
        <div className="button-display">
          <Button label={"Proceed to Payment"} className={"payment-button"} />
          <Button label={"Cancel Order"} className={"cancel-button"} />
        </div>
      </div>
    </div>
  )
}

export default OrderCard;
