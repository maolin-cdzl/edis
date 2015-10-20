import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx!';
import HeadBar from './components/headbar.jsx!';
import GroupList from './components/grouplist.jsx!';
import Talk from './components/talk.jsx!';
import Main from './components/main.jsx!';
import LangStore from './stores/LangStore';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logined : false,
			lang : LangStore.getCurLang()
		};
		this.onLangChange = this.onLangChange.bind(this);
	}
	componentDidMount() {
		LangStore.addLangListener(this.onLangChange);
	}
	componentWillUnmount() {
		LangStore.removeLangListener(this.onLangChange);
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

	onLangChange(lang) {
		this.state['lang'] = lang;
		this.setState(this.state);
	}
}

ReactDOM.render(<App />,document.getElementById('app'));
