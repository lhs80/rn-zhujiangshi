import React, {Component} from 'react';
import {Image, StyleSheet, View, Button, Text} from 'react-native'

console.disableYellowBox = true;

class SwiperPage extends Component {
	constructor(props) {
		super(props);
		this.timer = null;
		this.timer1 = null;
		this.state = {
			num: 5
		}
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.props.navigation.navigate('Main')
		}, 5000);
		this.timer1 = setInterval(() => {
			this.setState({
				num: this.state.num - 1
			})
		}, 1000)
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
		this.timer1 && clearTimeout(this.timer1);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../../static/images/advert.png')} style={{width: '100%', height: '100%'}} />
				<Text style={styles.num}>{this.state.num}</Text>
			</View>
		);
	}
}

export default SwiperPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	num: {
		position: 'absolute',
		top: 20,
		right: 10,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		color: 'white',
		fontSize: 20,
		width: 50,
		textAlign: 'center',
		borderRadius: 4
	}
});
