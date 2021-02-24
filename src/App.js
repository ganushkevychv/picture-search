import React from 'react'
import './App.css';
import InputSearch from './InputSearch'
import { AppContextProvider } from './AppContext';

function App() {
  return (
    <AppContextProvider>
    <div className="App">
      <header className="App-header">
        <InputSearch/>
      </header>
    </div>
    </AppContextProvider>
  );
}

export default App;
