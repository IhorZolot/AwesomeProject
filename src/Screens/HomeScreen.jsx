import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import PostsScreen from './PostsScreen'
import ProfileScreen from './ProfileScreen'

const handleLogout = async () => {
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
				headerRight: () => <Button onPress={() => handleLogout()} title='Logout' color='black' />,
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

// tabBarIcon: ({ focused, color, size }) => {
// 	let iconName
// 	if (route.name === 'ProfileScreen') {
// 		iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
// 	} else if (route.name === 'PostsScreen') {
// 		iconName = focused ? 'ios-list-box' : 'ios-list'
// 	}
// 	return <Ionicons name={iconName} size={size} color={color} />
// },
