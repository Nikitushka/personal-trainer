import React from 'react';
import { Link } from 'react-router-dom';
import"bootstrap/dist/css/bootstrap.min.css";
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';

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
    <li className="nav-item">
        <Link className="nav-link" to="/"><EmojiPeopleSharpIcon />Customers</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/trainings"><AccessibilitySharpIcon />Trainings</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/calendar"><EventAvailableSharpIcon />Calendar</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/statistics"><EqualizerSharpIcon />Statistics</Link>
    </li>
</ul >
</div>
</nav>
)
}