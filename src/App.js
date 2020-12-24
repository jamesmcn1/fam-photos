import React from 'react';
import './App.css';
import NormalImageList from './components/NormalImageList';
import './components/GDImageViewer.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>McNamara fam photos</h1>
        <NormalImageList />
      </header>
    </div>
  );
}

export default App;
