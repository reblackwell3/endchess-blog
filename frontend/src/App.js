import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPosts from './posts/Post'
import Navbar from './navbar/Navbar'
import About from './about/About'
import AppRoutes from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
