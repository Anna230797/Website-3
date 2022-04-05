import React from 'react'
import s from './navigation.css'
import NavigationItem from './componens/navigationItem/navigationItem'
import icon from "./icon/img1.svg";
import icon1 from "./icon/img2.svg";
import icon2 from "./icon/img3.svg";


function Navigation (props){
    return (
<div className="box_two">
        <div className="container">
          <div className="item_head">what we do</div>
          <div className="item_subtitle">
            This is some text inside of a div block.
          </div>

          <div className="item_cont">
         < NavigationItem icon={icon} title="Graphic Design"/>
         < NavigationItem icon={icon1} title="Awesome code"/>
         < NavigationItem icon={icon2} title="free template"/>
          </div>
        </div>
      </div>
    )
}
export default Navigation