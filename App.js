import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Platform.OS === 'ios' ? 50 : 100,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
