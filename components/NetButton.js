import { StyleSheet, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle, G } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export default NextButton = ({ percentage, scrollTo }) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const raduis = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * raduis;


    const progessAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progessAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    };
    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progessAnimation.addListener(
            (value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        }, [percentage]
        );
        return () => {
            progessAnimation.removeAllListeners()
        };
    },[]);
    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke="#E6E7E8" cx={center} cy={center} r={raduis} strokeWidth={strokeWidth} />

                    <Circle
                        ref={progressRef}
                        stroke="#FFB400"
                        cx={center}
                        cy={center}
                        r={raduis}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        // strokeDashoffset={circumference - (circumference * 60) / 100}
                        fill="white"
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <AntDesign name="arrowright" size={32} color="#FFB400" />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button:
    {
        position: 'absolute',
        backgroundColor: '#3C3C3C',
        borderRadius: 100,
        padding: 20,
    }

});
