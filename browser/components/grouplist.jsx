import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { Button,Collapse,ListGroup,ListGroupItem } from 'react-bootstrap';

import UIStore from '../stores/UIStore';
import GroupStore from '../stores/GroupStore';
import UIActions from '../actions/UIAction';
import Group from './group.jsx!';

class GroupList extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = { 
			active_gid : UIStore.getFocusGroup(),
		};
		this.onFocusChange = this.onFocusChange.bind(this);
	}

	onFocusChange(gid) {
		this.setState({active_gid : gid});
	}

	componentDidMount() {
        UIStore.addFocusGroupListener(this.onFocusChange);
    }

    componentWillUnmount() {
        UIStore.removeFocusGroupListener(this.onFocusChange);
    }

	render() {
		var groups = GroupStore.getAllGroups();
		if( groups.length > 1 ) {
			return (
					<ListGroup componentClass="ul">
					{
						GroupStore.getAllGroups().map(function(group) {
							return <Group key={group.gid} group={group} focus={this.state.active_gid == group.gid ? true : false}/>
						},this)
					}
					</ListGroup>
			);
		} else if( groups.length == 1 ) {
			var group = groups[0];
			return (
				<ListGroup componentClass="ul">
					<Group key={group.gid} group={group} focus={this.state.active_gid == group.gid ? true : false}/>
				</ListGroup>
			);
		} else {
			return (
				<div id="grouplist-area" style={GroupListStyles.wrapper}>
					 <h4>您未加入任何群组</h4>
				</div>
			);
		}
	}
}

var GroupListStyles = {
	wrapper : {
		'padding': '0px',
		'overflowY': 'auto',
		'overflowX': 'hidden',
		'backgroundColor': '#0000ff',
	}
};


export default GroupList;
