import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { UIActionType } from '../constants/EDisConstants';


var UIActions = {
	setFocusGroup(gid) {
		EDisDispatcher.dispatch({
			actionType : UIActionType.CHANGE_FOCUS_GROUP,
			gid : gid 
		});
	},

	showMemberContextMenu(x,y) {
		EDisDispatcher.dispatch({
			actionType : UIActionType.SHOW_CONTEXT_MENU,
			menuType : 'member',
			x : x, y : y
		});
	}
};

export default UIActions;
