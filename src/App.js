import React from 'react'
import './App.css';
import InputSearch from './InputSearch'
import {AutoCompleteProvider} from './AutoCompleteContext'

function App() {
  return (
    <AutoCompleteProvider>
    <div className="App">
      <header className="App-header">
        <InputSearch/>
      </header>
    </div>
    </AutoCompleteProvider>
  );
}

export default App;
