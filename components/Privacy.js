import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
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
                <View style={styles.titleContainer}>
                    <Text style={styles.buttonP}>Paramètres de</Text>
                    <Text style={styles.buttonPC}>Confidentialité</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop:30,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonP: {
        fontSize: 24,
        color: '#000',
        fontWeight: '800',
        marginLeft:1,
      
    },
    buttonPC: {
        fontSize: 24,
        color: '#000',
        fontWeight: '800',
        marginTop: 4,
        marginRight:200,
       
    },
})