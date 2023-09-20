import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { ImageBackground, StyleSheet, View } from 'react-native'
import RegistrationScreen from './src/Screens/RegistrationScreen'
import LoginScreen from './src/Screens/LoginScreen'

export default function App() {
	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
				Roboto_Bold: require('./assets/fonts/Roboto-Medium.ttf'),
			})
		}
		loadFonts()
	}, [])
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./src/Image/BG.png')} resizeMode='cover' style={styles.image}>
				<RegistrationScreen />
				{/* <LoginScreen /> */}
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
})
