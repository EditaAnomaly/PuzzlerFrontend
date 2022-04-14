import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Menu/>
      </div>
    </div>
  );
}

export default App;
