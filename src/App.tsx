import React from 'react';
import './App.css';
import NameChange from './components/NameChange';
import ColorChange from './components/ChangeColor';
import AgeChange from './components/AgeChange';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 id='hello'>Hello</h2>
        </div>
        <ColorChange />
      </header>

      <NameChange/>
      <AgeChange/>
    </div>
  );
}

export default App;
