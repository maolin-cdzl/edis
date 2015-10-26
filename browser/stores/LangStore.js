import events from 'events';
import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { LangActionType } from '../constants/EDisConstants';

const EventEmitter = events.EventEmitter;
const EVENT_LANGUAGE_CHANGED = 'EVENT_LANGUAGE_CHANGED';

var _lang_map = {
	en_US : {
		'company' : 'ShanLiTech',
		'login_msg' : 'Type your username and password.',
		'username' : 'Username',
		'password' : 'Password',
		'remember_me' : 'Remember me',
		'lost_msg' : 'Type your e-mail.',
		'email' : 'E-Mail',
		'send' : 'Send',
		'login' : 'Login',
		'register' : 'Register',
		'lost_btn' : 'Lost Password?',
		'register_btn' : 'Register',
		'login_btn' : 'Log In',
		'register_msg' : 'Register an account.',
		'language' : 'Language',
	},
	zh_CN : {
		'company' : '善理科技',
		'login_msg' : '请输入账号密码',
		'username' : '账号',
		'password' : '密码',
		'remember_me' : '记住我',
		'lost_msg' : '请输入电子邮箱',
		'email' : '电子邮箱',
		'send' : '发送',
		'login' : '登录',
		'register' : '注册',
		'lost_btn' : '忘记密码?',
		'register_btn' : '注册账号',
		'login_btn' : '返回登录',
		'register_msg' : '注册一个新账号',
		'language' : '语言',
	}
};

var _lang_name_map = {
	en_US : 'English',
	zh_CN : '中文简体',
};

var _cur_lang = 'zh_CN';


const LangStore = Object.assign({},EventEmitter.prototype,{
	getCurLang() {
		return _cur_lang;
	},
	getCurLangName() {
		return _lang_name_map[_cur_lang];
	},
	getAllLangName() {
		return _lang_name_map;
	},
	getLang() {
		return _lang_map[_cur_lang];
	},

	emitLangChange() {
		this.emit(EVENT_LANGUAGE_CHANGED,_cur_lang);
	},
	addLangListener(cb) {
		this.on(EVENT_LANGUAGE_CHANGED,cb);
	},
	removeLangListener(cb) {
		this.removeListener(EVENT_LANGUAGE_CHANGED,cb);
	}
});

EDisDispatcher.register(function(action) {
	switch( action.actionType ) {
		case LangActionType.CHANGE_LANGUAGE :
			if( action.lang in _lang_map ) {
				if( action.lang != _cur_lang ) {
					_cur_lang = action.lang;
					LangStore.emitLangChange();
				}
			}
			break;
		default:
	}
});

export default LangStore;

