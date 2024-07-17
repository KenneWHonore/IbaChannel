import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, Image, } from "react-native";
import * as Animatable from 'react-native-animatable';




export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            {/* <View><Text style={styles.bigTitle}>{item.bigTitle}</Text>
            
            </View> */}
            <Animatable.Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} animation="bounceIn"/>

            <View style={{ flex: 0.3 }}>
                <Animatable.Text style={styles.title} animation="bounceIn">{item.title}</Animatable.Text>
                <Animatable.Text style={styles.description} animation="bounceIn">{item.description}</Animatable.Text>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,

    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: '64',
        marginHorizontal:15
    },
    title: {
        fontWeight: '800',
        color: '#493d8a',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 10,
        
    },
    bigTitle:
    {
        fontWeight:'800',
        fontSize:'40',
        color:'#493d8a',
        marginRight:255,
        marginTop:20,
        
    }


});
