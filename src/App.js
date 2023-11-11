// App.js

import React from 'react';
import Navbar from './Navbar';
import './App.css'; // Import the CSS file for the styling
import UpperSection from './Uppersection';
import LowerSection from './Lowersection';

const App = () => {
  return (
    <div className="app-container">
       <UpperSection/>
       <LowerSection/>
       

      </div>
      

  );
}

export default App;
