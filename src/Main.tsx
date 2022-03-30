import React from "react";
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import App from "./App";

export default function Main() {
    return (
        <div>
            <div>Main text</div>
            <Link to="/login" className="link link-hover" >Login </Link>
            <Link to="/logout" className="link link-hover" >Logout</Link>
        </div>
    )
}

