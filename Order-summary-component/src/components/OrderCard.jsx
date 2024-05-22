/** SVG Imports */
import BannerImage from "../../assets/images/illustration-hero.svg"

/** Component Imports */
import OrderPlan from "../components/OrderPlan"
import OrderSummary from "../components/OrderSummary"
import Button from "./Button"
import Image from "./Image"

const OrderCard = () => {
  return (
    <div className="card-and-banner">
      <Image src={BannerImage} className={"order-banner"} />
      <div className="order-card">
        <OrderSummary />
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
