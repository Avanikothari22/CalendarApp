import React, {Component} from 'react';
import { View, Alert } from 'react-native';
import { resetAction } from '../AppNavigator';
import { connect } from 'react-redux';


export default (WrappedComponent, mapStateToProps = null, mapDispatchToProps = null) => {  
    class MyContainer extends Component {
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
                <WrappedComponent {...sameData} {...this.props} />
            )
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(MyContainer); 
}
