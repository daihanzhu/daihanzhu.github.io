import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h1 className="footer-header">Find me elsewhere</h1>
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
              Code by&nbsp;
              <a href="https://github.com/walinga" rel="noopener noreferrer" target="_blank">
                Matthew
              </a>. Designed in 2025
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
