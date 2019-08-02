import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EventList />
    </div>
  );
}

export default App;
