import React, {Component} from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import { connect } from 'react-redux';
import {loginUser} from '@actions/login';
import LoginComponent from '../LoginComponent'
class LoginContainer extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={{flex:1}}>
                <LoginComponent 
                onLoginPress={(email, password)=>this.props.onLoginPress(email, password)} />
            </View>
        )
    }
}

function mapStateToProps(state){
	const { login } = state;
	return {
		error: login.loginError,
		success: login.loginSuccess,
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