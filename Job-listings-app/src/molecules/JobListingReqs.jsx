/* Styling imports */
import styles from './JobListingReqs.module.css'

/* Component Imports */
import ClickableChip from '../atoms/ClickableChip'

const JobListingReqs = ({ reqs, filterSelection, updateFilterSelection }) => {
  return (
    <div className={styles['job-listing-requirements']}>
      {reqs.map((req) => 
      <ClickableChip
        key={req}
        label={req} 
        type={'add'}
        clicked={filterSelection.includes(req)}
        onClickHandler={updateFilterSelection}
      />
      )}
    </div>
  )
}

export default JobListingReqs