/* Styling imports */
import styles from './ClickableChip.module.css'

/* Image Imports */
import removeIcon from '../../assets/images/icon-remove.svg'

const ClickableChip = ({ label, type, clicked, onClickHandler }) => {

  const renderAddFilter = (clicked) => {
    const className = clicked ? styles['clicked'] : styles['clickable']
    const action = clicked ? 'remove' : 'add';

    return (
      <div
        className={className}
        onClick={(e) => onClickHandler(e, action, label)}
      >
        {label}
      </div>
    )
  }

  const renderRemoveFilter = () => {

  }

  const renderClearFilters = () => {

  }

  return (
    <>
      {type === 'add' && renderAddFilter(clicked)}
      {type === 'remove' && renderRemoveFilter()}
      {type === 'clear' && renderClearFilters()}
    </>
  )
}

export default ClickableChip;