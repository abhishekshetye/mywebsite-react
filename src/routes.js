import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import {Project} from './components/home/projects/Project';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="projects" component={Project}/>
	</Route>
);