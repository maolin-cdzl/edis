import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

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
					<ul className="list-group">
					{
						GroupStore.getAllGroups().map(function(group) {
							return <li className="list-group-item" style={GroupListStyles.item} key={group.gid}><Group group={group} focus={this.state.active_gid == group.gid ? true : false}/></li>
						},this)
					}
					</ul>
			);
		} else if( groups.length == 1 ) {
			var group = groups[0];
			return (
				<ul className="list-group">
					<li className="list-group-item" style={GroupListStyles.item}><Group group={group} focus={this.state.active_gid == group.gid ? true : false}/></li>
				</ul>
			);
		} else {
			return (
				<div id="grouplist-area">
					 <h4>您未加入任何群组</h4>
				</div>
			);
		}
	}
}

var GroupListStyles = {
	item: {
		margin: 0,
		padding: 0,
	},
};


export default GroupList;
