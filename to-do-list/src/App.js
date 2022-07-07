import React, {Component} from 'react';
import Header from './Header';
import './App.css';
import NewToDoForm from './NewToDoForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NewToDoForm />
    </div>
  );
}

export default App;
