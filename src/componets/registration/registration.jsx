import React from 'react'
import s from './registration.css'
import images from "./images/im1.png";


function Registration (props){
    return(
<div className="box_one">
        <div className="name">This is Velocity</div>
        <div className="btnOne">
          <button>
            <a href="#">sign up </a>
          </button>
          <button>
            <a href="#">Learn more</a>
          </button>
        </div>
      </div>
    )
}
export default Registration