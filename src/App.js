import React from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import './index.css'
import './components/InsertImage'
import 'bootstrap/dist/css/bootstrap.min.css';
import InsertImage from './components/InsertImage';


function App() {
  return (
    <div className="App bg-dark text-light p-3">
      <Header />
      <InsertImage />
    </div>
  );
}

export default App;
