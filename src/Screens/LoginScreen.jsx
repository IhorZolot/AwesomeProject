import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}> Увійти </Text>
			<TextInput style={styles.input} placeholder='Адреса електронної пошти' />
			<TextInput style={styles.input} placeholder='Пароль' secureTextEntry />
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Увійти</Text>
			</TouchableOpacity>
			<Text style={styles.span}>Немає акаунту? Зареєструватися</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 489,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		backgroundColor: '#ffffff',
	},
	heading: {
		color: '#212121',
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 30,
		fontStyle: 'normal',
		fontWeight: 500,
		lineHeight: 'normal',
		letterSpacing: 0.3,
		marginBottom: 33,
	},
	input: {
		width: 343,
		height: 50,
		borderWidth: 1,
		borderColor: '#E8E8E8',
		marginBottom: 16,
		paddingHorizontal: 10,
		borderRadius: 6,
		backgroundColor: '#F6F6F6',
	},
	button: {
		width: 343,
		padding: 16,
		borderRadius: 100,
		backgroundColor: '#FF6C00',
		marginTop: 27,
	},
	buttonText: {
		color: '#ffffff',
		textAlign: 'center',
	},
	span: {
		marginTop: 20,
	},
})
