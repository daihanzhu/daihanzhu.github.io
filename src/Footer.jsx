import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h1 className="footer-header">More stuff</h1>
            <p><a href="https://www.linkedin.com/in/daihan/"
                  rel="noopener noreferrer"
                  target="_blank">LinkedIn</a> /
                <a href="https://github.com/daihanzhu"
                  rel="noopener noreferrer"
                  target="_blank"> Github</a> /
                <a href="https://dribbble.com/daihan"
                  rel="noopener noreferrer"
                  target="_blank"> Dribbble</a> /
                <a href="https://www.instagram.com/dianezhu/"
                  rel="noopener noreferrer"
                  target="_blank"> Instagram</a> /
                <a href="https://medium.com/@daihan"
                  rel="noopener noreferrer"
                  target="_blank"> Medium</a> /
                <a href="mailto:daihanzhu@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"> daihanzhu@gmail.com </a></p>
            <hr className="line"></hr>
            <p className="goodbye-text">&lt;/&gt; by
              <a href="https://walinga.github.io" rel="noopener noreferrer" target="_blank"> Matthew </a>
              and Daihan with
              <span role="img" aria-label="face-mask emoji"> 😷 </span>
              in 2021
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
