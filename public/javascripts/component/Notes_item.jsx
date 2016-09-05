"use strict";
import React, { Component, PropTypes } from "react";
import {Button} from "react-bootstrap";


class Notes_item extends React.Component{

	handleOver(){
		this.refs.delete.style.display="block";
	}

	handleOut(){
		this.refs.delete.style.display="none";
	}

	handleDelete(){
		var date=this.props.date;
		this.props.onDeleteNote(date);
	}

	render(){
		return(
			<tr>
			    <td>{ this.props.co }</td>
				<td>{ this.props.company }</td>
				<td>{ this.props.segment }</td>
				<td>{ this.props.administrator}</td>
        <td>{ this.props.auditor }</td>
				<td>{ this.props.specialist }</td>
				<td>{ this.props.date }</td>
				<td><Button bsStyle="primary" >Remove from My Schedue</Button></td>
				<td><Button bsStyle="danger" className="delete" ref="delete" onClick={ this.handleDelete.bind(this) }>Delete</Button></td>
			</tr>
		);
	}
}

Notes_item.propTypes = {
	co : PropTypes.string.isRequired,
	company : PropTypes.string.isRequired,
	segment : PropTypes.string.isRequired,
	administrator : PropTypes.string.isRequired,
	auditor: PropTypes.string.isRequired,
	specialist : PropTypes.string.isRequired,
	description : PropTypes.string.isRequired,
	date : PropTypes.string.isRequired,
	onDeleteNote : PropTypes.func.isRequired
}

export default Notes_item;
