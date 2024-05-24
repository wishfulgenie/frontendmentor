/** Image Imports */
import Drawers from '../../assets/images/drawers.jpg'

/** Component Imports */
import Image from './Image'
import ShareArticle from './ShareArticle'
import ArticleIntro from './ArticleIntro'

const Article = () => {
  return (
    <div className="article-and-image">
      <Image src={Drawers} className='article-image'/>
      <div className="article">
        <ArticleIntro/ >
        <ShareArticle />
      </div>
    </div>
  )
}

export default Article;