import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import Login from './components/login.jsx!';
import HeadBar from './components/headbar.jsx!';
import Main from './components/main.jsx!';
import SideBar from './components/sidebar.jsx!';
import ContextMenu from './components/contextmenu.jsx!';
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
				<div className="container-fluid" style={AppStyles.wrapper}>
					<div className="row" style={AppStyles.tophead}>
						<HeadBar />
					</div>
					<div className="row" style={AppStyles.main}>
						<div className="col-md-3" style={AppStyles.sidebar}>
							<SideBar />
						</div>
						<div className="col-md-9" style={AppStyles.page}>
							<Main />
						</div>
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

var AppStyles = {
	wrapper: {
		'background': '#f8f8f8',
		'minHeight' : '100vh',
		'maxHeight' : '100vh',
		'padding': '0px',
		'margin': '0px',
	},
	tophead: {
		'minHeight' : '5vh',
		'maxHeight' : '10vh',
		'padding': '0px',
		'margin': '0px',
	},
	main: {
		'minHeight': '90vh',
		'maxHeight' : '95vh',
		'padding': '0px',
		'margin': '0px',
	},
	sidebar: {
		'backgroundColor': 'green',
		margin: '0px',
		padding: '0px',
	},
	page: {
		margin: '0px',
		padding: '0px',
		'minHeight' : '100vh',
	}
};



ReactDOM.render(<App />,document.getElementById('app'));
