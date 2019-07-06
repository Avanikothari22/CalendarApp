import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import { connect } from 'react-redux';
import * as CONST from '@constants/actions';
import CalendarComponent from './CalendarComponent'
class CalendarContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <CalendarComponent/>
            </View>
        )
    }
}

const  mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);