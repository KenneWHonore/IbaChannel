import React, { useEffect, useRef } from "react";
import { View, StyleSheet, useWindowDimensions,Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';





export default OnboardingItem = ({ item, index, currentIndex }) => {
    const { width } = useWindowDimensions();
    const titleRef = useRef()
    const descriptionRef = useRef()
    const imageRef = useRef()
    


    useEffect(() => {
        if (index === currentIndex) {
            titleRef?.current.bounceIn()
            descriptionRef?.current.bounceIn()
            // imageRef?.current.bounceIn()
           
        }
    }, [currentIndex]);


    return (
        <View style={[styles.container, { width }]}>
            <View style={styles.bigTitle}>
                {/* <Text>{item.bigTitle}</Text> */}
            </View>
        <LottieView source={item.lottie}  style={[styles.image, index === 3 ? styles.specialTitleStyle : null, index === 1 ? styles.specialTitleStyle2 : null , index === 2 ? styles.specialTitleStyle3 : null , {aspectRatio:1, maxHeight:250,flex:0.7,marginTop:20,
            
        }]} loop autoPlay
        />
        {/* <Animatable.Image duration={1000} ref={imageRef} source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} /> */}
      
        <View style={{ flex: 0.3 ,marginTop:50}}>
          <Animatable.Text duration={2000} ref={titleRef} style={styles.title}>{item.title}</Animatable.Text>
          <Animatable.Text duration={2000} ref={descriptionRef} style={styles.description}>{item.description}</Animatable.Text>
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
        marginHorizontal: 15
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
        fontWeight: '800',
        fontSize: '40',
        color: '#493d8a',
        marginRight: 255,
        marginTop: -5,

    },
    lottie:
    {
        height:200,
        aspectRatio:1
    },
    specialTitleStyle:
    {
        maxWidth:400,
       
        
        
    },
    specialTitleStyle2 :
    {
   
        maxWidth:180,
    },
   
    
    


});
