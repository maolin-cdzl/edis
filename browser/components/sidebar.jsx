import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import GroupList from './grouplist.jsx!';

class SideBar extends React.Component {
	componentDidMount() {
		console.log('SideBar did mount');
	}

	render() {
		return(
		<div className="container-fluid" style={SideBarStyle.wrapper}>
			<div style={SideBarStyle.toparea}>
				<GroupList />
			</div>
			<div style={SideBarStyle.bottomarea}>
				<h4>Bottom</h4>
			</div>
		</div>
		);
	}
}

var SideBarStyle = {
	wrapper: {
		padding: '0px',
		minHeight : '90vh',
		maxHeight : '90vh',
		border: '3px solid',
	},
	toparea: {
		minHeight: '50vh',
		maxHeight: '80vh',
	},
	bottomarea: {
		minHeight: '20vh',
		maxHeight: '50vh',
		backgroundColor: 'blue',
	}
};

export default SideBar;


