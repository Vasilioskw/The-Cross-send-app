import React from 'react';
// import { Router } from 'react-router-dom';
// import {Container, Button, cols, rows, form} from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
