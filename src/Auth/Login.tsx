import React from "react";
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import App from "../App";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-800 text-white">
            <p> Please provide login credentials</p>
            <div> U are in login screen: <Link to="/" className="link link-hover">Go back</Link></div>
            <span><input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs text-black" /> </span>
            <p><input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs text-black" /> </p>
        </div>
    )
}

