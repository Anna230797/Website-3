import React from 'react'

function CollectionItem({photo, title}){
    return (
        <div className="collection_table">
        <div className="collection_img">
          <img src={photo} />
        </div>
        <div className="collection_title">{title}</div>
        <div className="collection_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
        </div>
        <div className="collection_btn">
          <button><a href='#'>Learn more </a></button>
        </div>
      </div>
    )
}
export default CollectionItem