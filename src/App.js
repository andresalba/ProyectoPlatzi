/*Versión Uber para Escuela de Javascript - Platzi
Creado por: Andrés Alba
22 noviembre 2019*/

import React, {Component} from 'react';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import Search from './Search.js';
import Login from './Login.js';
import Register from './Register.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component{

	render(){
		return(
			<div class="cont">
				<div class="item1"><img id="imagen" src="/img/car-icon5.png" alt=""/></div>
				<div class="item1"><a href="https://yahoo.com" >About</a></div>
				<div class="item1"><a href="https://mail.com" >Products</a></div>
				<div class="item1"><a href="https://gmail.com" >Contact us</a></div>
				<div class="item1"><a href="/login" target="_blank"><input id="imagen" type="image" src="img/sing-in-icon1.jpg" alt=""/></a></div>
				<div class="item1"><a href="/register" target="_blank"><input id="imagen" type="image" src="img/sing-up-icon1.jpg" alt=""/></a></div>
				<div class="item2">
			    <Router>	
					<Switch>
						<Route path="/" exact component={Login}/>
						<Route path="/login" component={Login}/>
						<Route path="/register" component={Register}/>
						<Route path="/search" component={Search}/>
					</Switch>
				</Router>
				</div>
				<div class="item3"><a href="https://www.facebook.com" target="_blank"><input id="imagen" type="image" src="img/face-icon1.png" alt=""/></a></div>
				<div class="item4"><a href="https://twitter.com" target="_blank"><input id="imagen" type="image" src="img/twit-icon4.png" alt=""/></a></div>
				<div class="item5"><a href="https://www.youtube.com" target="_blank"><input id="imagen" type="image" src="img/yout-icon5.png" alt=""/></a></div>
				</div>
		);
	}
	
}

export default App;
