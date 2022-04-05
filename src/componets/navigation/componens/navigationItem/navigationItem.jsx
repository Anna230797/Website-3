import React from "react";

function NavigationItem({ icon, title }) {
  return (
    <div className="item_cont">
      <div className="table">
        <div className="item_icon">
          <img src={icon} />
        </div>
        <div className="item_title">{title}</div>
        <div className="item_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>
      </div>
    </div>
  );
}
export default NavigationItem;
