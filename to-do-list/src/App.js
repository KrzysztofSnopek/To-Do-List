import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Completed from './Completed';
import Error from './Error';
import SharedLayout from './SharedLayout';
import {GlobalStyle} from './styles/Globalstyle';

function App() {
  return (
      <div className='container box'>
      <GlobalStyle />
       <Routes>
         <Route path='/' element={<SharedLayout />}>
         <Route index element={<Home />} />
         <Route path='completed' element={<Completed />} />
         <Route path='*' element={<Error />} />
         </Route>
       </Routes>
      </div>
  );
}



export default App;
