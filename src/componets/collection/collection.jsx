import React from 'react'
import s from './collection.css'
import CollectionItem from './componens/collectionItem/collectionItem';
import photo from "./images/im2.png";
import photo1 from "./images/im3.png";

function Collection(props){

return (
    <div className="box_three">
    <div className="container">
      <div className="collection_head">services</div>
      <div className="collection_subtitle">
        This is some text inside of a div block.
      </div>
      <div className="collection_content">
       <CollectionItem photo={photo} title="SERVICES one"/>
       <CollectionItem photo={photo1} title="SERVICES two"/>
      </div>
    </div>
  </div>
)
}
export default Collection