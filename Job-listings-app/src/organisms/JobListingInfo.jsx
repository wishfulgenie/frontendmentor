/* Styling imports */
import styles from './JobListingInfo.module.css'

/* Component Imports */
import JobListingHeader from '../molecules/JobListingHeader'
import Chip from '../atoms/Chip'
import JobListingDetails from '../molecules/JobListingDetails'

const JobListingInfo = ({ job }) => {
  return (
    <div className={styles['job-listing-info']}>
      <JobListingHeader 
        company={job.company} 
        newStatus={job.new} 
        featuredStatus={job.featured}
      />
      <Chip label={job.position} className={'position'} />
      <JobListingDetails
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
      />
    </div>
  )
}

export default JobListingInfo