import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import CreatePostsScreen from './Screens/CreatePostsScreen'
import RegistrationScreen from './Screens/RegistrationScreen'
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import MapScreen from './Screens/MapScreen'
import CommentsScreen from './Screens/CommentsScreen'

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
		<Stack.Screen name='CreatePost' component={CreatePostsScreen} options={{ headerShown: true }} />
		<Stack.Screen name='Comments' component={CommentsScreen} options={{ headerShown: true }} />
	</Stack.Navigator>
)

export const RootNavigation = () => {
	const isAuth = useSelector((state) => state.auth.userId)
// console.log(isAuth)
  return (
    <NavigationContainer>{isAuth ? <HomeNavigator /> : <AuthNavigator />}</NavigationContainer>
  )
}
