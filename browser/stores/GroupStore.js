import events from 'events';
import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { GroupActionType } from '../constants/EDisConstants';
import { PinYinSort } from '../lib/PinYinSort';

const EventEmitter = events.EventEmitter;

const EVENT_GROUP_LIST_CHANGED = 'EVENT_GROUP_LIST_CHANGED';
const EVENT_GROUP_ADDED = 'EVENT_GROUP_ADDED';
const EVENT_GROUP_REMOVED = 'EVENT_GROUP_REMOVED';
const EVENT_GROUP_UPDATED = 'EVENT_GROUP_UPDATED';

var _group_list = [];
var _group_members = {};

function createUser(uid) {
	return { uid : uid, name : '用户' + uid }
}

function createGroup(gid,usercount) {
	return { gid : gid, name : '群组' + gid };
}

function createGroupList(){
	for(var i=1; i < 100; ++i) {
		_group_list.push( createGroup(i,10) );
	}
	_group_list = PinYinSort.keySort(_group_list,function(group){
		return group.name;
	});
}

function createGroupMembers() {
	for(var i=0; i < _group_list.length; ++i){
		var gid = _group_list[i].gid;
		for(var uid = (gid * 10000); uid < (gid * 10000 + 100); uid++) {
			if( !(gid in _group_members) ) {
				_group_members[gid] = [];
			}
			_group_members[gid].push(createUser(uid));
		}
		_group_members[gid] = PinYinSort.keySort(_group_members[gid],function(user){
			return user.name;
		});
	}
}

createGroupList();
createGroupMembers();


const GroupStore = Object.assign({},EventEmitter.prototype,{
	getAllGroups() {
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
	getGroupMembers(gid) {
		if( gid in _group_members ) {
			return _group_members[gid];
		} else {
			return [];
		}
	}
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

