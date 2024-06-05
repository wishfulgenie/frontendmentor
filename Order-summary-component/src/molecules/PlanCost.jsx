/* Styling imports */
import styles from './PlanCost.module.css'

/* Image import */
import MusicIcon from '../../assets/images/icon-music.svg'

/* Component imports */
import Chip from '../atoms/Chip.jsx'
import Image from '../atoms/Image.jsx'

const PlanCost = ({}) => {
  return (
    <div className={styles['plan-cost-container']}>
      <Image src={MusicIcon} className={'music-icon'}/>
      <div className={styles['plan-cost-text']}>
        <Chip
          label={'Annual Plan'}
          className={'alt-header-text'}
        />
        <Chip
          label={'$59.99/year'}
          className={'regular-text'}
        />
      </div>
    </div>
  )
}

export default PlanCost