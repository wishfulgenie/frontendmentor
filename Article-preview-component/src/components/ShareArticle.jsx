import { useState } from 'react';

/** Image Imports */
import Avatar from '../../assets/images/avatar-michelle.jpg'
import Facebook from '../../assets/images/icon-facebook.svg'
import Twitter from '../../assets/images/icon-twitter.svg'
import Pinterest from '../../assets/images/icon-pinterest.svg'

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
    setShareDisplay(!shareDisplay);
  }

  return (
    shareDisplay 
    ? 
    <div className='share-links'>
      <div className="links">
        <p>SHARE</p>
        <div className='clickable-links'>
          <Image src={Facebook} className='clickable-link' />
          <Image src={Twitter} className='clickable-link' />
          <Image src={Pinterest} className='clickable-link' />
        </div>
      </div>
      <ShareButton hover={hover} shareDisplay={shareDisplay} onHoverUpdate={handleHoverUpdate} onDisplayUpdate={handleDisplayUpdate}/>
    </div> 
    : 
    <div className='author-and-share'>
      <div className='author'>
        <Image src={Avatar} className='author-image' />
        <div className='author-text'>
          <h5 className='author-name'> Michelle Appleton </h5>
          <p className='publish-date'> 28 Jun 2020 </p>
        </div>
      </div>
      <ShareButton hover={hover} shareDisplay={shareDisplay} onHoverUpdate={handleHoverUpdate} onDisplayUpdate={handleDisplayUpdate}/>
    </div>
  )
}

export default ShareArticle