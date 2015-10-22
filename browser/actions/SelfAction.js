import EDisDispatcher from '../dispatcher/EDisDispatcher';
import { SelfActionType } from '../constants/EDisConstants';

var SelfActions = {
	setLoginStatus(stat) {
		EDisDispatcher.dispatch({
			actionType : SelfActionType.SET_LOGIN_STATUS,
			logined : stat
		});
	}
};

export default SelfActions;

