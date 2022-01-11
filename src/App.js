import React from 'react';
import Header from './Attributes/Header';
import LoginForm from './Forms/LoginForm';
import Register from './Forms/Register';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Forms/Home';
import Intro from './Forms/Intro';
// import { Link, Route } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Header></Header>
        <Routes>

          <Route path="/" element={<Intro />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>


      </div >
    </BrowserRouter>


  );
}


export default App;


