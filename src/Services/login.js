import firebase from 'react-native-firebase';
import * as CONST from '@constants/actions'
export function loginUserService(email, password, responseCallback) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            if (response.hasOwnProperty('additionalUserInfo')) {
                responseCallback({
                    result: CONST.SUCCESS,
                });
            } else {
                // other failures in login goes here
                responseCallback({
                    result: CONST.FAILURE,
                    error: 'Login Failed.'
                })
            }
        }).catch((error) => {
            responseCallback({
                result: CONST.FAILURE,
                error: error.message
            })
        });
}