import React from 'react';
import ReactDOM from 'react-dom';
import LangStore from '../stores/LangStore';
import { LangActions } from '../actions/LangAction';

class LangMenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		LangActions.changeLanguage(this.props.lang);
	}

	render() {
		return(
			<li><a href="#" onClick={this.handleClick}>abc{this.props.lang_name}</a></li>
		);
	}
}

class LangMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var menClass = this.props.align + ' ' + this.props.pop;
		var langNames = LangStore.getAllLangName();
		return(
	<div className= { menClass } >
		<button className="btn btn-default dropdown-toggle" type="button" id="langMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		{LangStore.getLang()['language'] + '(' + LangStore.getCurLangName() + ')'}
		<span className="caret"></span>
		</button>
		<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			{
				Object.keys(langNames).map(function(key,index) {
					return <LangMenuItem key={key} lang={key} lang_name={langNames[key]} />;
				}.bind(this))
			}
		</ul>
	</div>
		);
	}
}

export default LangMenu;

