/* Styling imports */
import styles from './JobListingDetails.module.css'

/* Component Imports */
import Chip from '../atoms/Chip'

const JobListingDetails = ({ postedAt, contract, location }) => {
  return (
    <div className={styles['job-listing-details']}>
      <Chip label={postedAt} className={'details'}/>
      •
      <Chip label={contract} className={'details'}/>
      •
      <Chip label={location} className={'details'}/>
    </div>
  )
}

export default JobListingDetails