import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../pages/Main/Home/'
import NewsScreen from '../pages/Main/News/'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image
} from 'react-native';


class MessageScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Message</Text>
			</View>
		)
	}
}

class MineScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Mine</Text>
			</View>
		)
	}
}

const AppNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => {
				return focused ?
					<Entypo name='home' size={28} color={tintColor}/>
					:
					<AntDesign name='home' size={24} color={tintColor} />
			},
			tabBarLabel: '首页'
		}
	},
	News: {
		screen: NewsScreen,
		navigationOptions: {
			tabBarLabel: '资讯',
			tabBarIcon: ({tintColor, focused}) => {
				return <FontAwesome name={focused ? 'file' : 'file-o'} size={24} color={tintColor} />
			}
		}
	},
	Message: {
		screen: MessageScreen,
		navigationOptions: {
			tabBarLabel: '消息',
			tabBarIcon: ({tintColor, focused}) => {
				return <FontAwesome name={focused ? 'commenting' : 'commenting-o'} size={28} color={tintColor} />
			}
		}
	},
	Mine: {
		screen: MineScreen,
		navigationOptions: {
			tabBarLabel: '我的',
			tabBarIcon: ({tintColor, focused}) => {
				return <FontAwesome name={focused ? 'user' : 'user-o'} size={24} color={tintColor} />
			}
		}
	}
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	},
	navigationOptions: {
		tabBarLabel: 'Home!'
	},
	tabBarOptions: {
		activeTintColor: 'green'
	}
});

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({});
