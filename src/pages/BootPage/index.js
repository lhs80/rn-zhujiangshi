import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native'

class BootPage extends Component {
	constructor(props) {
		super(props);
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.props.navigation.navigate('Advert')
		}, 2400)
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer)
	}

	render() {
		return (
			<View style={style.container}>
				<Image source={require('../../static/images/start.gif')} style={{width: '100%'}} />
			</View>
		);
	}
}

export default BootPage;

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
