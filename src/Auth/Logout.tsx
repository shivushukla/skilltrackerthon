import React from "react";
import {Link} from "react-router-dom";

export default function Logout() {
    return (
        <div> U are in logout screen: <Link to="/" className="link link-hover" >Go back</Link></div>
    )
}

