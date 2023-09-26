import React, {  useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import CameraComponent from "./CameraComponent"; 
import SvgTrash from '../Image/SvgTrash';
import SvgLocation from '../Image/SvgLocation';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostsScreen() {
	const [photoName, setPhotoName] = useState(""); 
	const [photoUri, setPhotoUri] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  

  const handlePictureTaken = async (uri) => {
    setPhotoUri(uri);
    console.log("Посилання на фото:", uri);
  };
  
  const publishPost = () => {
    if (photoUri || photoName || locationName) {
      const newPost = {
        photoName,
        photoUri,
        locationName,
      };
      dispatch(addPost(newPost)); 
      clearForm();
      navigation.navigate('PostsScreen');;
    }
  };

	const handlePhotoNameChange = (text) => {
    setPhotoName(text);
    updateButtonActivity(text, locationName); 
  };
  const handleLocationNameChange = (text) => {
    setLocationName(text);
    updateButtonActivity(photoName, text); 
  };
  const updateButtonActivity = (name, location) => {
    const isAnyFieldFilled = name.trim() !== "" || location.trim() !== "";
    setIsButtonActive(isAnyFieldFilled);
  };
  
  const clearForm = () => {
    setPhotoName("");
    setLocationName("");
    setPhotoUri(null);
    setIsButtonActive(false);
  };

  return (
    <View style={styles.container}>
        <View style={styles.photoContainer}>
        <CameraComponent  onPictureTaken={handlePictureTaken} />
        </View>
			<Text style={styles.uploadText}>Завантажити фото</Text>

			<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
					placeholderTextColor="#BDBDBD"
					value={photoName}
        onChangeText={handlePhotoNameChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <SvgLocation />
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
					value={locationName}
        onChangeText={handleLocationNameChange}
        />
      </View>
      <View  style={styles.buttonContainer} >
      <TouchableOpacity
  style={[
    styles.publishButton,
    {
      backgroundColor: isButtonActive ? "#FF6C00" : "#f4f1eed2",
    },
  ]}
  onPress={publishPost}
  disabled={!isButtonActive}
>
  <Text style={[styles.buttonText, { color: isButtonActive ? "white" : "#BDBDBD" }]}>
    Опублікувати
  </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.publishDelButton} onPress={clearForm} >
          <SvgTrash />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
		marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
	photoContainer: {
    width: 343,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
	uploadText: {
    color: '#BDBDBD',
    fontSize: 16,
    fontStyle: 'normal',
    marginTop: 10, 
  },
	inputContainer: {
    display: 'flex',
    flexDirection: 'row', 
    width: 343,
    paddingTop: 16,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: 'black', 
    padding: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  publishButton: {
    display: 'flex',
    width: 343,
		padding: 16,
		backgroundColor: '#f4f1eed2',
		marginTop: 27,
    alignItems: 'center',
    gap: 12,
    borderRadius: 100,
  },
  publishDelButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    marginTop: 200, 
    marginBottom:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',

  },
  buttonText: {
    color: '#BDBDBD',
    textAlign: 'center',
    fontSize: 16,
  },
});
