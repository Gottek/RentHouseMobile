import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Image} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import Colors from "../Constants/Colors";

export default function MyImagePicker(props){

    const [imagePath,setImagePath] = useState('');
    const takeImage=async () => {
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.5
        });
        setImagePath(image.uri);
        props.onImageTaken(image.uri)
    }

  return(
      <View style={styles.mainContainer}>
          <View style={styles.imagePreview}>
              {!imagePath?<Image source={require('../assets/Photos/CameraPicture.jpg')} style={styles.imageDimension}/>
                  :<Image style={styles.imageDimension} source={{uri:imagePath}}/>}
          </View>
          <Button mode='outlined' color={Colors.purpleStyle} onPress={takeImage} title={"Choisir une image"}/>
      </View>
  );
};

const styles=StyleSheet.create({
    mainContainer:{
        marginBottom:20
    },
   imagePreview:{
        justifyContent:"center",
       alignItems:"center",
       width:'100%',
       height:300,
       marginBottom: 10,
   },
    imageDimension:{
        width: '100%',
        height: '100%',
        borderRadius:15
    }
});