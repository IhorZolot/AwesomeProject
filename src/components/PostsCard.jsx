import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const PostsCard = ({ posts }) => {
  if (!posts) {
    return <Text>No posts available.</Text>;
  }

  return (
    <View>
      {posts.map((post, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: post.photoUri }} style={styles.photo} />
          <Text style={styles.name}>{post.photoName}</Text>
          <Text style={styles.location}>{post.locationName}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
});


