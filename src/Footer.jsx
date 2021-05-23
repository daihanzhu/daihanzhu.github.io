import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h1 className="footer-header">More Stuff.</h1>
            <p><a href="https://www.linkedin.com/in/daihan/"
                  rel="noopener noreferrer"
                  target="_blank">LinkedIn</a> |&nbsp;
                <a href="https://dribbble.com/daihan"
                  rel="noopener noreferrer"
                  target="_blank">Dribbble</a> |&nbsp;
                <a href="https://medium.com/@daihan"
                  rel="noopener noreferrer"
                  target="_blank">Medium</a> |&nbsp;
                <a href="mailto:daihanzhu@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank">daihanzhu@gmail.com</a>
              <br/>
              &lt;/&gt; by&nbsp;
              <a href="https://walinga.github.io" rel="noopener noreferrer" target="_blank">
                Matthew
              </a>, photographs by&nbsp;
              <a href="https://www.sheenazilinski.com/" rel="noopener noreferrer" target="_blank">
               Sheena Zilinski
              </a>. Designed in 2021
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
