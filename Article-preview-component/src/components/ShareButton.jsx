const ShareButton = ({ hover, shareDisplay, onHoverUpdate, onDisplayUpdate }) => {

  const handleMouseEnter = () => {
    onHoverUpdate(true);
  }

  const handleMouseLeave = () => {
    onHoverUpdate(false);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    onDisplayUpdate();
  }

  return (
    <button 
      className={(hover && !shareDisplay) ? 'share-button-active' : 'share-button'}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill={(hover && !shareDisplay) ? 'hsl(210, 46%, 95%)' : '#6E8098'} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
    </button>
  )
}

export default ShareButton;