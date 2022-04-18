import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/home';
import User from './views/user';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
    </Router>
  );
}

export default App;
