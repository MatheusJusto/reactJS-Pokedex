import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import './App.css';

import NavBar from './components/layout/NavBar'
import DashBoard from './components/layout/DashBoard'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
