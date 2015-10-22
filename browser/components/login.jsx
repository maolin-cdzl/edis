import React from 'react';
import ReactDOM from 'react-dom';
import LangStore from '../stores/LangStore';
import LangMenu from './langmenu.jsx!';
import SelfActions from '../actions/SelfAction';

class LoginHeading extends React.Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		var ipc = require('ipc');
		ipc.send('quit');
	}

	render() {
		return(
			<div className="panel-heading" style={{"WebkitAppRegion": "drag"}}>
				<button type="button" className="close" aria-label="Close" style={{"WebkitAppRegion": "no-drag"}} onClick={this.handleClose}>
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
		this.handleLogin = this.handleLogin.bind(this);
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
	handleLogin(e) {
		e.preventDefault();
		console.log('login: ' + this.refs.username);
		SelfActions.setLoginStatus(true);
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
	<div className="container" height="100%">
    	<div className="panel panel-default">
			<LoginHeading />
			<div id="div-forms" className="panel-body">
				<form id="login-form" className="form-horizontal" onSubmit={this.handleLogin}>
						<div className="form-group">
							<div className="col-sm-10">
								<div id="icon-login-msg" className="glyphicon glyphicon-chevron-right" aria-hidden="true"></div>
								<span id="text-login-msg">{lang['login_msg']}</span>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
							<input className="form-control" type="text" placeholder={lang['username']} ref="username" required/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
							<input className="form-control" type="password" placeholder={lang['password']} ref="password" required />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-4">
								<div className="checkbox">
									<label>
										<input type="checkbox" ref="remember"/>{lang['remember_me']}
									</label>
								</div>
							</div>
							<div className="col-sm-8">
								<LangMenu align='pull-right' pop='dropdown'/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
							<button type="submit" className="btn btn-primary btn-lg btn-block">{lang['login']}</button>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
							<button id="login_lost_btn" type="button" className="btn btn-link" align="pull-left" onClick={this.switchToLost}>{lang['lost_btn']}</button>
							<button id="login_register_btn" type="button" className="btn btn-link" align="pull-right" onClick={this.switchToRegister}>{lang['register_btn']}</button>
							</div>
						</div>
				</form>
			</div>
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
							<div id="icon-lost-msg" className="glyphicon glyphicon-chevron-right" aria-hidden="true"></div>
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
							<div id="icon-register-msg" className="glyphicon glyphicon-chevron-right" aria-hidden="true"></div>
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

