import events from 'events';
import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { UIActionType } from '../constants/EDisConstants';

const EventEmitter = events.EventEmitter;
const EVENT_FOCUS_GROUP_CHANGED = 'EVENT_FOCUS_GROUP_CHANGED';

var _focus_gid = 0;

const UIStore = Object.assign({},EventEmitter.prototype,{
	hasFocusGroup() {
		return _focus_gid != 0;
	},
	getFocusGroup() {
		return _focus_gid;
	},
	emitFocusGroupChange() {
		this.emit(EVENT_FOCUS_GROUP_CHANGED,_focus_gid);
	},
	addFocusGroupListener(cb) {
		this.on(EVENT_FOCUS_GROUP_CHANGED,cb);
	},
	removeFocusGroupListener(cb) {
		this.removeListener(EVENT_FOCUS_GROUP_CHANGED,cb);
	}

});

EDisDispatcher.register(function(action) {
	switch( action.actionType ) {
		case UIActionType.CHANGE_FOCUS_GROUP :
			if( _focus_gid != action.gid) {
				_focus_gid = action.gid;
				UIStore.emitFocusGroupChange();
			}
			break;
		default:
	}
});

export default UIStore;

