import BannerImage from "../../assets/images/illustration-hero.svg"
import MusicLogo from "../../assets/images/icon-music.svg"

const OrderCard = () => {
  return (
    <div className="order-card">
      <img className="order-banner" src={BannerImage} />
      <div className="order-summary">
        <div className="order-summary-text">
          <h1> Order Summary </h1>
          <p> You can now listen to millions of songs, audiobooks, and podcasts on any device anwhere you like! </p>
        </div>
        <div className="order-plan">
          <div className="plan-details">
            <img width="45px" height="45px" src={MusicLogo} />
            <div className="plan-details-text">
              <h4>Annual Plan</h4>
              <p>$59.99/year</p>
            </div>
          </div>
          <button>Change</button>
        </div>
        <div className="button-display">
          <button className="payment-button"> Proceed to Payment </button>
          <button className="cancel-button"> Cancel Order </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard;
