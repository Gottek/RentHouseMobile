import React, {useState} from 'react';
import {Button, Image, StyleSheet, View} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MyImagePicker(props) {

    const [imagePath, setImagePath] = useState('');
    const takeImage = async () => {
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.5
        });
        setImagePath(image.uri);
        props.onImageTaken(image.uri)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imagePreview}>
                {!imagePath ?
                    <Image source={require('../assets/Photos/CameraPicture.jpg')} style={styles.imageDimension}/>
                    :
                    <Image style={styles.imageDimension} source={{uri: imagePath}}/>}
            </View>
            <Button mode='outlined' color={props.themeSelf.colors.accent} onPress={takeImage}
                    title={"Choisir une image"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: hp('2%')
    },
    imagePreview: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: hp('35%'),
        marginBottom: hp('1%'),
    },
    imageDimension: {
        width: '100%',
        height: '100%',
        borderRadius: hp('1.5%')
    }
});
