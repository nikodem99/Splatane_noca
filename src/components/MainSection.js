import React, { useState, useEffect } from 'react';
import '../styles/MainSection.scss';

const MainSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;  // Zakładając, że masz trzy slajdy

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000); // Przewija slajdy co 4 sekundy

    return () => clearInterval(intervalId);
  }, []);

  const moveSlide = (newIndex) => {
    setCurrentSlide(newIndex);
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  }

  return (
    <main className="main-section" id="home">
      <div className="slider">
      <div className="slider-overlay">
          <h2>Splątane nocą</h2>
          <p>A captivating exploration of night and its mysteries</p>
        </div>
        <div className="slide_viewer">
          <div className="slide_group" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="slide" style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.6&permmsgid=msg-f:1797497001492421343&th=18f1fdffd2c91adf&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_6oSPp-dpFYOm1INARWbMs-7qiFYWCd0ANtn7FPaP3Yjwk9_EWvBwVuWYJJCam9StdZvwu53ljayC6lafZzam7Zrd_gthxPtvz56-HJDTChXdWeDNQ1PdjMpI&disp=emb&realattid=ii_lvi6at2u5)' }}></div>
            <div className="slide" style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.2&permmsgid=msg-f:1797498553258108901&th=18f1ff691f3a67e5&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_yXy9VBr7lZjfvc31VMYY4kgVtjHZXH74vZUZc-f99GBYbkPImyZX7pZ7vH-4LNrWF74g15awbAhOQ7pzUm1Dn9K9uHYv9x3sgZrEeeeZCu9Q7X6gtlNI-SqA&disp=emb&realattid=ii_lvi3zdzx1)' }}></div>
            <div className="slide" style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.2&permmsgid=msg-f:1797498553258108901&th=18f1ff691f3a67e5&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_yXy9VBr7lZjfvc31VMYY4kgVtjHZXH74vZUZc-f99GBYbkPImyZX7pZ7vH-4LNrWF74g15awbAhOQ7pzUm1Dn9K9uHYv9x3sgZrEeeeZCu9Q7X6gtlNI-SqA&disp=emb&realattid=ii_lvi3zdzx1)' }}></div>
            <div className="slide" style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.3&permmsgid=msg-f:1797497691791298133&th=18f1fea08bce0e55&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_y-MUM8r5YG3gPr6ALxCQ3IW8ACECR1QpJ3J3DrlAmW_vNcIGGBRf-Z4DmjWKvCZ5vnuXe8JfEb0IxMr-nYFy3dHznqxk4IveOiCPu_Vpn5DCgi6EbnaXHWBQ&disp=emb&realattid=ii_lvi42xe23)' }}></div>
            <div className="slide" style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.4&permmsgid=msg-f:1797497691791298133&th=18f1fea08bce0e55&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-k1t4e8KrcP5qZJ8B6_AnwIPs74yh0XwDuSrR1Ff1nCWAS3IWMNV5_zhV8EmibxGzyp7SB69e9KMIKHY6RZFIskJIvdlJDUOQHc7vIGH4DuKS0SuntFNSFl4w&disp=emb&realattid=ii_lvi439br4)' }}></div>
          </div>
        </div>
        <div className="slide_buttons">
          {[...Array(totalSlides).keys()].map(index => (
            <button key={index} className={`slide_btn ${index === currentSlide ? 'active' : ''}`} onClick={() => moveSlide(index)}>&bull;</button>
          ))}
        </div>
        <div className="directional_nav">
          <button className="previous_btn" onClick={prevSlide}>&lt;</button>
          <button className="next_btn" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </main>
  );
};

export default MainSection;

// vdege//
