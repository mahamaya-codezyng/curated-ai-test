import React from 'react';
import Header from './components/Header';
import './index.css'
import './components/InsertImage'
import 'bootstrap/dist/css/bootstrap.min.css';
import InsertImage from './components/InsertImage';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App bg-dark text-light p-3">
      <Helmet>
        <link rel="icon" href="/logo.png" />
        <title>Curated</title>
      </Helmet>
      <Header />
      <InsertImage />
    </div>
  );
}

export default App;
