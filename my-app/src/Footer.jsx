import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h1>Looking for more?</h1>
            <p><a href="https://www.linkedin.com/in/daihan/" target="_blank">LinkedIn</a> /
                <a href="https://github.com/daihanzhu" target="_blank"> Github</a> /
                <a href="https://dribbble.com/daihan" target="_blank"> Dribble</a> /
                <a href="https://www.instagram.com/dianezhu/" target="_blank"> Instagram</a> /
                <a href="https://medium.com/@daihan" target="_blank"> Medium</a> /
                <a href="mailto:daihanzhu@gmail.com" target="_blank"> daihanzhu@gmail.com </a></p>
            <hr className="line"></hr>
            <p>Made by <a href="https://walinga.github.io" target="_blank">Walinga</a> & Daihan with &lt;3 in 2018</p>
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
