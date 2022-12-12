// Write your code here.
import './index.css'

const BannerCardItem = prop => {
  const {bannerCardsList} = prop
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`${className} list-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="show-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
