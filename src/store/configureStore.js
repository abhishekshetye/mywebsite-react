import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
	//can use to initialize store with state

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxImmutableStateInvariant())
		);
}