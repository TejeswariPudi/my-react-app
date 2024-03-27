// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import './components/global.css'; // Adjust the import path for the CSS file




import Header from './components/Header';
import Home from './components/Home';
import Mensware from './components/Mensware';
import Vehicles from './components/Vehicles';
import Kidsware from './components/Kidsware';
import Womensware from './components/Womensware';
import Userprofile from './components/Userprofile';
import Login from './components/Login';

import './App.css'; // Adjust the import path for the CSS file
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mensware'element={<Mensware />} />
        <Route path='/Vehicles' element={<Vehicles />} />
        <Route path='/Kidsware' element={<Kidsware />} />
        <Route path='/Womensware' element={<Womensware />} />
        <Route path='/Userprofile' element={<Userprofile />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
