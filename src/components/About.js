import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <div className='About' id="about">
      <div className="content-container">
        <div className="text-container">
          <h2>O mnie</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl at dapibus volutpat, eros arcu sollicitudin lorem, eu faucibus dolor purus non est.</p>
          <button>Kliknij mnie</button>
        </div>
        <div className="image-container">
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.1&permmsgid=msg-f:1797491859383923211&th=18f1f952953c320b&view=att&disp=safe&realattid=f_lvi3e10c0" alt="Opis obrazka" />
        </div>
      </div>
    </div>
  );
}

export default About;
