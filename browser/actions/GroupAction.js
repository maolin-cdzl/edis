import { EDisDispatcher } from '../dispatcher/EDisDispatcher';
import { GroupActionType } from '../constants/EDisConstants';


var GroupActions = {
	flushGroupList(grouplist) {
		EDisDispatcher.dispatch({
			actionType : GroupActionType.FLUSH_GROUP_LIST,
			groups : grouplist
		});
	}
};

export { GroupActions };
