import React from 'react';

import './App.css';
import data from '../assets/data/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data.wing1.encounters.vale_guardian.label}
        </p>
      </header>
    </div>
  );
}

export default App;
