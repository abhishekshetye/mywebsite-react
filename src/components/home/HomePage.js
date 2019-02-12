import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render(){
		return (
			<div className="jumbotron" id="title-container">
				<h1>Abhishek Shetye</h1>
				<Link to="projects">Projects</Link>
			</div>
		);
	}
}

export default HomePage;