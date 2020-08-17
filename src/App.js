import React from 'react';
import './App.css';
import Slider from './components/Slider'
import ReactNotification from 'react-notifications-component'


function App() {
  return (
    <div className="App">
    <ReactNotification />
    <Slider />
    </div>
  );
}

export default App;
