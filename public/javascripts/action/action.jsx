"use strict";
import $ from "../jquery.min.js";

//events
export const INIT_NOTES = "INIT_NOTES";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";


export function initNotes(){
	return function(dispatch, getState){
		$.ajax({
			url : "/init",
			type : "get",
			dataType : "json",
			cache : false,
			success : function(notes){
				notes=notesSort(notes);
				dispatch({ type : INIT_NOTES, notes : notes });
			}.bind(this),
			error : function(){
				console.log("cannnot init notes");
			}.bind(this)
		})
	}
};
export function addNote(newNote){
	return function(dispatch, getState){
		$.ajax({
			url : "/addNote",
			type : "post",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			data : JSON.stringify(newNote),
			cache : false,
			success : function(notes){
				console.log("Successfully added!");
				notes=notesSort(notes);
				dispatch({ type : ADD_NOTE, notes : notes });
			}.bind(this),
			error : function(){
				console.log("Failed to add");
			}.bind(this)
		});
	}
};
export function deleteNote(delete_date){
	return function(dispatch, getState){
		$.ajax({
			url : "/deleteNote",
			type : "post",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			data : JSON.stringify(delete_date),
			cache : false,
			success : function(notes){
				console.log("Deleted! ");
				notes=notesSort(notes);
				dispatch({ type : DELETE_NOTE, notes : notes });
			}.bind(this),
			error : function(){
				console.log("Cannot delete!");
			}.bind(this)

		});
	}
};

function notesSort(newNotes){
	newNotes.reverse();
	return newNotes;
}
