"use strict";
import React, { Component, PropTypes } from "react";
import {FormGroup, FormControl, Col} from "react-bootstrap";

class Notes_form extends React.Component{

	handleSubmit(event){
		event.preventDefault();
		if(this.refs.co.value=="") return;
		var newNote={
			co : this.refs.co.value,
			company : this.refs.company.value,
			segment : this.refs.segment.value,
			administrator : this.refs.administrator.value,
			auditor : this.refs.auditor.value,
			specialist : this.refs.specialist.value,
			description : this.refs.description.value,
			date: "posted @"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
		};
		this.refs.yout_form.reset();
		this.props.onNewNote(newNote);
	}

	render(){
		var style={
			display : this.props.formDisplayed ? "block" : "none"
		};
		return(
			<div className="note_form_wrap">
				<form ref="yout_form" action="#" className="note_form" style={ style } onSubmit={ this.handleSubmit.bind(this) }>
					<h5>Task</h5>
					
					<input ref="co" type="text" className="your_co" placeholder="Co"/>
					<input ref="company" type="text" className="your_company" placeholder="company"/>
					<input ref="segment" type="text" className="your_segment" placeholder="segment"/>
					<input ref="administrator" type="text" className="your_administrator" placeholder="administrator"/>
					<input ref="auditor" type="text" className="your_auditor" placeholder="auditor"/>
					<input ref="specialist" type="text" className="your_specialist" placeholder="specialist"/>
					<textarea ref="description" className="your_description" placeholder="Current Status and Comments"/>
					<input type="button" value="Cancel" className="cancel_btn" onClick={ this.props.onToggleForm }/>
					<input type="submit" value="Submit" className="confirm_btn"/>
				</form>
			</div>
		);
	}
}

Notes_form.propTypes = {
	onToggleForm : PropTypes.func.isRequired,
	formDisplayed : PropTypes.bool.isRequired,
	onNewNote : PropTypes.func.isRequired
}

export default Notes_form;
