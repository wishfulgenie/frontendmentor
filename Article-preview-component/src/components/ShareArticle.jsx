/** Image Imports */
import Avatar from '../../assets/images/avatar-michelle.jpg'

/** Component Imports */
import Image from './Image'
import ShareButton from './ShareButton'

const ShareArticle = ({}) => {
  return (
    <div className='author-and-share'>
      <div className='author'>
        <Image src={Avatar} className='author-image' />
        <div className='author-text'>
          <h5 className='author-name'> Michelle Appleton </h5>
          <p className='publish-date'> 28 Jun 2020 </p>
        </div>
      </div>
      <ShareButton />
    </div>
  )
}

export default ShareArticle