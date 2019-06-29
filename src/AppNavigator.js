import {createStackNavigator,createAppContainer,} from 'react-navigation';
import {Platform} from 'react-native';
import Login from './Routes/Login/LoginContainer';
import Calendar from './Routes/Calendar/CalendarContainer';
 const RootStack = createStackNavigator({
	LoginScreen: {screen: Login, navigationOptions: {header: null}},
	//CalendarScreen: {screen: Calendar,  navigationOptions: {header: null}},
}, {
    initialRouteName: 'LoginScreen',
	navigationOptions:{
		gesturesEnabled: false,
		
	},
});
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;