import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import GroupStore from '../stores/GroupStore';
import UIActions from '../actions/UIAction';

class GroupMember extends React.Component {
	constructor(props) {
		super(props);
		this.state = { status: 'normal' };
		this.handleClick = this.handleClick.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
	}
	handleClick() {
		if( this.state.status === 'normal' ) {
			console.log('GroupMember active');
			this.setState( { status: 'active' } );
		} else {
			console.log('GroupMember normal');
			this.setState( { status: 'normal' } );
		}
	}
	handleContextMenu(e) {
		console.log('handleContextMenu at ' + e.screenX + ',' + e.screenY);
		e.preventDefault();
		UIActions.showMemberContextMenu(e.clientX,e.clientY);
	}
	
	//shouldComponentUpdate(nextProps,nextState) {
	//	return (nextProps.member.uid != this.props.member.uid || nextState['status'] != this.state.status );
	//}

	render() {
		var className = ( this.state.status === 'active' ? "btn btn-block btn-info" : "btn btn-block" );
		return(
			<a href="#" className={className} role="button" style={ [GroupMemberStyles.base,GroupMemberStyles[this.state.status] ]} onClick={this.handleClick} onContextMenu={this.handleContextMenu}>
				<i className="fa fa-user fa-fw"> {this.props.member.name}</i>
			</a>
		);
	}
}

var GroupMemberStyles = {
	base: {
		textAlign: 'left',
		paddingLeft: '30px',

		':hover' : {
			fontSize: '125%',
		}
	},
	normal: {
		fontSize: '100%',
	},
	active: {
		fontSize: '125%',
	},
};

GroupMember = Radium(GroupMember);
export default GroupMember;
