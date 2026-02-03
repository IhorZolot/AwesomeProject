import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import {store, persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { RootNavigation } from './src/RootNavigation'

export default function App() {
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
		<Provider store={store}>
			<PersistGate
        loading={ <Text>Loading content...</Text> }
        persistor={persistor}
      > 
			<RootNavigation />
		</PersistGate> 
		</Provider>
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
