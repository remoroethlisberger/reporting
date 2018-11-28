import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import '../css/app.css';

class App extends React.Component{
  render() {
    return (
    <div className="app">
      <h1>Remo's erstes Node JS Projekt</h1>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
    );
  }
}

export default App;
