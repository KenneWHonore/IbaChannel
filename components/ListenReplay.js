import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Dimensions, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { decode } from "html-entities";
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import WebView from 'react-native-webview';



const ListenReplay = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    const handlePress = () => {
        Linking.openURL('https://linktr.ee/iBusinessAfrica');
    };




    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <WebView
                    source={{ uri: `https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&controls=0&showinfo=0&modestbranding=1&showtitle=0` }}
                    style={{ flex: 1, width: '100%', height: 300 }}
                />

            </View>
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.title}>{decode(item.snippet.title)}</Text>
                <Text style={styles.publishTime}>{moment(item.snippet.publishTime).format('D MMMM YYYY [à] HH:mm')}</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.Linking}>Rejoignez nous...</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
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
    title:
    {
        color: '#FFB400',
        fontSize: 20,
        fontWeight: 600,
        margin: 10,
    },
    publishTime:
    {
        marginLeft: 15,
    },
    Linking:
    {
        marginLeft: 15,
        color:'blue',
        marginTop:5,
    }
})




export default ListenReplay;