import React from "react";
import s from "./footer.css";
import LinkItem from "./componens/linkItem/linkItem";
import SocialItem from "./componens/socialItem/socialItem";
import icon3 from "./icon/img4.svg";
import icon4 from "./icon/img5.svg";
import icon5 from "./icon/img6.svg";
import icon6 from "./icon/img7.svg";
import icon7 from "./icon/img8.svg";

function Footer(props) {
  return (
    <div className="box_five">
      <div className="container">
        <div className="description_box">
          <div className="description">
            <div className="description_title">about velocity</div>
            <div className="description_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </div>
          </div>
          <div className="link">
            <div className="link_title">useful links</div>
            <div className="link_list">
              <LinkItem nameLink="Phasellus gravida semper nisi" />
              <LinkItem nameLink="Suspendisse nisl elit" />
              <LinkItem nameLink="Dellentesque habitant morbi" />
              <LinkItem nameLink="Etiam sollicitudin ipsum" />
            </div>
          </div>
          <div className="social">
            <div className="social_title">social</div>
            <div className="social_list">
              <SocialItem icon={icon3} socialName="Twitter" />
              <SocialItem icon={icon4} socialName="Facebook" />
              <SocialItem icon={icon5} socialName="Pinterest" />
              <SocialItem icon={icon6} socialName="Google" />
              <SocialItem icon={icon7} socialName="Webflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
