import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import SvgLocation from '../Image/SvgLocation';
import SvgComment from '../Image/SvgComment';
import { useSelector } from 'react-redux';

export default function PostsScreen() {
  const posts = useSelector((state) => state.posts.posts);
  const navigation = useNavigation()
 
  return (
		<ScrollView contentContainerStyle={styles.container}>
      {posts && posts.map((post, index) => (
        <View key={index} style={styles.card}>
        <Image source={{ uri: post.photoUri }} style={styles.photo} />
        <Text style={styles.name}>{post.photoName}</Text>
      <View style={styles.localContainer}>
        <TouchableOpacity
        style={styles.commentButton}
        onPress={() => navigation.navigate('Comments')}
      > 
       <SvgComment />
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.mapButton}
        onPress={() => navigation.navigate('Map')}
      >
        <SvgLocation />
      </TouchableOpacity>
      <Text style={styles.location}>{post.locationName}</Text>
      </View>
      </View>
      ))}
      </ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'left',
   marginTop: 20,
    marginLeft: 20,
  },
	photo: {
    width: 350, 
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 8, 
  },
	name: {
    fontSize: 16,
    color: '#BDBDBD',
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
	logoutButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
	logoutText: {
		fontSize: 18,
		color: 'white',
		marginLeft: 10,
	},
  localContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
  },
  
  commentButton: {
    marginRight: 64,
    marginLeft: 10, 
  },
  mapButton: {
    marginRight: 4,
  },
})
