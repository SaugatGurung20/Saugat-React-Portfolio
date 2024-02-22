import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      <p>Copyright © 2023 Saugat Gurung</p>
      <div>
        <a href="#" className="text-white mx-2">Privacy Policy</a>
        <span className="mx-2 text-white">|</span>
        <a href="#" className="text-white mx-2">Terms of Service</a>
      </div>
      <a href="#contact" className="text-white mt-3 d-block">Contact Me</a>
      <a href="#top" className="btn btn-primary mt-3">Back to Top</a>
    </footer>
  );
};

export default Contact;
