import * as React from 'react';
import {Avatar, Card, Paragraph, Text, Title} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const HomeCardView = (props) => {

    const [isClicked,setIsClicked]=React.useState(false);

    const LeftContent = () => <Avatar.Image size={50} source={require('../assets/Photos/PhotoProfileExample.webp')} />
    const redirection =()=>props.navigation.navigate('HomeDetails', {name: "Détails de la maison",idHome:props.idHome,isAdmin:props.isAdmin})
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
    const defaultImageURL = props.imageLink?props.imageLink:"https://i.ytimg.com/vi/cA2cYo86Kws/maxresdefault.jpg";

    return(
        <View>
            <Card style={[styles.cardStyle,{backgroundColor:themeSelf.colors.primary}]} onPress={redirection}>
                <Card.Title
                    titleStyle={{color:themeSelf.colors.accent}}
                    title={props.userName}
                    subtitle={props.userDescription}
                    subtitleStyle={{color:themeSelf.colors.textColor}}
                    left={LeftContent} />
                <Card.Content>
                    <Title style={{color:themeSelf.colors.accent}}>{props.homeTitle}</Title>
                    <Paragraph style={{marginBottom: hp('2%'),color:themeSelf.colors.textColor}}>prix: {props.homePrice}€ - chambre: {props.homeRoom}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: defaultImageURL }} />
                <Card.Actions>
                    <View style={styles.heartIconsContainer}>
                        <View style={styles.heartContainer}>
                            <AntDesign name="heart" onPress={()=>setIsClicked(!isClicked)}
                                       size={30} color={isClicked?themeSelf.colors.textColor:themeSelf.colors.accent} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.iconContainer}>
                            <Text style={{color:themeSelf.colors.textColor,margin:2}}>{props.homeadress}</Text>
                            <Text style={{color:themeSelf.colors.accent,margin:2}}>{props.totalArea} M2 </Text>
                            <Text style={{color:themeSelf.colors.textColor,margin:2}}>{props.fixedChargesCost} € / M</Text>
                        </View>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle:{
        marginBottom:hp('3%'),
        elevation:5,
        marginHorizontal:hp('0.5%')
    },
    iconContainer:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row"
    },
    iconStyle:{
        textAlign: 'center',
        flex:1
    },
    heartContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    heartIconsContainer:{
        flex:1,
        justifyContent:'center',
        flexDirection:"row"
    }
})

export default HomeCardView;
