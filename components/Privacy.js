import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default Privacy = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} activeOpacity={0.6}>
                    <AntDesign name="arrowleft" size={32} color="#FFB400" />
                </TouchableOpacity>

                <Text style={styles.buttonP}>Paramètres de Confidentialité</Text>

                {/* <Text style={styles.buttonPC}> Confidentialité</Text> */}

            </View>
            <Text style={styles.cookies}>cette application utilise des cookies</Text>
            <Text style={[styles.cookiesP, { fontWeight: 300 }]}>certains sont utilisé a des fin statistiques et d’autres sont mis en place par des services tiers. En cliquant sur <Text style={styles.span}>“Accepter tout”</Text> vous acceptez l’utilisations des cookies.</Text>
            <View style={styles.checkContainer}>
                <Image style={styles.image} source={require('../assets/Check.png')} />
                <Text style={[styles.check1, { fontWeight: 300 }]}>j’accepte les <Text style={styles.span}>Termes et conditions d’utilisation</Text> de cette application</Text>
            </View>
            <View style={styles.checkContainer2}>
                <Image style={styles.image} source={require('../assets/Check.png')} />
                <Text style={[styles.check2, { fontWeight: 300 }]}>je consens a l’utilisation de mes données personnelles. cela nouspermet de collecter des donnéessur la facon dont vous utilisez cette application par diverses technologies, y compris l’emplacement, l’ID de l’appareilet l’adresse IP. Nous faisons celapour créer des statistiques, personnaliser l’experience et notre marketing envers vous. Vouspouvez vous retracter a tout moment en vous rendant surnotre politique de confidentialité</Text>
            </View>
            <View style={[styles.buttonContainer, { marginTop: 70 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Go')} style={styles.buttonA}>
                    <Text style={styles.buttonText}>accepter tout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.buttonR}>
                    <Text style={[styles.buttonText, { paddingHorizontal: 70 }]}>refuser tout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        fontFamily: 'Montserrat',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    header:
    {
        flexDirection: 'row',
        width: '100%',

    },
    buttonP:
    {
        marginLeft: 25,
        fontWeight: 800,
        fontSize: 20,
        marginTop: 14,
    },
    cookies:
    {
        textAlign: 'center',
        opacity: 0.5,
        marginTop: -10,

    },
    cookiesP:
    {
        marginTop: 30,
        marginLeft: 20,
        flexWrap: 'wrap',
        width: '95%',
        fontWeight: 300,
    },
    span:
    {
        color: '#FFB400',
        fontWeight: 800,
    },
    checkContainer:
    {
        marginTop: 50,
        flexDirection: 'row',
        width: '80%',
    },
    image:
    {
        marginLeft: 15,
    },
    check1:
    {
        marginTop: 15,
    },
    checkContainer2:
    {
        flexDirection: 'row',
        width: '75%',
        marginTop:10,
    },
    check2:
    {
        marginTop: 10,
    },
    buttonA: {
        backgroundColor: '#FFB400',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    buttonR: {
        backgroundColor: '#FF0F00',
        padding: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    buttonContainer:
    {
        margin: 20,
       

    }

})