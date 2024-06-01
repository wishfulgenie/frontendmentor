/* Styling imports */
import styles from './ClickableChip.module.css'

/* Image Imports */
import removeIcon from '../../assets/images/icon-remove.svg'

const ClickableChip = ({ label, type, onClickHandler }) => {

  const renderAddFilter = () => {
    return (
      <div
        className={styles['clickable']}
        onClick={(e) => onClickHandler(e, 'add', label)}
      >
        {label}
      </div>
    )
  }

  const renderRemoveFilter = () => {
    return (
      <div className={styles['removable-container']}>
        <div className={styles['removable-text-container']}>
          {label}
        </div>
        <div 
          className={styles['removable-icon-container']}
          onClick={(e) => onClickHandler(e, 'remove', label)}
        >
          <img 
            src={removeIcon}
          />
        </div>
      </div>
    )
  }

  const renderClearFilters = () => {
    return (
      <div
        className={styles['clearable']}
        onClick={(e) => onClickHandler(e, 'clear', label)}
      >
        {label}
      </div>
    )
  }

  return (
    <>
      {type === 'add' && renderAddFilter()}
      {type === 'remove' && renderRemoveFilter()}
      {type === 'clear' && renderClearFilters()}
    </>
  )
}

export default ClickableChip;