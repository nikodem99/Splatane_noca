import React from 'react';
import '../styles/Contact.scss'; // Make sure the path to your CSS file is correct

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="rectangle">
        <div className="content">
          <h1 className="h1-Contact">Contact</h1>
          <p className="p-Contact">opis kontaktu itp</p>
        </div>
        <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/316409887_107787655494222_7091586862202668997_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=MiBG241nRY8Q7kNvgHPbL4o&_nc_ht=scontent-waw2-2.xx&oh=00_AYD6vVbydHsGW4fwdSsDsC1bUGW6-wSTgQO_Y4wOzDZP7w&oe=66BEA0C6" alt="Beach" />
      </div>
    </div>
  );
};

export default Contact;
