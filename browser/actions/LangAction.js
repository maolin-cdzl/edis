import { EDisDispatcher } from '../dispatcher/EDisDispatcher';
import { LangActionType } from '../constants/EDisConstants';

var LangActions = {
	changeLanguage(lang) {
		EDisDispatcher.dispatch({
			actionType : LangActionType.CHANGE_LANGUAGE,
			lang : lang
		});
	}
};

export { LangActions };
