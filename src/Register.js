import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Register() {
	const navStyle ={ color: 'white' };
  return (
    <div class="log">
		<p></p>
		<h2>Register</h2>
		<p></p>
		<p></p>
		<input class="content" type="text" placeholder="Name"/>
		<p></p>
		<p></p>
        <input class="content" type="password" placeholder="password"/>
		<p></p>
		<p></p>
		<Link to="/search"><button class="button">ENTER</button></Link>
		<p></p>
    </div>
  );
}

export default Register;