import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function CommentsScreen() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    console.log('Ваш коментар:', comment);
  };

  return (
    <View style={styles.container}>
      <Text>Comments Screen</Text>
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
        <Text>Додати коментар</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
});
