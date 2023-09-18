import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import RegistrationScreen from './src/Screens/RegistrationScreen'
import LoginScreen from './src/Screens/LoginScreen'

export default function App() {
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
