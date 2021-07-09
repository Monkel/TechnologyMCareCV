import React from 'react';
import About from './fragments/About.js';
import SkillsProfile from './fragments/SkillsProfile.js';
import WorkExperience from './fragments/WorkExperience.js';
import Education from './fragments/Education.js';
import Aspirations from './fragments/Aspirations.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css';

export default class Navigation extends React.Component {
  render() {    
	return (
		<header>
	  <nav className="Nav">
		<router>
		<div >
			<ul >
			{/*Naviation bar to take to the different pages using href and route path and component*/}
			  <img src="CV.png"></img>
			  <li >
				  <a href="/About">About Me</a>
			  </li>
			  <li >
			  	  <a href="/SkillsProfile">Skills Profile</a>
			  </li>
			  <li >
			  	  <a href="/WorkExperience">Work Experience</a>
			  </li>
			  <li >
			  	  <a href="/Education">Education</a>
			  </li>
			  <li >
			  	  <a href="/Aspirations">Aspirations</a>
			  </li>
			</ul>
		  </div>
		  <Route path="/About" component={About} />
		  <Route path="/SkillsProfile" component={SkillsProfile} />
		  <Route path="/WorkExperience" component={WorkExperience} />
		  <Route path="/Education" component={Education} />
		  <Route path="/Aspirations" component={Aspirations} />
		</router>
		  
	  </nav>
	  </header>
	);
  }
}