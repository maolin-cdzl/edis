import React from 'react';
import ReactDOM from 'react-dom';
import UIStore from '../../stores/UIStore';
import GroupStore from '../../stores/GroupStore';
import UIActions from '../../actions/UIAction';

function isFocusGroup(group) {
	if ( UIStore.hasFocusGroup() && group != null ) {
		if( UIStore.getFocusGroup().gid == group.gid ) {
			return true;
		}
	}
	return false;
}

class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active : isFocusGroup(props.group) };
		this.handleClick = this.handleClick.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}

	onFocusChange(group) {
		console.log('Group ' + this.props.group.name + ' onFocusChange: ' + group.name );
		var isFocus = isFocusGroup(this.props.group);
		if ( this.state.active != isFocus ) {
			this.setState({active : isFocus});
		}
	}

	handleClick() {
		if( this.state.active ) {
			this.setState( {active : false} );
		} else {
			this.setState( {active : true} );
			UIActions.setFocusGroup(this.props.group);
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
        UIStore.addFocusGroupListener(this.onFocusChange);
    }

    componentWillUnmount() {
        UIStore.removeFocusGroupListener(this.onFocusChange);
    }

	render() {
		console.log('Group render');
		return (
			<a href="#" id={this.props.gid} className=
				{ ( () => {
					if (this.state.active) {
						return "list-group-item active";
					} else {
						return "list-group-item"
					}
				}) ()}
		   	onClick={this.handleClick}>
				<h4 className="list-group-item-heading">{this.props.group.name}</h4>
				<p className="list-group-item-text">This is a group</p>
			</a>
		);
	}
}

class GroupList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { groups : GroupStore.getAll() };
	}

	render() {
		return (
				<div className="list-group">
				{
					this.state.groups.map(function(group) {
						return <Group key={group.gid} group={group} />
					},this)
				}
				</div>
		);
	}
}

export default GroupList;
