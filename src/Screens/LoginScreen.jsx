import React, { useState } from 'react'
import {
	View,
	Text,
	Keyboard,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native'
import SvgAddPhoto from '../Image/SvgAddPhoto'

const users = [
	{ id: 1, email: 'user1@example.com', password: 'password1' },
	{ id: 2, email: 'user2@example.com', password: 'password2' },
]

export default LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		const user = users.find(u => u.email === '' && u.password === '')
		if (user) {
			navigation.navigate('Home')
		} else {
			setError('Невірний пароль або електронна пошта')
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled>
			<ImageBackground source={require('../Image/BG.png')} resizeMode='cover' style={styles.image}>
				<View style={styles.innerContainer}>
				<View style={styles.SvgAddPhoto}>
					<SvgAddPhoto />
					</View>
					<Text style={styles.heading}> Увійти </Text>
					<TextInput
						style={styles.input}
						placeholder='Адреса електронної пошти'
						value={email}
						onChangeText={setEmail}
					/>
					<TextInput
						style={styles.input}
						placeholder='Пароль'
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
					<TouchableOpacity style={styles.button} onPress={handleLogin}>
						<Text style={styles.buttonText}>Увійти</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Registration')}>
						<Text style={styles.span}>Немає акаунту? Зареєструватися</Text>
					</TouchableOpacity>
				</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	innerContainer: {
		height: 489,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#ffffff',
	},
	SvgAddPhoto:{
		position: 'absolute',
		top: -60,
	},
	heading: {
		color: '#212121',
		textAlign: 'center',
		// fontFamily: 'Roboto-Regular',
		fontSize: 30,
		fontStyle: 'normal',
		fontWeight: 500,
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
