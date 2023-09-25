import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SvgXml } from 'react-native-svg'

import PostsScreen from './PostsScreen'
import ProfileScreen from './ProfileScreen'
import GridPosts from '../Image/GridPosts'
import IconUser from '../Image/IconUser'

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
				headerRight: () => <Button onPress={() => handleLogout(navigation)} title='Logout' color='black' />,
				// tabBarIcon: ({ color, size }) => {
				// 	let iconName
				// 	if (route.name === 'PostsScreen') {
				// 		iconName = <SvgXml xml={GridPosts} />
				// 	} else if (route.name === 'ProfileScreen') {
				// 		iconName = <SvgXml xml={IconUser} />
				// 	}
				// 	return iconName
				// },
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
