import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h1>Looking for more?</h1>
            <p>LinkedIn / Github / Dribble / Instagram / Medium / daihanzhu@gmail.com </p>
            <hr className="line"></hr>
            <p>Made by Walinga & Daihan with &lt;3 in 2018</p>
          </div>
          <div className="footer-image-wrapper">
            <img src={require("./images/cat-with-plant.png")} alt="Cat with plant" className="footer-image"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
