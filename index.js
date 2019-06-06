/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/pages/HomePage';
import {name as appName} from './app.json';
import AppNavigator from './src/Navigation/NavigationSwitchTab'

AppRegistry.registerComponent(appName, () => AppNavigator);
