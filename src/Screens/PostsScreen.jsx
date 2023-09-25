import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PostsScreen() {
	const navigation = useNavigation()

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
	logoutButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
	logoutText: {
		fontSize: 18,
		color: 'white',
		marginLeft: 10,
	},
})
