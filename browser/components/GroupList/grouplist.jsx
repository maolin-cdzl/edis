import React from 'react';
import ReactDOM from 'react-dom';


var _Groups = [
	{ gid : 1, name : '群组1' },
	{ gid : 2, name : '群组2' },
	{ gid : 3, name : '群组3' },
	{ gid : 4, name : '群组4' },
	{ gid : 5, name : '群组5' },
];

class Group extends React.Component {
	constructor(props) {
		console.log('Group constructor');
		super(props);
		this.state = {active : false};
		this.handleClick = this.handleClick.bind(this);
		console.log('Group constructor done');
	}

	handleClick() {
		if( this.state.active ) {
			this.setState( {active : false} );
		} else {
			this.setState( {active : true} );
			this.props.onActive(this);
		}
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
		this.state = { groups : _Groups };
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
