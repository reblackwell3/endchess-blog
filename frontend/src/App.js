import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllPosts from './posts/Post'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AllPosts />
      </main>
    </div>
  );
}

export default App;
