import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, setActiveThumbnailImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailList

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnailImage = () => {
    setActiveThumbnailImage(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
