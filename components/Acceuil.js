import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import NextSection from '../NextSection';
import lePointActu from '../LePointActu';
import { useNavigation } from '@react-navigation/native';
import debat from '../debat';
import { decode } from 'html-entities';
import moment from 'moment';
import 'moment/locale/fr';



const getImage = (post, imageSize = 'medium') => {
    // Ensure post is defined
    if (!post) {
        return '';
    }

    // Try to find an image using the `better_featured_image` property
    if (post.better_featured_image && post.better_featured_image.source_url) {
        return post.better_featured_image.source_url;
    }

    // If not found, try the `_embedded` property
    if (post._embedded && post._embedded['wp:featuredmedia']) {
        const media = post._embedded['wp:featuredmedia'][0];
        if (media && media.media_details && media.media_details.sizes[imageSize]) {
            return media.media_details.sizes[imageSize].source_url;
        }
    }

    // If no image is found, return an empty string or a placeholder
    return ''; // Or you can return Images.image_placeholder if you have it defined
};

const Acceuil = (item) => {
    const imageUrl = getImage(item, 'medium');
    moment.locale('fr');
    const navigation = useNavigation();
    const [Data, setData] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const [PointActu, setPointActu] = useState([]);
    const [PointActu2, setPointActu2] = useState([]);
    const [PointActu3, setPointActu3] = useState([]);
    const [PointActu4, setPointActu4] = useState([]);
    console.log(popularPosts);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        const response = await fetch('https://afriquemedia.tv/wp-json/wp/v2/posts');
        const data = await response.json();
        setData(data);
        setLoading(true);
    };
    const getPopularPosts = async () => {
        const response = await fetch(`https://afriquemedia.tv/wp-json/wp/v2/posts?offset=10&per_page=10`);
        const data = await response.json();
        setPopularPosts(data);
    };
    const getPointActu = async () => {
        const response = await fetch(`https://afriquemedia.tv/wp-json/wp/v2/posts?offset=20&per_page=10`);
        const data = await response.json();
        setPointActu(data);
    };
    const getPointActu2 = async () => {
        const response = await fetch(`https://afriquemedia.tv/wp-json/wp/v2/posts?offset=30&per_page=10`);
        const data = await response.json();
        setPointActu2(data);
    }
    const getPointActu3 = async () => {
        const response = await fetch(`https://afriquemedia.tv/wp-json/wp/v2/posts?offset=40&per_page=10`);
        const data = await response.json();
        setPointActu3(data);
    }
    const getPointActu4 = async () => {
        const response = await fetch(`https://afriquemedia.tv/wp-json/wp/v2/posts?offset=50&per_page=10`);
        const data = await response.json();
        setPointActu4(data);
    }
    useEffect(() => {
        getData();
        getPopularPosts();
        getPointActu();
        getPointActu2();
        getPointActu3();
        getPointActu4();
    }, []);
    const handlePress = (id) => {
        const element = NextSection.find((el) => el.id === id);
        navigation.navigate('VoirPlus', { element: element });
    };
    const handlePressVoirPlusA = (item) => {
        navigation.navigate('VoirPlusA', { item: item });
    };
    const handlePressVoirPlusLePoint = (id) => {
        const element = lePointActu.find((el) => el.id === id);
        navigation.navigate('VoirPlusLepoint', { element: element });
    };
    const handlePressSearch = () => {
        navigation.navigate('Search');
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
                <TouchableOpacity onPress={handlePressSearch}>
                    <Image style={[styles.image, { width: 70, height: 30, marginRight: 10, marginTop: -5 }]}
                        source={require('../assets/search.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.AT}>
                <Text style={{ fontWeight: 600, fontSize: '24' }}>A la une</Text>
                <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
                    voir</Text></TouchableOpacity>
            </View>
            <FlatList data={Data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        {getImage(item, 'medium') ? (
                            <Image
                                style={[styles.imageStyle, { resizeMode: 'cover' }]}
                                source={{ uri: getImage(item, 'medium') }}
                            />
                        ) : (
                            <View style={[styles.imageStyle, { backgroundColor: 'lightgray' }]} />
                        )}
                    </TouchableOpacity>
                    <Text style={{ color: '#FFB400', fontWeight: 500, fontSize: 18, margin: 5 }}>{decode(item.title.rendered).substring(0, 70) + '...'}</Text>
                    <View style={[styles.end, { position: 'absolute', bottom: 0, right: 0 }]}>
                        <TouchableOpacity onPress={() => handlePressVoirPlusA(item.id)}>
                            <Text style={{ color: '#FFB400', marginTop: 7, marginLeft: 7, fontSize: 12, right: 180, position: 'absolute' }}>Lire plus   <Text style={{ color: '#fff', opacity: 0.7 }}>
                                {moment(item.date).fromNow()}
                            </Text></Text>
                        </TouchableOpacity>
                        <Image style={styles.point} source={require('../assets/3p.png')} />

                    </View>

                </View>
            )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                scrollEventThrottle={10}
                bounces={true}
                contentContainerStyle={{ paddingVertical: 10 }}
                snapToInterval={'center'} />
            <View style={styles.populaire}>
                <Text style={{ fontWeight: 600, fontSize: '24' }}>Populaire</Text>
                <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
                    voir</Text></TouchableOpacity>
            </View>

            <View style={styles.newSection}>
                <FlatList data={popularPosts}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (


                        <View style={[styles.CardSection, { marginBottom: 15 }]}>
                            <TouchableOpacity>
                                {getImage(item, 'medium') ? (
                                    <Image
                                        style={[styles.image, { resizeMode: 'cover' }]}
                                        source={{ uri: getImage(item, 'medium') }}
                                    />
                                ) : (
                                    <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                )}
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Actu</Text>
                                <Text style={styles.text}>{decode(item.title.rendered).substring(0, 50) + '...'}</Text>
                                <View style={styles.VTI}>
                                    <TouchableOpacity onPress={() => handlePress(item.id)}>
                                        <Text style={styles.Voirp}>Lire plus</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.temps}>{moment(item.date).fromNow()}</Text>
                                    <Image source={require('../assets/3points.png')} style={styles.image2} />

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
                    <FlatList data={PointActu}
                        keyExtractor={(item, index) => index.toString()}

                        renderItem={({ item }) => (
                            <View style={styles.containImage}>
                                <View style={{ position: 'relative' }}>
                                    <TouchableOpacity onPress={() => handlePressVoirPlusLePoint(item.id)}>
                                        {getImage(item, 'medium') ? (
                                            <Image
                                                style={[styles.imageActu, filter = "grayscale(0.5)", { resizeMode: 'cover', }]}
                                                source={{ uri: getImage(item, 'medium') }}
                                            />
                                        ) : (
                                            <View style={[styles.imageActu, filter = "grayscale(0.5)", { backgroundColor: 'lightgray' }]} />
                                        )}
                                        <Text style={[styles.ImageText, { position: 'absolute', top: 10, left: 10, fontSize: 16, color: '#fff' }]}>{decode(item.title.rendered).substring(0, 39) + '...'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            <View style={styles.newSection2}>
                <FlatList
                    data={PointActu2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (index === 0) {
                            return (
                                <View style={{}}>
                                    <TouchableOpacity onPress={() => handlePress(item.id)}>
                                        {getImage(item, 'medium') ? (
                                            <Image
                                                style={[styles.imageSA, { resizeMode: 'cover' }]}
                                                source={{ uri: getImage(item, 'medium') }}
                                            />

                                        ) : (
                                            <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                        )}
                                    </TouchableOpacity>
                                    <Text style={[styles.title, { marginLeft: 0, opacity: 0.8, fontWeight: 600 }]}>Actu</Text>
                                    <Text style={[styles.text, { marginLeft: 0, marginTop: 5, fontWeight: 500, width: '90%' }]}>{decode(item.title.rendered).substring(0, 200) + '...'}</Text>
                                </View>
                            );
                        } else {
                            return (
                                <View style={[styles.CardSection, { marginBottom: 15, marginTop: 15 }]}>
                                    <TouchableOpacity>
                                        {getImage(item, 'medium') ? (
                                            <Image
                                                style={[styles.image, { resizeMode: 'cover' }]}
                                                source={{ uri: getImage(item, 'medium') }}
                                            />
                                        ) : (
                                            <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                        )}
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={[styles.title]}>Actu</Text>
                                        <Text style={styles.text}>{decode(item.title.rendered).substring(0, 50) + '...'}</Text>
                                        <View style={styles.VTI}>
                                            <TouchableOpacity onPress={() => handlePress(item.id)}>
                                                <Text style={styles.Voirp}>Lire plus</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.temps}>{moment(item.date).fromNow()}</Text>
                                            <Image source={require('../assets/3points.png')} style={styles.image2} />
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }}
                />
            </View>
            <View style={styles.suiteActu2}>
                <FlatList data={PointActu3}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (
                        <View style={styles.containImage}>
                            <View>
                                <TouchableOpacity onPress={() => handlePress(item.id)}>
                                    {getImage(item, 'medium') ? (
                                        <Image
                                            style={[styles.imageSuiteActu2, { resizeMode: 'cover' }]}
                                            source={{ uri: getImage(item, 'medium') }}
                                        />

                                    ) : (
                                        <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={[styles.ImageText2, { fontWeight: 400 }]}>{decode(item.title.rendered).substring(0, 30) + '...'}</Text>
                            </View>
                            <Text style={[styles.ImageText3]}>{item.text2}</Text>

                        </View>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.newSection2}>
                <FlatList
                    data={PointActu4}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (index === 0) {
                            return (
                                <View style={{}}>
                                    <TouchableOpacity onPress={() => handlePress(item.id)}>
                                        {getImage(item, 'medium') ? (
                                            <Image
                                                style={[styles.imageSA, { resizeMode: 'cover' }]}
                                                source={{ uri: getImage(item, 'medium') }}
                                            />

                                        ) : (
                                            <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                        )}
                                    </TouchableOpacity>
                                    <Text style={[styles.title, { marginLeft: 0, opacity: 0.8, fontWeight: 600 }]}>Actu</Text>
                                    <Text style={[styles.text, { marginLeft: 0, marginTop: 5, fontWeight: 500, width: '100%' }]}>{decode(item.title.rendered).substring(0, 200) + '...'}</Text>
                                </View>
                            );
                        } else {
                            return (
                                <View style={[styles.CardSection, { marginBottom: 15, marginTop: 15 }]}>
                                    <TouchableOpacity>
                                        {getImage(item, 'medium') ? (
                                            <Image
                                                style={[styles.image, { resizeMode: 'cover' }]}
                                                source={{ uri: getImage(item, 'medium') }}
                                            />
                                        ) : (
                                            <View style={[styles.image, { backgroundColor: 'lightgray' }]} />
                                        )}
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={[styles.title]}>Actu</Text>
                                        <Text style={styles.text}>{decode(item.title.rendered).substring(0, 50) + '...'}</Text>
                                        <View style={styles.VTI}>
                                            <TouchableOpacity onPress={() => handlePress(item.id)}>
                                                <Text style={styles.Voirp}>Lire plus</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.temps}>{moment(item.date).fromNow()}</Text>
                                            <Image source={require('../assets/3points.png')} style={styles.image2} />
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }}
                />
            </View>



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
        marginTop: -10
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
        width: '75%',
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
        width: '85%',
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
        marginLeft: 0
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
