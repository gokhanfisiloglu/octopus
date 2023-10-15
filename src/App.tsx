import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Table from './components/Table/Table';
import Dashboard from './components/Dashboard/Dashboard';


function App() {

    const userDataString = sessionStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (!userData && window.location.pathname !== "/signin") {
        const signInURL = "/signin";


        window.location.href = signInURL;
        return null;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/table" element={<Table />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
