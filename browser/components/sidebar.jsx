import React from 'react';
import ReactDOM from 'react-dom';
import GroupList from './grouplist.jsx!';

class SideBar extends React.Component {
	componentDidMount() {
		console.log('SideBar did mount');
	}

	render() {
		console.log('SideBar render');
		return(
		<div className="sidebar-nav">
			<ul className="nav">
				<li className="sidebar-search">
					<div className="input-group custom-search-form">
						<input type="text" className="form-control" placeholder="Search..." />
						<span className="input-group-btn">
							<button className="btn btn-default" type="button">
								<i className="fa fa-search"></i>
							</button>
						</span>
					</div>
				</li>
				<li>
					<a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
				</li>
				<GroupList />
			</ul>
		</div>
		);
	}
}

export default SideBar;


