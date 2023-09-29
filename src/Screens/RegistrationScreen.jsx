import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { authSignUpUser } from '../redux/operations'
import { useNavigation } from '@react-navigation/native'

export default function RegistrationScreen() {
	const [login, setLogin] = useState("");
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("qwertyqwerty");
	const dispatch = useDispatch()
	const navigation = useNavigation();

	const handleRegistration = () => {
		if ( !email || !password) {
			return alert('Будь ласка, заповніть всі поля')
		}
		dispatch(authSignUpUser({ email, password }))
		resetForm()
	}
	function resetForm() {
    setLogin("");
    setEmail("");
    setPassword("");
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
						<TextInput
							style={styles.input}
							placeholder='Логін'
							value={login}
							onChangeText={(text) => setLogin(text)}
						/>
						<TextInput
							style={styles.input}
							value={email}
                  placeholder="Адреса електронної пошти"
                  onChangeText={(text) => setEmail(text)}
						/>
						<TextInput
							style={styles.input}
							secureTextEntry
							value={password}
                    placeholder="Пароль"
                    onChangeText={(text) => setPassword(text)}
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
	SvgAddPhoto: {
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
