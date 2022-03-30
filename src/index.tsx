import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { AuthProvider } from './context/AuthContext';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
