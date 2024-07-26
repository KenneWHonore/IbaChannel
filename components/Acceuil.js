import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import NextSection from '../NextSection';


const Acceuil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image style={[styles.image1, { width: 20, height: 20 }]} source={require('../assets/Menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.image, { width: 30, height: 30, marginTop: -4, marginLeft: 20 }]}
                        source={require('../assets/IBAlogo.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.image, { width: 70, height: 30, marginRight: 10, marginTop: -3 }]}
                        source={require('../assets/search.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.AT}>
                <Text style={{ fontWeight: 600, fontSize: '24' }}>A la une</Text>
                <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
                    voir</Text></TouchableOpacity>
            </View>
            <ScrollView horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={100}
                bounces={false}
                contentContainerStyle={{ paddingVertical: 10 }}
                style={{ marginTop: -15, maxHeight: 250 }}
            >
                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        <Image style={styles.imageStyle} source={require('../assets/Yaoundé.jpeg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFB400', fontWeight: 500, fontSize: 24, margin: 5 }}>Finance <Text
                        style={{ fontSize: 14, color: '#fff', fontWeight: 400 }}> Aujourd'hui</Text></Text>
                    <Text style={styles.Descriptions}>Plus de 7,2 milliards pour les travaux de reconstruction a
                        yaounde</Text>
                    <View style={styles.end}>
                        <TouchableOpacity>
                            <Text style={{ color: '#FFB400', marginTop: 7, marginLeft: 7, fontSize: 12 }}>Voir plus <Text
                                style={{ color: '#fff', opacity: 0.7 }}> il y'a 11 min</Text></Text></TouchableOpacity>
                        <Image style={styles.point} source={require('../assets/3p.png')} />

                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        <Image style={styles.imageStyle} source={require('../assets/abou.jpeg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFB400', fontWeight: 500, fontSize: 24, margin: 5 }}>Economie <Text
                        style={{ fontSize: 14, color: '#fff', fontWeight: 400 }}> Aujourd'hui</Text></Text>
                    <Text style={styles.Descriptions}>Equipe des lions indomptabledepense 1,4 M pour la sortieau
                        mondial</Text>
                    <View style={styles.end}>
                        <TouchableOpacity>
                            <Text style={{ color: '#FFB400', marginTop: 7, marginLeft: 7, fontSize: 12 }}>Voir plus <Text
                                style={{ color: '#fff', opacity: 0.7 }}> il y'a 15 min</Text></Text></TouchableOpacity>
                        <Image style={styles.point} source={require('../assets/3p.png')} />
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        <Image style={styles.imageStyle} source={require('../assets/Argent.jpeg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFB400', fontWeight: 500, fontSize: 24, margin: 5 }}>Economie <Text
                        style={{ fontSize: 14, color: '#fff', fontWeight: 400 }}> Aujourd'hui</Text></Text>
                    <Text style={styles.Descriptions}>Penurie de piece de monaiedans les villes du camerounque faire
                        ?</Text>
                    <View style={styles.end}>
                        <TouchableOpacity>
                            <Text style={{ color: '#FFB400', marginTop: 7, marginLeft: 7, fontSize: 12 }}>Voir plus <Text
                                style={{ color: '#fff', opacity: 0.7 }}> il y'a 11 min</Text></Text></TouchableOpacity>
                        <Image style={styles.point} source={require('../assets/3p.png')} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.populaire}>
                <Text style={{ fontWeight: 600, fontSize: '24' }}>Populaire</Text>
                <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
                    voir</Text></TouchableOpacity>
            </View>

            <View style={styles.newSection}>
                <FlatList data={NextSection}
                renderItem={({item}) =>(

                    <View style={[styles.CardSection, {marginBottom:15}]}>
                        <TouchableOpacity>
                        <Image source={item.image} style={styles.image}/>
                        </TouchableOpacity>
                        <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                        <View style={styles.VTI}>
                        <TouchableOpacity>
                        <Text style={styles.Voirp}>{item.voirplus}</Text>
                        </TouchableOpacity>
                        <Text style={styles.temps}>{item.temps}</Text>
                        <Image source={item.image2} style={styles.image2}/>

                        </View>
                        </View>
                    </View>
                )}
                />
            </View>

        </View>
    );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const raduis = 5;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: 20,
    },
    AT: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: 20,
    },
    populaire:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: 20,
    },
    cardContainer:
    {

        width: deviceWidth - 30,
        backgroundColor: '#3C3C3C',
        marginLeft: 20,
        height: 230,
        borderRadius: raduis,
        marginTop: -10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle:
    {
        height: 130,
        width: deviceWidth - 30,
        borderTopLeftRadius: raduis,
        borderTopRightRadius: raduis,
        opacity: 0.9,
    },
    Descriptions:
    {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5
    },
    end:
    {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    point:
    {
        marginTop: 5
    },
    CardSection:
    {
        flexDirection:'row',
    },
    newSection:
    {
        flex:1,
        width:'95%',
        margin: 20,
        marginTop:0,
        overflow:'scroll'
    },
    image:
    {
        height:100,
        width:100,
        borderRadius:3,
        opacity:0.9
        
    },
    title:
    {
        color: '#FFB400',
        fontSize:16,
        fontWeight:600,
        marginLeft:10,
    },
    text:
    {
        fontSize: 14,
        fontWeight:300,
        marginLeft: 10,
        width:'49%',
        opacity:0.7
    },
    Voirp:
    {
        color:'#FFB400',
        fontSize:14,
        margin:12
        
    },
    temps:
    {
        marginTop:13,
        fontSize:12,
        opacity:0.5
    },
    VTI:
    {
        flexDirection:'row'
    },
    image2:
    {
        marginTop:13,
        width:20,
        height:20,
        marginLeft:115,
        opacity:0.4

    }
});

export default Acceuil;
