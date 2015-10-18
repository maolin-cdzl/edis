import { UIDispatcher } from '../dispatcher/UIDispatcher';
import { UIActionType } from '../constants/eDisConstants';


var UIActions = {
	setFocusGroup(group) {
		UIDispatcher.dispatch({
			actionType : UIActionType.CHANGE_FOCUS_GROUP,
			group : group
		});
	}
};

export { UIActions };
