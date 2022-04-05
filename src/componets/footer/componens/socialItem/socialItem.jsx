import React from 'react';

function SocialItem({icon, socialName}) {
  return (
    <div className="social_img">
      <img src={icon} />
      <li>
        <a href="#">{socialName} </a>
      </li>
    </div>
  );
}
export default SocialItem;
