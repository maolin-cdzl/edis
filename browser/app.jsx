import 'static/css/bootstrap.min.css!';
import 'static/css/metisMenu.css!';
import 'static/css/sb-admin-2.css!';
import 'static/css/font-awesome.min.css!';

import 'jquery';
import 'static/js/bootstrap.min.js';
import 'static/js/metisMenu.js';
import 'static/js/sb-admin-2.js';

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx!';
import Navigation from './components/navigation.jsx!';
import GroupList from './components/grouplist.jsx!';
import Talk from './components/talk.jsx!';
import Main from './components/main.jsx!';
import SelfStore from './stores/SelfStore';
import LangStore from './stores/LangStore';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logined : SelfStore.isLogined(),
			lang : LangStore.getCurLang()
		};
		this.onLangChange = this.onLangChange.bind(this);
		this.onSelfStatusChange = this.onSelfStatusChange.bind(this);

		if( this.state.logined ) {
			var ipc = require('ipc');
			ipc.send('changeScreenSize','main');
		} else {
			ipc.send('changeScreenSize','login');
		}
	}
	componentDidMount() {
		SelfStore.addSelfListener(this.onSelfStatusChange);
		LangStore.addLangListener(this.onLangChange);
	}
	componentWillUnmount() {
		SelfStore.removeSelfListener(this.onSelfStatusChange);
		LangStore.removeLangListener(this.onLangChange);
	}
	render() {
		if( this.state.logined ) {
			return (
				<div id="wrapper" style={{"height" : "100%"}}>
					<Navigation />
					<div id="page-wrapper" style={{ 'height' : '100%', backgroundColor : 'red'}}>
						<div className="row">
							<div className="col-lg-12">
								<h1 className="page-header">Dashboard</h1>
							</div>
						</div>
						<div className="row">
							<Main />
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<Login />
			)
		}
	}

	onSelfStatusChange(stat) {
		if( stat['logined'] ) {
			var ipc = require('ipc');
			ipc.send('changeScreenSize','main');
		} else {
			ipc.send('changeScreenSize','login');
		}

		this.state['logined'] = stat['logined'];
		this.setState(this.state);
	}

	onLangChange(lang) {
		this.state['lang'] = lang;
		this.setState(this.state);
	}
}

ReactDOM.render(<App />,document.getElementById('app'));
