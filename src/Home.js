
import React, {Component} from 'react';
import AppNavigator from  './AppNavigator';
import {View, SafeAreaView, Platform, Dimensions} from 'react-native';
import actualDimensions from '@utils/deviceDimensions';
export default class Home extends Component {
    constructor (props){
        super(props);
    }

    componentWillMount(){
        console.disableYellowBox = true;
    }

	componentDidMount (){}

    render(){
        return (
            <View style={{ height: actualDimensions.height, width:actualDimensions.width}}>
                <AppNavigator />
              </View>
		)
    }
    }