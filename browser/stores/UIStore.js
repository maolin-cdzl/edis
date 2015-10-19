import events from 'events';
import { EDisDispatcher } from '../dispatcher/EDisDispatcher';
import { UIActionType } from '../constants/EDisConstants';

const EventEmitter = events.EventEmitter;
const EVENT_FOCUS_GROUP_CHANGED = 'EVENT_FOCUS_GROUP_CHANGED';

var _group_list = [];
var _focus_group = null;

const UIStore = Object.assign({},EventEmitter.prototype,{
	hasFocusGroup() {
		return _focus_group != null;
	},
	getFocusGroup() {
		return _focus_group;
	},
	emitChange() {
		this.emit(EVENT_FOCUS_GROUP_CHANGED,_focus_group);
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
			_focus_group = action.group;
			UIStore.emitChange();
			break;
		default:
	}
});

export { UIStore };
