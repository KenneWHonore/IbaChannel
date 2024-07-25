import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';

const Go = ({navigation}) => {
     useEffect(() => {
         setTimeout(() => {
             navigation.navigate('Acceuil');
         }, 5000);
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
                <Text style={{fontWeight:800, fontSize:32}}>C'est parti...</Text>
            </Animatable.View>
           
        </View>
    );
};

export default Go