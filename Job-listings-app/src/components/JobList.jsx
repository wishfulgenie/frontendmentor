/* Component Imports */
import JobCard from './JobCard/JobCard'

const JobList = ({ jobList }) => {
  return (
    <div className="job-listings">
      {jobList
        .map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  )
}

export default JobList