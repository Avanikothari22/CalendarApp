import firebase from 'react-native-firebase';

export function loginUserService(email, password, responseCallback) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('login response ========', response);
        if(response.status === 200 && data.status === OK && data.payload.userStatus !== USER_STATUS.CREATED) {
            responseCallback ({
                result: SUCCESS,
                data: data.payload,
                
            });
        } else if(response.status === 200 && data.status === OK && data.payload.userStatus === USER_STATUS.CREATED) {
            responseCallback({
                result: FAILURE,
                error: UNVERIFIED_USER,
                data: data.payload,
            })
        } else {
            console.log('rerere:::', data);
            responseCallback({
                result: FAILURE,
                error: data.status === 'WRONG_CREDENTIALS' ? 'Wrong Credentials.': 'Something went wrong.\n Please try again later.',
                errorCode: response.status,
            })
        }
    }).catch ((error) => {
        console.log('Response error in catch:::', error.message);
        responseCallback({
            result: FAILURE,
            error: error.message.includes('Unrecognized token')  ? 'Network Error. Please check your connection.' : error.message,
        })
    });
}