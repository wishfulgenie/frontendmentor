/* Styling imports */
import styles from './JobFilters.module.css'

/* Component Imports */
import ClickableChip from '../atoms/ClickableChip'

const JobFilters = ({ filterSelection, updateFilterSelection }) => {
  return (
    <div className={styles['job-filters']}>
      {filterSelection.map((filter) => 
        <ClickableChip
          key={filter}
          label={filter}
          type={'remove'}
          onClickHandler={updateFilterSelection}
        />
      )}
    </div>
  )
}

export default JobFilters