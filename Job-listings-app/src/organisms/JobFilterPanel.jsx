/* Styling imports */
import styles from './JobFilterPanel.module.css'

/* Component Imports */
import JobFilters from '../molecules/JobFilters'
import ClickableChip from '../atoms/ClickableChip'

const JobFilterPanel = ({ filterSelection, updateFilterSelection }) => {
  return (
    <div className={styles['job-filter-panel']}>
      <div className={styles['job-filters']}>
        <JobFilters 
          filterSelection={filterSelection}
          updateFilterSelection={updateFilterSelection}
        />
      </div>
      <ClickableChip
        label={'Clear'}
        type={'clear'}
        onClickHandler={updateFilterSelection}
      />
    </div>
  )
}

export default JobFilterPanel