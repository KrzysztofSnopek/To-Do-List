import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Completed from './Completed';
import Error from './Error';
import SharedLayout from './SharedLayout';
import './App.css';

function App() {
  return (
       <Routes>
         <Route path='/' element={<SharedLayout />}>
         <Route index element={<Home />} />
         <Route path='completed' element={<Completed />} />
         <Route path='*' element={<Error />} />
         </Route>
       </Routes>
  );
}



export default App;
