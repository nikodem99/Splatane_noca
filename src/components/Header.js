import React, { useState } from 'react';
import '../styles/Header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);  // Stan do zarządzania widocznością menu

    const toggleMenu = () => setIsOpen(!isOpen);  // Funkcja do przełączania menu

    return (
      <div className="header">
         <div className="logo">
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=54e487ae92&attid=0.9&permmsgid=msg-f:1797498553258108901&th=18f1ff691f3a67e5&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ99aMT_pqL601wqaUz2DRgypr6uUaWwjsKKjx7dJciTVr0DPjsMBjKmbUvBR0-ekepoy68I18t1w-Oa9P-AkY6mTtUUKxhZaUmYl-FTCE840lXlWREGcy5-Abs&disp=emb&realattid=ii_lvi7286l8" alt="Logo" />  
        </div>
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        <nav className={`navbar ${isOpen ? 'active' : ''}`}> 
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#category">Kategorie</a></li>
            <li className="nav-item"><a href="#about">O mnie</a></li>
            <li className="nav-item"><a href="#find-me">Znajdź mnie</a></li>
            <li className="nav-item"><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;
