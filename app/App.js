import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import config from './config';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

let getNavOptions = function() {
  return {
    headerTintColor: 'lightgrey',
    headerStyle: {
      backgroundColor: '#0d1c2a',
      borderWidth: 1,
      borderBottomColor: '#666666'
    }
  }
}

const App = StackNavigator({
  Welcome: { screen: WelcomeScreen, navigationOptions: getNavOptions() },
  Home: { screen: HomeScreen, navigationOptions: getNavOptions() },
  Settings: { screen: SettingsScreen, navigationOptions: getNavOptions() }
});

AppRegistry.registerComponent('MultiLingualReactNativeSample', () => App);
