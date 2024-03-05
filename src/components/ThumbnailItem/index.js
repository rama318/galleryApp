// ThumbnailItem.js
import React from 'react'
import './index.css'

const ThumbnailItem = props => {
  const {imagesListDetails, setActiveTabId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesListDetails

  const onClickNatureButton = () => {
    setActiveTabId(id)
  }

  const thumbnailClassName = isActive ? 'thumbnail image' : 'thumbnail'

  return (
    <li className="list-container">
      <button
        type="button"
        className="nature-button"
        onClick={onClickNatureButton}
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
