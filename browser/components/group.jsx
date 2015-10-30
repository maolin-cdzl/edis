import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { Collapse,Button,ListGroup,ListGroupItem } from 'react-bootstrap';

import UIActions from '../actions/UIAction';
import GroupStore from '../stores/GroupStore';
import GroupMember from './groupmember.jsx!';

export default class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: this.props.focus };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('Group handleClick');
		UIActions.setFocusGroup(this.props.group.gid);
		this.setState( { open : !this.state.open } );
	}

	shouldComponentUpdate(nextProps,nextState) {
		return ( nextProps.focus != this.props.focus || nextState['open'] != this.state.open);
	}

	render() {
		var rows = [];
		var members = GroupStore.getGroupMembers(this.props.group.gid);
		if( members != null ) {
			console.log('Group has ' + members.length + ' members');
			members.forEach(function(member){
				rows.push(<ListGroupItem key={member.uid}><GroupMember member={member} /></ListGroupItem>);
			});
		}

		if (this.props.focus == true) {
			console.log('focus Group with ' + (this.state.open ? 'open' : 'close'));
			return(
				<li style={GroupStyles.wrapper}>
					<Button href="#" bsStyle="primary" block onClick={this.handleClick}>
						<i className="fa fa-users fa-fw" style={ { textAlign: 'left' }}> {this.props.group.name}</i>
					</Button>
					<Collapse in={this.state.open}>
						<ListGroup>
						{rows}
						</ListGroup>
					</Collapse>
				</li>
			);
		} else {
			return(
				<div style={GroupStyles.wrapper}>
					<Button href="#" active block onClick={this.handleClick}>
						<i className="fa fa-users fa-fw"> {this.props.group.name}</i>
					</Button>
				</div>
			);
		}
	}
}

var GroupStyles = {
	wrapper: {
		margin: '0px',
		padding: '0px',
	}
};


