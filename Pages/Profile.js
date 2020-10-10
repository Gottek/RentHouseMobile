import React from 'react';
import {StyleSheet, Text, View,Image} from "react-native";
import {SectionProfile} from "../Components/SectionProfile";
import {Button, Divider} from 'react-native-paper';
import Colors from "../Constants/Colors";

export default function Profile(props){

    function LogOut(){
        console.log("salut tout le monde");
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.containerImage}>
                    <Image source={require('../assets/Photos/PhotoProfileExample.webp')}
                           style={{width: 150, height: 150, borderRadius: 150/ 2}} />
                </View>
                <View style={styles.containerNomPrenom}>
                    <View >
                        <Text style={styles.containerPrenom}>Jean-Jacque</Text>
                    </View>
                    <View style={styles.containerNom}>
                        <Text>1er du nom</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerSecondaire}>
                <SectionProfile text="Notifactions"/>
                <Divider/>
                <SectionProfile text="Theme sombre"/>
                <Divider/>
                <SectionProfile text="Mode avion"/>
                <Divider/>
                <Button mode='outlined' color={Colors.purpleStyle} onPress={LogOut}>Log out</Button>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding:30,
        flex:1,
    },
    containerHeader:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        padding:5,
        borderRadius:10,
        elevation:3
    },
    containerImage:{
        alignItems:"center",
        flex:1
    },
    containerNom:{
    },
    containerPrenom:{
        fontWeight: '400',
        fontSize:20
    },
    containerNomPrenom:{
        alignItems: "center",
        flex:1
    },
    containerSecondaire:{
        flex:1,
        marginTop:10,
        backgroundColor:"#fff",
        borderRadius:10,
        padding:10,
        elevation:3
    }
});
