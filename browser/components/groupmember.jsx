import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Collapse,ButtonGroup } from 'react-bootstrap';
import GroupStore from '../stores/GroupStore';
import UIActions from '../actions/UIAction';

export default class GroupMember extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
	}
	handleClick() {
	}
	handleContextMenu(e) {
		console.log('handleContextMenu at ' + e.screenX + ',' + e.screenY);
		e.preventDefault();
		UIActions.showMemberContextMenu(e.clientX,e.clientY);
	}
	
	shouldComponentUpdate(nextProps,nextState) {
		return (nextProps.member.name != this.props.member.name || nextState['context'] != this.state.contextMenu );
	}

	render() {
		return(
		<div>
			<Button href="#" block onClick={this.handleClick} onContextMenu={this.handleContextMenu}>
				<i className="fa fa-user fa-fw"> {this.props.member.name}</i>
			</Button>
		</div>
		);
	}
}

