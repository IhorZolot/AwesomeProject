import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebaseConfig'; 
import { addComment } from '../redux/comentsSlise';

export default function CommentsScreen({route}) {
  const [comment, setComment] = useState('');
  const userId = useSelector((state) => state.auth.userId); 
  const dispatch = useDispatch();
  const { postId } = route.params;

  const handleCommentChange = (text) => {
    setComment(text);
  };
  const handleCommentSubmit = async () => {
    // try {
    //   const date = new Date();
    //   const commentData = {
    //     text: comment,
    //     userId: userId,
    //     postId: postId,
    //   };
    //   const docRef = await addDoc(collection(db, 'posts', postId, 'comments'), {...commentData,  date: Date.now().toString()});
    //   dispatch(addComment({ id: docRef.id, ...commentData }));
    //   setComment('');
    //   console.log( docRef.id);
    // } catch (error) {
    //   console.error('Помилка при додаванні коментаря:', error);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Введіть ваш коментар..."
        value={comment}
        onChangeText={handleCommentChange}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleCommentSubmit}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
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
});
