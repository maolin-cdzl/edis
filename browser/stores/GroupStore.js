import events from 'events';
import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { GroupActionType } from '../constants/EDisConstants';
import { PinYinSort } from '../lib/PinYinSort';

const EventEmitter = events.EventEmitter;

const EVENT_GROUP_LIST_CHANGED = 'EVENT_GROUP_LIST_CHANGED';
const EVENT_GROUP_ADDED = 'EVENT_GROUP_ADDED';
const EVENT_GROUP_REMOVED = 'EVENT_GROUP_REMOVED';
const EVENT_GROUP_UPDATED = 'EVENT_GROUP_UPDATED';

var _group_list = [
	{ gid : 4, name : '群组4' },
	{ gid : 3, name : '群组3' },
	{ gid : 1, name : '群组1' },
	{ gid : 5, name : '群组5' },
	{ gid : 2, name : '群组2' },
];


const GroupStore = Object.assign({},EventEmitter.prototype,{
	getAll() {
		_group_list = PinYinSort.keySort(_group_list,function(group){
			return group.name;
		});
		return _group_list;
	},
	getGroup(gid) {
		for( var i in _group_list) {
			if ( _group_list[i].gid == gid ) {
				return _group_list[i];
			}
		}
		return null;
	},
});

EDisDispatcher.register(function(action) {
	switch( action.actionType ) {
		case GroupActionType.FLUSH_GROUP_LIST :
			break;
		case GroupActionType.ADD_GROUP :
			break;
		case GroupActionType.REMOVE_GROUP :
			break;

	}
});

export default GroupStore;

