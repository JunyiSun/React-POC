"use strict";
import { combineReducers } from "redux";
import { INIT_NOTES, ADD_NOTE, DELETE_NOTE } from "../action/action.jsx";


function notes(state = [ ], action){
	//refresh whenever make changes
	switch(action.type){
		case INIT_NOTES:
			return [ ...action.notes ];
		case ADD_NOTE:
			return [ ...action.notes ];
		case DELETE_NOTE:
			return [ ...action.notes ];
		default:
			return state;
	}
}

const rootReducer = combineReducers({ notes });
export default rootReducer;