import {combineReducers} from 'redux';
import projects from './projectReducer';


const rootReducer = combineReducers({
	projects //short hand property name
});

export default rootReducer;