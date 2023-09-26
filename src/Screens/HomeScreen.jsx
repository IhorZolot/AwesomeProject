import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PostsScreen from './PostsScreen'
import ProfileScreen from './ProfileScreen'
import SvgGridPosts from '../Image/SvgGridPosts'
import SvgIconUser from '../Image/SvgIconUser'
import SvgLogOut from '../Image/SvgLogOut'
import SvgNewPost from '../Image/SvgNewPost'

const handleLogout = navigation => {
	try {
		navigation.navigate('Login')
	} catch (error) {
		console.error('Помилка при логауті:', error)
	}
}
const Tabs = createBottomTabNavigator()

export default function HomeScreen({ navigation }) {
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				headerStyle: {
					backgroundColor: '#fff',
				},
				headerTintColor: 'black',
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 20,
				},
				headerRight: () =>	<Button onPress={() => handleLogout(navigation)} title="Logout" color="black">
					<SvgLogOut />
	        	</Button>,
				tabBarIcon: () => {
					let iconName
					if (route.name === 'PostsScreen') {
						iconName = <SvgGridPosts/>
					} if (route.name === 'ProfileScreen') {
						iconName = <SvgIconUser/>
					} if (route.name === 'CreatePost') {
						iconName = <SvgNewPost />
					}
					return iconName
				},
			})}
		>
			<Tabs.Screen options={{ headerTitle: 'Публікації' }} name='PostsScreen' component={PostsScreen} />
			<Tabs.Screen
				listeners={{
					tabPress: e => {
						navigation.navigate('CreatePost')
						e.preventDefault()
					},
				}}
				name='Create'
				component={View}
			/>
			<Tabs.Screen options={{ headerTitle: 'Профіль' }} name='ProfileScreen' component={ProfileScreen} />
		</Tabs.Navigator>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	heading: {
// 		fontSize: 24,
// 		fontWeight: 'bold',
// 		marginBottom: 20,
// 	},
// })
