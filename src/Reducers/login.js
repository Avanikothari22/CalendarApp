
import * as CONST from '@constants/actions';

const initialState = {
	loginError: CONST.NO_ERROR,
    loginSuccess: false,
};

export default function(state = initialState, action){
	switch(action.type){
        case CONST.RESET_LOGIN_ERROR:
			return {
				...state,
				loginError: CONST.NO_ERROR,
				}
		case CONST.LOGIN_SUCCESS:
			return {
				...state,
				loginSuccess: true,
			}
		case CONST.LOGIN_FAILED:
			return {
				...state,
                loginSuccess: false,
                loginError: action.payload.error
			}
		default: return state;
	}
}
