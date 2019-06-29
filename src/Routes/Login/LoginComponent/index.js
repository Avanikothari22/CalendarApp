import React, {Component} from 'react';
import {View, SafeAreaView, Platform, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import {LOGIN_HEADING, SMALL_HEADING} from '@constants/string'
import Validator from '@utils/validator';
import * as CONST from '@constants/colors';


class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: false
        }

    }

    onLoginPress(){
        if(Validator.validEmail(this.state.email))
        this.props.onLoginPress(this.state.email, this.state.password);
        else
        this.setState({
            emailError: true
        })
    }

    render(){
        const {emailError} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.topContainer} />
                    <View style={styles.midContainer}>
                        <Text style={styles.heading}>{LOGIN_HEADING}</Text>
                        <Text style={styles.smalllHeading}>{SMALL_HEADING}</Text>
                    </View>
                    <View style={styles.loginContainer}>
                        <TextInput style={[styles.textInput, {borderColor: emailError ? CONST.ERROR_COLOR: CONST.BORDER_COLOR}]}
                            placeholder={'Username'}
                            autoCapitalize={false}
                            value={this.state.email}
                            onChangeText={(text) => this.setState({
                                email: text,
                                emailError: false
                            })} />
                            {emailError && <Text style={styles.errorText}>Invalid Email!</Text>}
                        <TextInput style={styles.textInput}
                            placeholder={'Password'}
                            value={this.state.password}
                            autoCapitalize={false}
                            secureTextEntry
                            onChangeText={(text) => this.setState({
                                password: text
                            })} />
                        <TouchableOpacity style={styles.loginButton} onPress={()=>this.onLoginPress()}>
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </SafeAreaView>
        )
    }
}
export default LoginComponent;