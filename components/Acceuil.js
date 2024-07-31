import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import NextSection from '../NextSection';
import lePointActu from '../LePointActu';
import { useNavigation } from '@react-navigation/native';
import debat from '../debat';
import Card from './Card';



const Acceuil = () => {
    const navigation = useNavigation();
    const [Data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch
            ('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9f25e61949d842acb8faa13bd1f4f6d5');
        const data = await response.json()
        setData(data.articles);
    };
    useEffect(() => {
        getData();
    }, []);
    const handlePress = () => {
        // Navigation vers une autre vue
        navigation.navigate('VoirPlus');

    };

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image style={[styles.image1, { width: 20, height: 20 }]} source={require('../assets/Menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.image, { width: 30, height: 30, marginTop: -4, marginLeft: 20 }]}
                        source={require('../assets/IBAlogo.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.image, { width: 70, height: 30, marginRight: 10, marginTop: -5 }]}
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
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (


                        <View style={[styles.CardSection, { marginBottom: 15 }]}>
                            <TouchableOpacity>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                                <View style={styles.VTI}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Text style={styles.Voirp}>{item.voirplus}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.temps}>{item.temps}</Text>
                                    <Image source={item.image2} style={styles.image2} />

                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>
            <View style={styles.BrefActu}>
                <View style={styles.AB}>
                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>Le point sur l'actualité</Text>
                </View>
                <View style={styles.Contain}>
                    <FlatList data={lePointActu}
                        keyExtractor={(item, index) => index.toString()}

                        renderItem={({ item }) => (
                            <View style={styles.containImage}>
                                <View style={{ position: 'relative' }}>
                                    <TouchableOpacity>
                                        <Image source={item.image} style={styles.imageActu} filter="grayscale(0.5)" />
                                        <Text style={[styles.ImageText, { position: 'absolute', top: 10, left: 10, fontSize: 16, color: '#fff' }]}>{item.text}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={styles.suiteActu}>
                <TouchableOpacity>
                    <Image style={styles.imageSA} source={require('../assets/suiteActu.jpg')} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, opacity: 0.8, fontWeight: 200 }}>Actu</Text>
                <Text style={{ marginLeft: 20, marginTop: 5 }}>France:Emmanuel Macron prend une photo avec les chefs d'etats invite  a occation des JO de paris 2024...</Text>
            </View>

            <View style={styles.newSection2}>
                <FlatList data={NextSection}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (


                        <View style={[styles.CardSection, { marginBottom: 15 }]}>
                            <TouchableOpacity>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                                <View style={styles.VTI}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Text style={styles.Voirp}>{item.voirplus}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.temps}>{item.temps}</Text>
                                    <Image source={item.image2} style={styles.image2} />

                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>
            <View style={styles.suiteActu2}>
                <FlatList data={debat}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (
                        <View style={styles.containImage}>
                            <View>
                                <TouchableOpacity>
                                    <Image source={item.image} style={styles.imageSuiteActu2} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={[styles.ImageText2]}>{item.text}</Text>
                            </View>
                            <Text style={[styles.ImageText3]}>{item.text2}</Text>

                        </View>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.suiteActu}>
                <TouchableOpacity>
                    <Image style={styles.imageSA} source={require('../assets/suiteActu.jpg')} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, opacity: 0.8, fontWeight: 200 }}>Actu</Text>
                <Text style={{ marginLeft: 20, marginTop: 5 }}>France:Emmanuel Macron prend une photo avec les chefs d'etats invite  a occation des JO de paris 2024...</Text>
            </View>
            <View style={styles.newSection3}>
                <FlatList data={NextSection}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (


                        <View style={[styles.CardSection, { marginBottom: 15 }]}>
                            <TouchableOpacity>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                                <View style={styles.VTI}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Text style={styles.Voirp}>{item.voirplus}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.temps}>{item.temps}</Text>
                                    <Image source={item.image2} style={styles.image2} />

                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>

            <FlatList
                data={Data}
                renderItem={({ item }) => {
                    return (
                        <Card item={item} />
                    );
                }}
            />

        </ScrollView>

    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const raduis = 5;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        overflow: 'scroll'

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
        flexDirection: 'row',
    },
    newSection:
    {
        flex: 1,
        width: '95%',
        margin: 20,
        marginTop: 0,
        // overflow: 'scroll'
    },
    newSection2:
    {
        flex: 1,
        width: '95%',
        margin: 20,
        marginTop: 0,
        //overflow: 'scroll',
        marginTop: 20,
    },
    newSection3:
    {
        flex: 1,
        width: '95%',
        margin: 20,
        marginTop: 0,
        //overflow: 'scroll',
        marginTop: 20,
    },
    image:
    {
        height: 100,
        width: 100,
        borderRadius: 3,
        opacity: 0.9,
        resizeMode: 'cover'

    },
    title:
    {
        color: '#FFB400',
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 10,
    },
    text:
    {
        fontSize: 14,
        fontWeight: 300,
        marginLeft: 10,
        width: '49%',
        opacity: 0.7
    },
    Voirp:
    {
        color: '#FFB400',
        fontSize: 14,
        margin: 12

    },
    temps:
    {
        marginTop: 13,
        fontSize: 12,
        opacity: 0.5
    },
    VTI:
    {
        flexDirection: 'row'
    },
    image2:
    {
        marginTop: 13,
        width: 20,
        height: 20,
        marginLeft: 115,
        opacity: 0.4

    },
    imageActu:
    {
        width: 150,
        height: 200,
        marginLeft: 20,
        borderRadius: 5,
        marginTop: 20,
        opacity: 0.8,
        backgroundColor: '#000'

    },
    ImageText:
    {
        width: '90%',
        marginTop: 145,
        flexWrap: 'wrap',
        marginLeft: 15,
        fontWeight: 600
    },
    imageSA:
    {
        borderRadius: 5,
        width: 380,
        height: 180,
        marginTop: 20,
        marginLeft: 20
    },
    imageSuiteActu2:
    {
        width: 200,
        height: 150,
        marginLeft: 20,
        borderRadius: 3,


    },
    ImageText2:
    {
        marginLeft: 20,
        marginTop: 5,
        width: '90%',
        flexWrap: 'wrap',
        fontWeight: 200,
    },
    ImageText3:
    {
        marginLeft: 20,
        width: '90%',
        flexWrap: 'wrap',
        fontWeight: 400,

    }


});

export default Acceuil;
