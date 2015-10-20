import React from 'react';
import ReactDOM from 'react-dom';
import LangStore from '../stores/LangStore';
import LangMenu from './langmenu.jsx!';

class LoginHeading extends React.Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		console.log('handleClose');
		var remote = require('remote');
		remote.getCurrentWindow().close();
	}

	render() {
		return(
			<div className="panel-heading">
				<button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
					<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
				</button>
				<img className="img-circle img-responsive center-block" id="img_logo" src={"http://bootsnipp.com/img/logo.jpg"} />
			</div>
		);
	}
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show : 'LOGIN',
			rememberMe : false
		};

		this.switchToLogin = this.switchToLogin.bind(this);
		this.switchToLost = this.switchToLost.bind(this);
		this.switchToRegister = this.switchToRegister.bind(this);
	}

	switchToLogin() {
		this.state['show'] = 'LOGIN';
		this.setState(this.state);
	}

	switchToLost() {
		this.state['show'] = 'LOST';
		this.setState(this.state);
	}
	switchToRegister() {
		this.state['show'] = 'REGISTER';
		this.setState(this.state);
	}

	render() {
		switch( this.state.show ) {
			case 'LOGIN' :
				return this.renderLogin();
			case 'LOST' :
				return this.renderLost();
			case 'REGISTER' :
				return this.renderRegister();
			default:
		}
	}

	renderLogin() {
		var lang = LangStore.getLang();
		return (
    	<div className="panel panel-default">
			<LoginHeading />
                
			<div id="div-forms" className="panel-body">
				<form id="login-form">
					<div className="modal-body">
						<div id="div-login-msg">
							<div id="icon-login-msg" className="glyphicon glyphicon-chevron-right"></div>
							<span id="text-login-msg">{lang['login_msg']}</span>
						</div>
						<input id="login_username" className="form-control" type="text" placeholder={lang['username']} required/>
						<input id="login_password" className="form-control" type="password" placeholder={lang['password']} required />
						<div className="checkbox">
							<label>
								<input type="checkbox" />{lang['remember_me']}
							</label>
						</div>
					</div>
					<div className="modal-footer">
						<div>
							<button type="submit" className="btn btn-primary btn-lg btn-block">{lang['login']}</button>
						</div>
						<div>
							<button id="login_lost_btn" type="button" className="btn btn-link" onClick={this.switchToLost}>{lang['lost_btn']}</button>
							<button id="login_register_btn" type="button" className="btn btn-link" onClick={this.switchToRegister}>{lang['register_btn']}</button>
						</div>
					</div>
				</form>
				<LangMenu align='pull-right' pop='dropup'/>
			</div>
		</div>
		);
	}

	renderLost() {
		var lang = LangStore.getLang();
		return (
    	<div className="panel panel-default">
            <LoginHeading />
			<div id="div-forms" className="panel-body">
				<form id="lost-form">
					<div className="modal-body">
						<div id="div-lost-msg">
							<div id="icon-lost-msg" className="glyphicon glyphicon-chevron-right"></div>
							<span id="text-lost-msg">{lang['lost_msg']}</span>
						</div>
						<input id="lost_email" className="form-control" type="text" placeholder={lang['email']} required />
					</div>
					<div className="modal-footer">
						<div>
							<button type="submit" className="btn btn-primary btn-lg btn-block">{lang['send']}</button>
						</div>
						<div>
							<button id="lost_login_btn" type="button" className="btn btn-link" onClick={this.switchToLogin}>{lang['login_btn']}</button>
							<button id="lost_register_btn" type="button" className="btn btn-link" onClick={this.switchToRegister}>{lang['register_btn']}</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		);
	}

	renderRegister() {
		var lang = LangStore.getLang();
		return (
    	<div className="panel panel-default">
			<LoginHeading />
			<div id="div-forms" className="panel-body">
				<form id="register-form">
					<div className="modal-body">
						<div id="div-register-msg">
							<div id="icon-register-msg" className="glyphicon glyphicon-chevron-right"></div>
							<span id="text-register-msg">{lang['register_msg']}</span>
						</div>
						<input id="register_username" className="form-control" type="text" placeholder={lang['username']} required />
						<input id="register_email" className="form-control" type="text" placeholder={lang['email']} required />
						<input id="register_password" className="form-control" type="password" placeholder={lang['password']} required />
					</div>
					<div className="modal-footer">
						<div>
							<button type="submit" className="btn btn-primary btn-lg btn-block">{lang['register']}</button>
						</div>
						<div>
							<button id="register_login_btn" type="button" className="btn btn-link" onClick={this.switchToLogin}>{lang['login_btn']}</button>
							<button id="register_lost_btn" type="button" className="btn btn-link" onClick={this.switchToLost}>{lang['register_btn']}</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		);
	}
}

export default Login;

