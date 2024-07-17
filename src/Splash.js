import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
     useEffect(() => {
         setTimeout(() => {
             navigation.navigate('Onboarding');
         }, 10000);
    }, []);

    return (
        <View 
        style={{ 
            backgroundColor:'white',
            flex: 1, 
            justifyContent: "center",
             alignItems: "center" 
             }}>
            <Animatable.View 
            duration={2000} 
            animation="fadeInDownBig">
                <Image 
                source={require('../assets/IBAlogo.png')} 
                style={{ 
                    width: 150, 
                    height: 150, 
                    resizeMode: 'contain' 
                }} />
            </Animatable.View>
            <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
                <Animatable.Text 
                style={{ 
                    fontSize: 16,  
                    textAlign: 'center', 
                    marginTop: 20 
                }}
                duration={10000} 
                animation="slideOutUp">
                    International business Africa channel
                </Animatable.Text>
                <Animatable.Text 
                style={{ 
                    fontSize: 12, 
                    textAlign: 'center', 
                    marginTop: 20, 
                    marginBottom:-30,
                }}
                duration={10000} 
                animation="slideOutUp">
                    V1.0.0
                </Animatable.Text>
            </View>
        </View>
    );
};

export default Splash