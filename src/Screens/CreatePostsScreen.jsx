import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import CameraComponent from "./CameraComponent"; 

export default function CreatePostsScreen() {
	const [photoName, setPhotoName] = useState(""); 
	const [photoUri, setPhotoUri] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [coords, setCoords] = useState(null);

  const handlePictureTaken = async (uri) => {
    setPhotoUri(uri);
    console.log("Посилання на фото:", uri);
    // try {
    //   await MediaLibrary.createAssetAsync(uri);
    // } catch (error) {
    //   console.error("Помилка під час збереження фотографії:", error);
    // }
  };

	const handlePhotoNameChange = (text) => {
    setPhotoName(text); 
  };
  const handleLocationNameChange = (text) => {
    setLocationName(text); 
  };
  const publishPost = () => {
		// getLocation();
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
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
					value={locationName}
        onChangeText={handleLocationNameChange}
        />
      </View>
      <View  style={styles.buttonContainer} >
      <TouchableOpacity style={styles.publishButton} onPress={publishPost}>
        <Text style={styles.buttonText}>Опублікувати</Text>
      </TouchableOpacity>
			<TouchableOpacity style={styles.publishDelButton} >
        <Text style={styles.buttonText}>Del</Text>
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
    width: 343,
    paddingTop: 16,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
    flexDirection: 'column',
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
    backgroundColor: '#F6F6F6',

  },
  buttonText: {
    color: '#BDBDBD',
    textAlign: 'center',
    fontSize: 16,
  },
});
