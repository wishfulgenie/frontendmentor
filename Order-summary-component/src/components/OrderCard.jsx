import BannerImage from "../../assets/images/illustration-hero.svg"

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
            <h3>Annual Plan</h3>
            <p>$59.99/year</p>
          </div>
          <button>Change</button>
        </div>
        <div className="button-display">
          <button> Proceed to Payment </button>
          <button> Change </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard;
