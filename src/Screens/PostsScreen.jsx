import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import SvgLocation from '../Image/SvgLocation';
import SvgComment from '../Image/SvgComment';


export default function PostsScreen({ route }) {
  const { photoUri, photoName, locationName } = route;
	console.log(route.params)
  const navigation = useNavigation()
  return (
		<View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.photo} />
      <Text style={styles.name}>{photoName}</Text>
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
      <Text style={styles.location}>{locationName}</Text>
      </View>
    </View>
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
    marginTop: 10,
  },
  
  commentButton: {
    marginRight: 64,
    marginLeft: 10, 
  },
  mapButton: {
    marginRight: 4,
  },
})
