import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
	componentDidMount() {
		console.log('SideBar did mount');
		$('#side-menu').metisMenu();
	}

	render() {
		console.log('SideBar render');
		return(
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav metismenu" id="side-menu">
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
                        <li>
                            <a href="#" aria-expanded="false"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" aria-expanded="false"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li className="metismenu">
                                    <a href="#" aria-expanded="false">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level" aria-expanded="false">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
			</div>
		);
	}
}

export default SideBar;


