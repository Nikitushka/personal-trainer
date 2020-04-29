import React from 'react';
import { Link } from 'react-router-dom';
import"bootstrap/dist/css/bootstrap.min.css";

// Inside the return statement
export default function Navigator(){
return (
<nav className="navbar navbar-expand-lg navbar-light bg -light">
<button className="navbar-toggler navbar-toggler-right" type="button"
    data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<Link className="navbar-brand" to ="/" >Personal Trainer</Link>
<div className="collapse navbar-collapse" id ="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Customers</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/trainings">Trainings</Link>
    </li>
</ul >
</div>
</nav>
)
}