
import {createStackNavigator,createAppContainer, NavigationActions, StackActions} from 'react-navigation';
import Login from './Routes/Login/LoginContainer';
import Calendar from './Routes/Calendar/CalendarContainer';
 const RootStack = createStackNavigator({
	LoginScreen: {screen: Login, navigationOptions: {header: null}},
	CalendarScreen: {screen: Calendar,  navigationOptions: {title: 'Calendar'}},
}, {
    initialRouteName: 'LoginScreen',
	navigationOptions:{
		gesturesEnabled: false,
		
	},
});

export const resetAction = (screenName, params = {}) => {
	return StackActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({ routeName: screenName, params})
		],
	}) ;
}
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;