// src/Screens/PostsScreen.js

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default PostsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Posts</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
})