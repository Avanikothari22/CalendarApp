import * as CONST from '@constants/actions';
import { loginUserService } from '../Services/login';
import { startSpinner, stopSpinner } from './commonActions';

export function loginUser(email, password) {
    return async (dispatch, getState) => {
        dispatch(startSpinner());
        dispatch({ type: CONST.RESET_LOGIN_ERROR });
        try {
            await loginUserService(email, password, (response) => {
                const { login } = getState();
                dispatch(stopSpinner());
                if (response.result === CONST.SUCCESS) {
                    // AsyncStorageUtil.setAsyncStorage(AUTH_TOKEN, response.token);
                    dispatch({
                        type: CONST.LOGIN_SUCCESS,
                    });
                } else {
                    dispatch({
                        type: CONST.LOGIN_FAILED,
                        payload: { error: response.error }

                    });
                }
            });
        } catch (error) {
            dispatch(stopSpinner());

            dispatch({
                type: CONST.LOGIN_FAILED,
                payload: { error: error }
            });
        }
    }
}