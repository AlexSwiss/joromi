import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <EventList />
    </div>
    </Provider>
  );
}

export default App;
