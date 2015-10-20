import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login/login.jsx!';
import HeadBar from './components/HeadBar/headbar.jsx!';
import GroupList from './components/GroupList/grouplist.jsx!';
import Talk from './components/Talk/talk.jsx!';
import Main from './components/Main/main.jsx!';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logined : false
		};
	}
	render() {
		if( this.logined ) {
			return (
				<div className="container-fluid">
					<div id="headArea" className="row" style={{ "backgroundColor" : "red" }}>
						<HeadBar />
					</div>
					<div id="mainArea" className="row row-eq-height">
						<div id="left" className="col-md-3 pull-left">
							<div id="lefttop" className="row" style={{ "backgroundColor" : "yellow" }}><GroupList /></div>
							<div id="leftbottom" className="row" style={{ "backgroundColor" : "blue" }}><Talk /></div>
						</div>
						<div id="right" className="col-md-9 pull-right" style={{ "backgroundColor" : "green" }}><Main /></div>
					</div>
				</div>
			);
		} else {
			return (
				<Login />
			)
		}
	}
}

ReactDOM.render(<App />,document.getElementById('app'));
