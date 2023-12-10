import './App.css';
import Login from './component/Login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
