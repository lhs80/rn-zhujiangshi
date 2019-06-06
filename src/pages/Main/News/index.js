import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import ListPage from './list'
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

class NewIndex extends Component {
	constructor(props) {
		super(props);
		this.types = ['News', 'BIM', 'design', 'project', 'ele', 'price']
	}

	_getTabs = () => {
		const tabs = {};
		this.types.forEach((item, index) => {
			tabs[`${item}`] = {
				screen: (props) => {
					return <ListPage {...props} type={index} />
				}
			}
		});
		return tabs;
	};

	render() {
		const Tabs = createAppContainer(createMaterialTopTabNavigator(this._getTabs(), {
			lazy: true,
			tabBarOptions: {
				upperCaseLabel: false,
				indicatorStyle: {backgroundColor: 'green', height: 2},
				scrollEnabled: false
			}
		}));
		return (
			<Tabs />
		);
	}
}

export default NewIndex;
