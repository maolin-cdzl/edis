import { EDisDispatcher } from '../dispatcher/EDisDispatcher';
import { UIActionType } from '../constants/EDisConstants';


var UIActions = {
	setFocusGroup(group) {
		EDisDispatcher.dispatch({
			actionType : UIActionType.CHANGE_FOCUS_GROUP,
			group : group
		});
	}
};

export { UIActions };
