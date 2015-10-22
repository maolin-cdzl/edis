import events from 'events';
import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { SelfActionType } from '../constants/EDisConstants';

const EventEmitter = events.EventEmitter;

const EVENT_SELF_STATUS_CHANGED = 'EVENT_SELF_STATUS_CHANGED';

var _self_status = {
	logined : true,
	group : 0,
	last_group : 0,
};

const SelfStore = Object.assign({},EventEmitter.prototype,{
	isLogined() {
		return _self_status.logined;
	},

	emitChange() {
		this.emit(EVENT_SELF_STATUS_CHANGED,_self_status);
	},
	
	addSelfListener(cb) {
		this.on(EVENT_SELF_STATUS_CHANGED,cb);
	},
	removeSelfListener(cb) {
		this.removeListener(EVENT_SELF_STATUS_CHANGED,cb);
	}
});

EDisDispatcher.register(function(action) {
	switch( action.actionType ) {
		case SelfActionType.SET_LOGIN_STATUS :
			_self_status.logined = action.logined;
			SelfStore.emitChange();
			break;
		default:
	}
});

export default SelfStore;

