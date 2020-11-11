import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import HomeCardView from "./HomeCardView";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const HomesList=({navigation})=>{

    const homesArray=useSelector(state=>state.reducerHomeKey.allHomes);
    const personArray=useSelector(state=>state.reducerUserKey.allClients);
    const currentID = useSelector(state => state.reducerUserKey.currentID);

    const renderHome = Data => {
        const person = personArray.find(p => p.idClient === Data.item.idProprio);

        return (
            <HomeCardView
                idHome={Data.item.idProperty}
                idProprio={Data.item.idProprio}
                userName={person?.name}
                userDescription={person?.surname}
                homeTitle={Data.item.description}
                homePrice={Data.item.rentCost}
                homeadress={Data.item.adress}
                homeRoom={Data.item.type}
                homeImage={Data.item.imageLink}
                totalArea = {Data.item.totalArea}
                isAdmin = {Data.item.idProprio===currentID}
                fixedChargesCost = {Data.item.fixedChargesCost}
                navigation={navigation}
            />
        );
    }

    return(
        <FlatList
            data={homesArray}
            renderItem={renderHome}
            keyExtractor={(item, index) => index.toString()}
            style={styles.MainContainer}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        padding:hp('3%'),
    }
});
