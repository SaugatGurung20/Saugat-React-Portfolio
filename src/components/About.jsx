import React from 'react';

const About = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 id="about">About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-md-6">
            <h4 id="contact">Contact Me</h4>
            <div className="contact-info">
              <p className="email">Email: grgsaugat2015@gmail.com</p>
              <p>Phone: 03749550220</p>
              <p>Github: <a href="https://github.com/SaugatGurung20" target="_blank">https://github.com/SaugatGurung20</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
