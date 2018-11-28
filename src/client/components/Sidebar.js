import React from 'react';
import '../css/sidebar.css';

class Sidebar extends React.Component{

  render(){
    return(
      <div className="sidebar">
        <ul>
          <li>
            <a href="/projekte">Projekte</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
