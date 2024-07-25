import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default Setting = () => {
    const navigation = useNavigation();
    const [theme, setTheme] = useState('light'); // Initialize the theme to "light"

    const handleImagePress = (imageNumber) => {
        if (imageNumber == 2) {
            setTheme('dark'); // Change the theme to "dark" when image 2 is clicked
        } else {
            setTheme('light'); // Reset the theme to "light" for other images
        }
    };

    return (
        <View style={[styles.container, theme == 'dark' ? styles.darkTheme : styles.lightTheme]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} activeOpacity={0.6}>
                <AntDesign name="arrowleft" size={32} color="#FFB400"/>
            </TouchableOpacity>
            <View style={styles.childContainer}>
                <Text style={styles.apparence}>Mode apparence</Text>
                <Text style={styles.des}>Personnalisez votre theme pour une experience utilisateur</Text>
                <Text style={styles.des}>unique</Text>
                <View style={styles.imagesContainer}>
                    <TouchableOpacity onPress={() => handleImagePress(1)}>
                        <Image style={styles.image1} source={require('../assets/setting1.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleImagePress(2)}>
                        <Image style={styles.image} source={require('../assets/setting2.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleImagePress(3)}>
                        <Image style={styles.image} source={require('../assets/setting3.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.langueContainer}>
                    <Text style={[styles.text, styles.langue]}>Langue</Text>
                    <TouchableOpacity onPress={() => handleImagePress(1)}>
                        <Text style={styles.langueSelect}>Francais</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.langueContainer, {marginTop: 20}]}>
                    <Text style={styles.notif}>Notification</Text>
                    <TouchableOpacity onPress={() => handleImagePress(1)}>
                        <Text style={styles.notifselect}>Activer</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer, {marginTop:40}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacy')} style={styles.buttonA}>
                        <Text style={styles.buttonText}>Appliquer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        fontFamily: 'Montserrat',
    },
    lightTheme: {
        backgroundColor: 'white',
    },
    darkTheme: {
        backgroundColor: 'black',
    },
    apparence: {
        fontWeight: '500',
        fontSize: 24,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        width: 360 / 3 - 20, // 20 is the spacing between images
        height: 300,
        resizeMode: 'contain',
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,

    },
    image1: {
        width: 353 / 3 - 20, // 20 is the spacing between images
        height: 290,
        resizeMode: 'contain',
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    des: {
        fontSize: 12,
        width: '100%',
        flexWrap: 'wrap',
        color: '#62656b',
    },
    langueContainer:
        {
            flexDirection: 'row',
            width: '100%',
            justifyContent: "space-between"
        },
    langue:
        {
            fontWeight: '400',
            fontSize: 16,
            fontFamily: 'Montsera',
        },
    langueSelect:
        {
            fontWeight: '500',
            fontSize: 16,
            color: '#FFB400',

        },
    notifContainer:
        {
            flexDirection: 'row',
            marginTop: 20,
        },
    notif:
        {
            fontWeight: '400',
            fontSize: 16,
            fontFamily: 'Montsera',
           
        },
    notifselect:
        {
            fontFamily: 'Montsera',
            fontWeight: '500',
            fontSize: 16,
            color: '#FFB400',

        },
    buttonContainer:
        {
            marginTop: 30,
           
        },
    buttonA: {
        backgroundColor: '#FFB400',
        padding: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',

        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 4,
    }, childContainer: {
        flex: 1,
        padding: 20
    }


});
