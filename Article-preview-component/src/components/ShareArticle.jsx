import { useState } from 'react';

/** Image Imports */
import Avatar from '../../assets/images/avatar-michelle.jpg'

/** Component Imports */
import Image from './Image'
import ShareButton from './ShareButton'

const ShareArticle = ({}) => {
  const [hover, setHover] = useState(false);
  const [shareDisplay, setShareDisplay] = useState(false);

  const handleHoverUpdate = (newState) => {
    setHover(newState);
  }

  const handleDisplayUpdate = () => {
    console.log('display is now', shareDisplay);
    setShareDisplay(!shareDisplay);
  }

  return (
    <div className='author-and-share'>
      <div className='author'>
        <Image src={Avatar} className='author-image' />
        <div className='author-text'>
          <h5 className='author-name'> Michelle Appleton </h5>
          <p className='publish-date'> 28 Jun 2020 </p>
        </div>
      </div>
      <ShareButton hover={hover} onHoverUpdate={handleHoverUpdate} onDisplayUpdate={handleDisplayUpdate}/>
    </div>
  )
}

export default ShareArticle