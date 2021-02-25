import React from 'react'
import './PhotoSearchApp.css';
import InputSearch from './components/InputSearch'
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
