import React from 'react'

function ButtonItem ({btnName}){
    return (
<div className="navigation_btn1">
              <button>
                <a href="#">{btnName}</a>
              </button>
            </div>
    )
}
export default ButtonItem