import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

const Go = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('BottomTab');
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
                <LottieView
                    source={require('../GoAnimation.json')}
                    autoPlay
                    loop
                    style={{
                        width: 300,
                        height: 300,
                    }}
                />
            </Animatable.View>
        </View>
    );
};

export default Go;