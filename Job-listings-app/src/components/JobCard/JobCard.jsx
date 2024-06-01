/* Styling imports */
import styles from './JobCard.module.css'

const CompanyChip = ({ label, className }) => {
  return (
    <div className={styles[className]}>
      <span>{label}</span>
    </div>
  )
}

const JobCardCompany = ({ company, newJob, featuredJob }) => {
  return (
    <div className={styles['job-card-company']}>
      <p className={styles['company-role']}> {company} </p>
        {newJob && <CompanyChip label={'new!'} className={'new-status'}/>}
        {featuredJob && <CompanyChip label={'featured'} className={'featured-status'}/>}
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