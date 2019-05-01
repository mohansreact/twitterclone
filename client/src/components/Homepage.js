import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => (
    <div className="home-hero">
        <h1>Homepage </h1>
        <h1>New To Twitter </h1>
        <Link to="/signup" className="btn btn-primary">
            SignUp
        </Link>
    </div>
);

export default Homepage;