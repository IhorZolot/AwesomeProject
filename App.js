import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import 'react-native-gesture-handler'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import RegistrationScreen from './src/Screens/RegistrationScreen'
import LoginScreen from './src/Screens/LoginScreen'
import HomeScreen from './src/Screens/HomeScreen'
import MapScreen from './src/Screens/MapScreen'
import CreatePostScreen from './src/Screens/CreatePostsScreen'
import CommentsScreen from './src/Screens/CommentsScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Registration' component={RegistrationScreen} />
	</Stack.Navigator>
)

const HomeNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeScreen'>
		<Stack.Screen name='Home' component={HomeScreen} />
		<Stack.Screen name='Map' component={MapScreen} options={{ headerShown: true }} />
		<Stack.Screen name='CreatePost' component={CreatePostScreen} options={{ headerShown: true }} />
		<Stack.Screen name='Comments' component={CommentsScreen} options={{ headerShown: true }} />
	</Stack.Navigator>
)

export default function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
				Roboto_Bold: require('./assets/fonts/Roboto-Medium.ttf'),
			})
			setFontsLoaded(true)
		}
		loadFonts()
	}, [])
	if (!fontsLoaded) {
		return (
			<View style={styles.loadingContainer}>
				<Text>Loading fonts...</Text>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./src/Image/BG.png')} resizeMode='cover' style={styles.image}>
				<NavigationContainer>{!isAuth ? <HomeNavigator /> : <AuthNavigator />}</NavigationContainer>
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
