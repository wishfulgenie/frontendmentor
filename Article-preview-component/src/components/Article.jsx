/** Image Imports */
import Drawers from '../../assets/images/drawers.jpg'

/** Component Imports */
import Image from './Image'

const Article = () => {
  return (
    <div className="article-and-image">
      <Image src={Drawers} className='article-image'/>
      <div className="article">
        <h2 className='article-title'> Shift the overall look and feel by adding these wonderful touches to furniture in your home </h2>
        <p className='article-text'> Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to make any room feel comfortable </p>
      </div>
    </div>
  )
}

export default Article;