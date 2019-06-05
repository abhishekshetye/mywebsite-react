import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from  'redux';
import {MiddleComponent} from './MiddleComponent';
import {Project} from './projects/Project';
import {connect} from 'react-redux';

import background from '../../../images/background.jpeg';
import '../../styles/styles.css';

class HomePage extends React.Component { 
	
	constructor(props, context){
		super(props, context);
		this.state = {
			project: {
				title: "WaterMeter",
				description: "Android app which shows the amount of water consumed",
				backgroundImg: ""
			}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const project = this.state.project;
		project.title = event.target.value;
		this.setState({project: project});
	}


	onClickSave(event) {
		//alert(`Saving ${this.state.project.title}`);
		this.props.createProject(this.state.project);
	}

	projectRow(project, index){
		return <div key={index}>{project.title}</div>;
	}
	//whatever defined in rootreducer

	render(){
		return (
			<div className="jumbotron" id="title-container">
			<div className="titleNameContainer">
				<h1 className="titleNameText">Abhishek Shetye</h1>
				<p>A developer who likes to build cool stuff. Ping me at [ abhishekrshetye@gmail.com ]</p>
			</div>
				{this.props.projects.map(this.projectRow)}
				<MiddleComponent/>
				{console.log(this.state.project)}
				<Project project={this.state.project}/>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.project.title} />
				<input
					type="submit"
					value="Save"
					className="btn btn-primary"
					onClick={this.onClickSave} />

				<Link to="projects">Projects</Link>
			</div>
		);
	}
}


function mapStateToProps(state, ownProps){
	return {
		projects: state.projects //whatever defined in rootreducer
	};
}


function mapDispatchToProps(dispatch){
	return {
		createProject: project => dispatch(createProjectAction(project)) // It's the 2nd way of injecting actions
	};
}

function createProjectAction(project){
	return { type: 'CREATE_PROJECT', project };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage); //if we don't define 2nd param, connect will automatically add dispatch prop for us.





