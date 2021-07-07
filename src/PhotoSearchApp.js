import React from 'react'
import './PhotoSearchApp.css';
import SearchPage from './pages/SearchPage'
import { PhotoSearchAppContextProvider } from './PhotoSearchAppContext';

function App() {
  return (
    <PhotoSearchAppContextProvider>
    <div className="App">
      <header className="App-header">
        <SearchPage/>
      </header>
    </div>
    </PhotoSearchAppContextProvider>
  );
}

export default App;
