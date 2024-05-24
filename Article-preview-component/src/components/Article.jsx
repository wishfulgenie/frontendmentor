/** Image Imports */
import Drawers from '../../assets/images/drawers.jpg'
import Avatar from '../../assets/images/avatar-michelle.jpg'

/** Component Imports */
import Image from './Image'
import ShareButton from './ShareButton'

const Article = () => {
  return (
    <div className="article-and-image">
      <Image src={Drawers} className='article-image'/>
      <div className="article">
        <h2 className='article-title'> Shift the overall look and feel by adding these wonderful touches to furniture in your home </h2>
        <p className='article-text'> Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to make any room feel comfortable </p>
        <div className='author-and-share'>
          <div className='author'>
            <img src={Avatar} className='author-image' />
            <div className='author-text'>
              <h5 className='author-name'> Michelle Appleton </h5>
              <p className='publish-date'> 28 Jun 2020 </p>
            </div>
          </div>
          <ShareButton />
        </div>
      </div>
    </div>
  )
}

export default Article;