
import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import Home from './src/Home';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      store: configureStore(() => {
				console.log('Store persisted !');
			})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store = {this.state.store}>
          <View style={styles.container}>
            <Home/>
          </View>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
