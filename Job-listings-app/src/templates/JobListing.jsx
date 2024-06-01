/* Styling imports */
import styles from './JobListing.module.css'

/* Component Imports */
import JobListingInfo from '../organisms/JobListingInfo'
import JobListingReqs from '../molecules/JobListingReqs'

const JobListing = ({ job, filterSelection, updateFilterSelection }) => {
  const reqs = [...job.languages, ...job.tools]

  return (
    <div className={styles['job-listing']}>
      <div className={styles['job-listing-logo-info']}>
        <img src={`../../assets/images/${job.logo}`} className={styles['logo']} />
        <JobListingInfo job={job} />
      </div>
      <JobListingReqs
        reqs={reqs}
        filterSelection={filterSelection} 
        updateFilterSelection={updateFilterSelection}
      />
    </div>
  )
}

export default JobListing