/* Component imports */
import Image from '../atoms/Image'
import OrderCard from '../organisms/OrderCard'

/* Image imports */
import Hero from '../../assets/images/illustration-hero.svg'

const App = () => {

  const testfn = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <div className='order-summary-container'>
      <Image src={Hero} className={'hero-image'}/>
      <OrderCard />
    </div>
  )
}

export default App