/* Styling imports */
import styles from './JobCard.module.css'

const JobCardCompany = ({ company, newJob, featuredJob }) => {
  return (
    <div className={styles['job-card-company']}>
      <p className={styles['company-role']}> {company} </p>
        {newJob && <span className={styles['new-status']}>new!</span>}
        {featuredJob && <span className={styles['featured-status']}>featured</span>}
    </div>
  )
}

const JobCard = ({ job }) => {
  return (
    <div className={styles['job-card']}>
      <div className={styles['job-details-and-image']}>
        <img src={`../../assets/images/${job.logo}`} />
        <div className={styles['job-details']}>
          <JobCardCompany company={job.company} newJob={job.new} featuredJob={job.featured}/>
        </div>
      </div>
    </div>
  )
}

export default JobCard