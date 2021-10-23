import React from "react";
import date from '../../static/updateDate';
import './styles.scss';

function Footer() {
  return (
    <div class="footer">
      <p>Website updated on {date}.</p>
    </div>
  ); 
}

export default Footer;