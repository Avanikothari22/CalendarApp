import { loginUser } from '@actions/login';
import LoginComponent from './LoginComponent'
import withContainer from '../Container';

const  mapStateToProps = (state) => {
	const { login, commonReducer } = state;
	return {
		error: login.loginError,
        success: login.loginSuccess,
        isFetching: commonReducer.isFetching
	};
}

const mapDispatchToProps = (dispatch) => {
	return{
		onLoginPress: (email, password) => {
			dispatch(loginUser(email, password));
		},
	};
};
export default withContainer(LoginComponent, mapStateToProps, mapDispatchToProps);