import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx!';
import HeadBar from './components/headbar.jsx!';
import Main from './components/main.jsx!';
import SideBar from './components/sidebar.jsx!';
import ContextMenu from './components/contextmenu.jsx!';
import SelfStore from './stores/SelfStore';
import LangStore from './stores/LangStore';

import styles from './app.css!css';

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
				<div className="container-fluid wrapper">
					<div className="row tophead">
						<HeadBar />
					</div>
					<div className="row main">
						<div className="col-md-2">
							<SideBar />
						</div>
						<div className="col-md-8">
							<Main />
						</div>
					</div>
					<div className="row bottomfoot">
						<h4>Foot bar</h4>
					</div>
					<ContextMenu />
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
