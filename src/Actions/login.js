import * as CONST from '@constants/actions';
import {loginUserService} from '../Services/login';
export function loginUser (email, password) {
    return async (dispatch, getState) => {
       // dispatch(startSpinner());
        dispatch({type: CONST.RESET_LOGIN_ERROR});
        try {
            await loginUserService(email, password, (response) => {
                const {login} = getState();
              //  dispatch(stopSpinner());
                if(response.result === SUCCESS) {
                    console.log('RESPONSE::: login::', response.data);
                    AsyncStorageUtil.setAsyncStorage(AUTH_TOKEN, response.token);
                    dispatch({
                        type: CONST.LOGIN_SUCCESS,
                        payload: {data: response.data }
                    });
                } else {
                     dispatch({
                        type: CONST.LOGIN_FAILED,
                        error: response.error === 'WRONG_CREDENTIALS' ? 'Wrong Credentials'  : response.error,
                     });
                 }
            });
        } catch (error) {
           // dispatch(stopSpinner());
            dispatch({
                type: CONST.LOGIN_FAILED,
                payload: {error:error}
            });
        } 
    }
}