import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'
import SvgAddPhoto from '../Image/SvgAddPhoto'

const initialUsers = []

export default function RegistrationScreen({ navigation }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [users, setUsers] = useState(initialUsers)

	const handleRegistration = () => {
		const userExists = users.some(u => u.email === email)
		if (userExists) {
			setError('Користувач з такою електронною поштою вже існує')
		} else {
			const newUser = { id: users.length + 1, email, password }
			setUsers([...users, newUser])
			navigation.navigate('Home')
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				<ImageBackground source={require('../Image/BG.png')} resizeMode='cover' style={styles.image}>
				<View style={styles.innerContainer}>
					<View style={styles.SvgAddPhoto}>
					<SvgAddPhoto />
					</View>
					<Text style={styles.heading}>Реєстрація</Text>
					<TextInput style={styles.input} placeholder='Логін' value={name} onChangeText={setName} />
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
					<TouchableOpacity style={styles.button} onPress={handleRegistration}>
						<Text style={styles.buttonText}>Зареєструватися</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={styles.span}>Вже є акаунт? Увійти</Text>
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
	innerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#ffffff',
		height: 549,
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
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
})
