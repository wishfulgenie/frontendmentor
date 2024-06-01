/* Styling imports */
import styles from './JobListingHeader.module.css'

/* Component Imports */
import Chip from '../atoms/Chip'

const JobListingHeader = ({ company, newStatus, featuredStatus }) => {
  return (
    <div className={styles['job-listing-header']}>
      <Chip label={company} className={'company'}/>
      <div className={styles['job-listing-header-details']}>
        {newStatus && <Chip label={'NEW!'} className={'highlight-new'}/>}
        {featuredStatus && <Chip label={'FEATURED'} className={'highlight-featured'}/>}
      </div>
    </div>
  )
}

export default JobListingHeader