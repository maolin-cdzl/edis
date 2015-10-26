import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar,NavBrand,Nav,NavItem,Dropdown,NavDropdown,MenuItem } from 'react-bootstrap';
import LangStore from '../stores/LangStore';

class HeadBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var lang = LangStore.getLang();

		var acctitle = ( <i className="fa fa-user fa-fw"></i>);
		return (
				<Navbar inverse fluid staticTop toggleNavKey={0}>
					<NavBrand>{lang['company']}</NavBrand>
					<Nav right eventKey={0}>
						<NavItem eventKey={1} href="#">Link</NavItem>
						<NavItem eventKey={2} href="#">Link</NavItem>
						<NavDropdown id="account-dropdown-menu" title={acctitle} eventKey={3}>
							<MenuItem>Action</MenuItem>
							<MenuItem>Action</MenuItem>
							<MenuItem>Action</MenuItem>
							<MenuItem divider/>
							<MenuItem>Action</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
		);
	}
}

export default HeadBar;
