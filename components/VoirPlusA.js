import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getImage} from "./Acceuil";
import {decode} from "html-entities";
import HTMLView from 'react-native-htmlview';
import moment from 'moment';


const VoirPlusA = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;


    return (
        <ScrollView style={styles.container}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingEnd: 10}}>
            <View style={styles.header}>
                <Image source={{uri: getImage(item)}} style={[styles.image, {height: 300}]}/>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonAbsolute} activeOpacity={0.6}>
                    <AntDesign name="arrowleft" size={32} color="#FFB400"/>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: "column"}}>
                <Text style={styles.title}>{decode(item.title.rendered)}</Text>
                <Text style={styles.date}>{moment(decode(item.date)).format('D MMMM YYYY [à] HH:mm')}</Text>

                <Text style={{
                    marginTop: 15,
                    opacity: 0.7,
                    fontSize: 14,
                    fontWeight: 300,
                    textAlign: 'justify',
                    margin: 10,
                    flexWrap: 'wrap',
                }}><HTMLView value={decode(item.content.rendered)} css={{p: {textAlign: 'justify',}}}/></Text>
            </View>


        </ScrollView>
    );
};
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    header:
        {
            flexDirection: 'row',
            width: '100%',
            position: 'relative',

        },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonAbsolute: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 9,
    },
    image:
        {
            width: screenWidth,
        },
    title:
        {
            color: '#FFB400',
            fontSize: 18,
            fontWeight: 500,
            margin: 10,


        },
    imageActu:
        {
            width: 150,
            height: 200,
            marginLeft: 20,
            borderRadius: 5,
            marginTop: 20,
            opacity: 0.8,
            backgroundColor: '#000',
            marginTop: 15

        },
    ImageText:
        {
            width: '90%',
            marginTop: 145,
            flexWrap: 'wrap',
            marginLeft: 15,
            fontWeight: 600
        },
    date:
        {
            marginLeft: 15,
        },


});

export default VoirPlusA;
