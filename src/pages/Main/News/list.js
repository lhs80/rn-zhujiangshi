import React, {Component} from 'react';
import {View, Text} from 'react-native'

class List extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.type}</Text>
			</View>
		);
	}
}

export default List;
