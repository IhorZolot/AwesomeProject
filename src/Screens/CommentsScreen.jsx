import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../redux/comentsSlise'
import { db } from '../firebaseConfig'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { getPosts } from '../redux/operations'

export default function CommentsScreen({ route }) {
	const posts = useSelector(state => state.posts.posts)
	const userId = useSelector(state => state.auth.userId)
	const [comment, setComment] = useState({ text: '', date: '', autorId: userId })
	const dispatch = useDispatch()

	const { postId } = route.params
	const currentPost = posts.find(item => item.postId === postId)

	console.log(currentPost)

	const handleCommentChange = text => {
		setComment(prev => ({ ...prev, text }))
	}
	const handleCommentSubmit = async () => {
		try {
			await updateDoc(doc(db, 'posts', postId), {
				comments: arrayUnion({ ...comment, date: new Date() }),
			})
			setComment('')
			dispatch(getPosts())
		} catch (error) {
			console.error('Помилка при додаванні коментаря:', error)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Введіть ваш коментар...'
					value={comment}
					onChangeText={handleCommentChange}
				/>
				<TouchableOpacity style={styles.submitButton} onPress={handleCommentSubmit}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 20,
		borderRadius: 20,
		position: 'relative',
	},
	submitButton: {
		backgroundColor: '#FF6C00',
		padding: 8,
		borderRadius: 30,
		position: 'absolute',
		right: 10,
		top: 2,
	},
	buttonText: {
		color: 'white',
	},
})
