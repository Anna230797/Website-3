
import React from 'react'
import s from './section.css'
import ButtonItem from './componens/buttonItem/buttonItem'
import photo2 from "./images/im4.png";

function Section(props){
    return (
<div className="box_four">
        <div className="container">
          <div className="navigation_head">Tab Section</div>
          <div className="navigation_subtitle">
            This is some text inside of a div block.
          </div>
          <div className="navigation_btn">
         < ButtonItem btnName='Tab Button 1' />
         < ButtonItem btnName='Tab Button 2' />
         < ButtonItem btnName='Tab Button 3' />
          </div>
          <div className="navigation_img">
            <img src={photo2} />
          </div>
          <div className="navigation_title">Some Title Here</div>
          <div className="navigation_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
      </div>
    )
}
export default Section