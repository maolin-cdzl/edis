import React from 'react';
import ReactDOM from 'react-dom';
import HeadLogo from './headlogo.jsx!';
import HeadBar from './headbar.jsx!';
import SideBar from './sidebar.jsx!';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
		<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"marginBottom": "0"}}>
			<HeadLogo />
			<HeadBar />
			<SideBar />
		</nav>
		);
	}
}

export default Navigation;

