import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import BootPage from '../pages/BootPage/'
import AdvertPage from '../pages/AdvertPage/'
import MainPage from '../pages/Main/'

const BootScreen = createStackNavigator({
	Boot: {
		screen: BootPage,
		navigationOptions: {
			header: null
		}
	}
});

const AdvertScreen = createStackNavigator({
	Advert: {
		screen: AdvertPage,
		navigationOptions: {
			header: null
		}
	}
});

const MainScreen = createStackNavigator({
	Main: {
		screen: MainPage,
		navigationOptions: {
			header: null
		}
	}
});

const SwitchScreen = createSwitchNavigator({
	Init: BootScreen,
	Advert: AdvertScreen,
	Main: MainScreen
}, {
	initialRouteName: 'Main'
});

export default createAppContainer(SwitchScreen)

