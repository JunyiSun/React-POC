"use strict";
import React, { Component, PropTypes } from "react";
import Notes_item from "./Notes_item.jsx";
import "../../stylesheets/transition.scss";
import {Table, Row} from 'react-bootstrap';

class Notes_list extends React.Component{
	render(){
		var notes=this.props.notes;
		var notes_items=notes.map( (note,index) => {
			return <Notes_item key={ index } co={ note.co }
			company={ note.company} segment={ note.segment} administrator={ note.administrator}
			auditor={ note.auditor}  specialist={ note.specialist} description={ note.description }
				date={ note.date } onDeleteNote={ this.props.onDeleteNote }/>;
		});

return(
	<Row>
				<Table striped bordered condensed hover>
				  <thead>
				    <tr>
				      <th>Co#</th>
				      <th>Company</th>
				      <th>Segment</th>
				      <th>Administrator</th>
							<th>Auditor</th>
							<th>Specialist</th>
							<th>Time Created</th>
							<th>Remove from my schedule</th>
							<th>Delete</th>
				    </tr>
				  </thead>
				  <tbody>
					   { notes_items }
				  </tbody>
				</Table>
	</Row>
     );
	}
}

Notes_list.propTypes = {
	notes : PropTypes.arrayOf(
			PropTypes.shape({
				co : PropTypes.string.isRequired,
				company : PropTypes.string.isRequired,
				segment : PropTypes.string.isRequired,
        administrator : PropTypes.string.isRequired,
				auditor: PropTypes.string.isRequired,
				specialist : PropTypes.string.isRequired,
				description : PropTypes.string.isRequired,
				date : PropTypes.string.isRequired
			}).isRequired
		).isRequired
}

export default Notes_list;
