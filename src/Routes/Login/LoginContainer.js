import React, {Component} from 'react';
import { View, Alert } from 'react-native';
import { resetAction } from '../../AppNavigator';
import { connect } from 'react-redux';
import { loginUser } from '@actions/login';
import * as CONST from '@constants/actions';
import LoginComponent from './LoginComponent'
class LoginContainer extends Component{
    constructor(props){
        super(props);

    }

    componentWillReceiveProps(nextProps){
        const isFocused = this.props.navigation.isFocused();
        if(isFocused){
            if(this.props.success!== nextProps.success && nextProps.success){
                Alert.alert(`Login successful.`,'',[{
                    text: 'OK', onPress: () => this.handleSuccess()
                }], {cancelable: false});
            }
        if(this.props.error!== nextProps.error && nextProps.error!== CONST.NO_ERROR){
            alert(nextProps.error)
        }
    }
}
 
    handleSuccess(){
        this.props.navigation.dispatch(resetAction('CalendarScreen'))
    }

    render(){
        return(
            <View style={{flex:1}}>
                <LoginComponent 
                isFetching={this.props.isFetching}
                onLoginPress={(email, password)=>this.props.onLoginPress(email, password)} />
            </View>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);