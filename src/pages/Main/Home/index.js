import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'

class HomePage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Swiper style={styles.wrapper} showsButtons={false}>
					<View style={styles.slide}>
						<Text style={styles.text}>Hello Swiper</Text>
					</View>
					<View style={styles.slide}>
						<Text style={styles.text}>Beautiful</Text>
					</View>
					<View style={styles.slide}>
						<Text style={styles.text}>And simple</Text>
					</View>
				</Swiper>
			</View>
		);
	}
}

export default HomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapper: {
		flex: 1,
	},
	slide: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	text: {}
});
