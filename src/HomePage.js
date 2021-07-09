import React, { Component } from 'react';
import Navigation from './Navigation.js';
import About from './fragments/About.js';
import Skills from './fragments/SkillsProfile.js';
import WorkExperience from './fragments/WorkExperience.js';
import Education from './fragments/Education.js';
import Aspiration from './fragments/Aspirations.js';


export default class HomePage extends Component {
	render() {
		return (
			<section>
				<Navigation />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<WorkExperience />
							<Education />
							<Aspiration />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
