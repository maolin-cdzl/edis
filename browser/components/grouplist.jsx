import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Collapse,ListGroup,ListGroupItem } from 'react-bootstrap';
import UIStore from '../stores/UIStore';
import GroupStore from '../stores/GroupStore';
import UIActions from '../actions/UIAction';
import Group from './group.jsx!';

class GroupList extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = { 
			open : false,
			active_gid : UIStore.getFocusGroup(),
		};
		this.handleClick = this.handleClick.bind(this);
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

	handleClick() {
		this.setState( { open : !this.state.open } );
	}

	render() {
		return (
				<li>
					<Button href="#" onClick={this.handleClick}>
						<i className="fa fa-sitemap fa-fw"></i>群组列表<span className="fa arrow"></span>
					</Button>
					<Collapse in={this.state.open}>
						<ListGroup>
						{
							GroupStore.getAllGroups().map(function(group) {
								if(this.state.active_gid == group.gid ) {
									return <ListGroupItem key={group.gid}><Group group={group} focus={true}/></ListGroupItem>
								} else {
									return <ListGroupItem key={group.gid}><Group group={group} focus={false}/></ListGroupItem>
								}
							},this)
						}
						</ListGroup>
					</Collapse>
				</li>
		);
	}
}

export default GroupList;
