// Write your code here.
import './index.css'

const BannerCardItem = prop => {
  const {cardItems, key} = prop
  console.log(key)
  const {headerText, description, className} = cardItems
  return (
    <li className="list-container">
      <div className={className}>
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
