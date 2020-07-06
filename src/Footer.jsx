import React, { Component } from 'react';
import './Footer.css';

/* eslint react/jsx-no-target-blank: 0 */
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {this.props.preFooter && <div className="pre-footer">
          <h1>Writing</h1>
            <p><a href="https://uxdesign.cc/westjet-connect-a-ux-case-study-2c15b1888bf5?gi=6632c972ab8a" target="_blank">🔗 Westjet Connect - A UX Case Study</a>
                <br/><br/>
                <a href="https://medium.com/@daihan/flixbus-take-a-ride-through-customer-experience-design-d15d744461f8" target="_blank">🔗 Flixbus — Take a Ride Through Customer Experience Design</a>
                <br/><br/>
                <a href="https://medium.com/@daihan" target="_blank">More on <u>medium.com/@daihan</u></a>
              </p>
        </div>}
        <div className="footer-content">
          <div className="footer-image-wrapper">
            <img src={require("./images/stars.png")} alt="Stars" className="footer-image"></img>
          </div>
          <div className="footer-text">
            <h1 className="footer-header">More stuff</h1>
            <p><a href="https://www.linkedin.com/in/daihan/" target="_blank">LinkedIn</a> /
                <a href="https://github.com/daihanzhu" target="_blank"> Github</a> /
                <a href="https://dribbble.com/daihan" target="_blank"> Dribbble</a> /
                <a href="https://www.instagram.com/dianezhu/" target="_blank"> Instagram</a> /
                <a href="https://medium.com/@daihan" target="_blank"> Medium</a> /
                <a href="mailto:daihanzhu@gmail.com" target="_blank"> daihanzhu@gmail.com </a></p>
            <hr className="line"></hr>
            <p className="goodbye-text">&lt;/&gt; by <a href="https://walinga.github.io" target="_blank">Matthew</a> and Daihan with 🥑in 2020</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
