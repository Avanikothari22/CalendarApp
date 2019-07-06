import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import { connect } from 'react-redux';
import * as CONST from '@constants/actions';
import CalendarComponent from './CalendarComponent'
class CalendarContainer extends Component{
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