import React, {Component} from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
	Picker
} from 'react-native';

var REQUEST_URL =
	'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
export default class Touchables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			data: [],
			loaded: false,
		};
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch('https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json')
			.then((response) => response.json())
			.then((responseData) => {
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					data: this.state.data.concat(responseData.movies),
					loaded: true,
				});
			});
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>
					正在加载电影数据……
				</Text>
			</View>
		);
	}

	renderMovie({item}) {
		return (
			<Picker
				style={{height: 50, width: 100}}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
			</Picker>
		);
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<FlatList
				data={this.state.data}
				renderItem={this.renderMovie}
				style={styles.list}
				keyExtractor={item => item.id}
				extraData={this.state}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	rightContainer: {
		flex: 1
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
	list: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
	thumbnail: {
		width: 53,
		height: 81
	}
});
