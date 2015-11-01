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
		<div id="sidebar" className="row" style={SideBarStyle.wrapper}>
			<div id="top-area" className="row" style={SideBarStyle.toparea}>
				<GroupList />
			</div>
			<div id="bottom-area" className="row" style={SideBarStyle.bottomarea}>
				<h4>Bottom</h4>
			</div>
		</div>
		);
	}
}

var SideBarStyle = {
	wrapper: {
		height: "100%",
		padding: 0,
		margin: 0,
	},
	toparea: {
		height: '60%',
		padding: 0,
		margin: 0,
		overflowX: 'hidden',
		overflowY: 'auto',
	},
	bottomarea: {
		height: '40%',
		padding: 0,
		margin: 0,
		backgroundColor: 'blue',
	}
};

export default SideBar;


