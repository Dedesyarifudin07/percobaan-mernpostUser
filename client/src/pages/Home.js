import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Signin from '../components/Signin';
import SignUp from '../components/SignUp';
const Home = () => {
  return (
    <div>
        <h1>login page</h1>
        <Router>
            <Routes>
                <Route path="Signin" element={<Signin/>}/>
                <Route path="Signup" element={<SignUp/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes> 
        </Router>

    </div>
  )
}

export default Home
