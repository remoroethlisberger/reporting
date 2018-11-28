import React from 'react';
import '../css/navbar.css';

class Navbar extends React.Component{

  render(){
    return(
      <div className="navbar">
        <ul>
          <li>
            <a href="/projekte">Projekte</a>
          </li>
          <li>
            <a href="/about">Über mich</a>
          </li>
          <li>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
