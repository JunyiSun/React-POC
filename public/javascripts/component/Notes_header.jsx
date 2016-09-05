"use strict";
import React, { Component, PropTypes } from "react";
import {Navbar, PageHeader, Row,Col, Button, Glyphicon, FormGroup, FormControl} from "react-bootstrap";

class Notes_header extends React.Component{
	render(){
		return(
			<div>
			<Navbar inverse>
          <Navbar.Header>
             <Navbar.Brand>
                <a href="#">ReactEMT</a>
             </Navbar.Brand>
             <Navbar.Toggle />
          </Navbar.Header>
    <Navbar.Collapse>
    </Navbar.Collapse>
  </Navbar>
     <PageHeader>Task List</PageHeader>
		 <Row>
		 <Col xs={6} md={4}>
						<Button type="button" className="add_note_btn" onClick={this.props.onToggleForm} ><Glyphicon glyph="plus"/>New Task</Button>
		</Col>
		<Col xs={6} md={4} >
		   Sort by:
				<select>
        <option value="co">Co#</option>
        <option value="company">company</option>
				</select>
	</Col>
	<Col xs={6} md={4} >
	<FormGroup controlId="formControlsText">
<FormControl type="text" placeholder="Search for a task" />
</FormGroup>
	</Col>
				</Row>
		 </div>

		);
	}
}

Notes_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
};

export default Notes_header;
