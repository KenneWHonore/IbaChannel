import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const About = () => {
    const handlePress = () => {
        Linking.openURL('https://www.ibusiness.africa');
    };
    const handlePress3 = () => {
        Linking.openURL('https://www.bing.com/maps?where=Douala%2C+Littoral+15512%2C+CM&cp=4.049999%7E9.700005&lvl=16.0');
    };
    const handlePress2 = () => {
        const phoneNumber = '+237690887878'; // Replace with your actual phone number
      
        // Check if the device can handle phone calls
        if (Linking.canOpenURL(`tel:${phoneNumber}`)) {
          Linking.openURL(`tel:${phoneNumber}`);
        } else {
          console.warn('Phone number is not supported on this device');
        }
      };
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} activeOpacity={0.6}>
                    <AntDesign name="arrowleft" size={32} color="#FFB400" />
                </TouchableOpacity>
                <Text style={styles.buttonP}>A propos de nous</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../assets/IBAlogo.png')} style={{ backgroundColor: '#FFB400', width: "100%", height: 100 }} />

                <Text style={styles.Text}>
                    International Business Africa (#IBAChannel) est une chaine
                    de télévision dédiée à l’actualité économique et financière
                    du continent africain. Lancée fin 2021 par un groupe
                    de presse international spécialisé dans le traitement de l’information
                    africaine et mondiale.
                    Cette chaine se veut être la référence en matière d’analyse,
                    de décryptage et de prospective des enjeux économiques
                    et financiers qui touchent l’Afrique. International Business
                    Africa propose des programmes variés et de qualité, allant
                    des journaux d’information aux magazines thématiques,
                    en passant par des débats, des interviews, des reportages
                    et des documentaires.
                    La chaine couvre aussi les événements majeurs liés à l’économie
                    et à la finance en Afrique, tels que les sommets internationaux,
                    les forums économiques, les salons professionnels
                    ou les conférences sectorielles. International Business
                    Africa se positionne comme une chaine panafricaine, qui
                    s’adresse à tous les acteurs économiques et financiers du
                    continent, qu’ils soient entrepreneurs, investisseurs, décideurs
                    politiques, chercheurs ou simples citoyens.
                    La chaine vise également à renforcer les liens entre l’Afrique
                    et le reste du monde, en mettant en valeur les opportunités
                    d’affaires, les partenariats stratégiques et les innovations
                    qui favorisent le développement économique et social de
                    l’Afrique. International Business Africa est donc la chaine
                    qui vous fait vivre l’économie et la finance africaines au quotidien.
                </Text>
                <View>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Site web
                    </Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.Linking}>https://www.ibusiness.africa</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Telephone
                    </Text>
                    <TouchableOpacity onPress={handlePress2}>
                        <Text style={styles.Linking}>+237690887878</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Secteur
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.Linking}>Média audio et vidéo en ligne</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Taille de l'entreprise
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.Linking}>2-10 employés</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Siege social
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.Linking}>Douala, Littoral</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Fondée en 
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.Linking}>2021</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, fontWeight: 600, }}>
                        Lieux (1)
                    </Text>
                    <TouchableOpacity onPress={handlePress3}>
                        <Text style={styles.Linking}>Kotto face sous-prefecture. Douala,Littoral 15512, CM</Text>
                        <Text style={styles.Linking}>Obtenir l'itineraire</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    Text: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        textAlign: 'justify',
        margin: 10
    },
    Linking:
    {
        margin:10,
        color: 'blue',

    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    header:
    {
        flexDirection: 'row',
        width: '100%',

    },
    buttonP:
    {
        marginLeft: 70,
        fontWeight: 800,
        fontSize: 20,
        marginTop: 14,

    },
    cookies:
    {
        textAlign: 'center',
        opacity: 0.5,
        marginTop: -10,

    },
    cookiesP:
    {
        marginTop: 30,
        marginLeft: 20,
        flexWrap: 'wrap',
        width: '95%',
        fontWeight: 300,
    },
    span:
    {
        color: '#FFB400',
        fontWeight: 800,
    },
    checkContainer:
    {
        marginTop: 50,
        flexDirection: 'row',
        width: '80%',
    },
    image:
    {
        marginLeft: 15,
    },
    check1:
    {
        marginTop: 15,
    },
    checkContainer2:
    {
        flexDirection: 'row',
        width: '75%',
        marginTop: 10,
    },
    check2:
    {
        marginTop: 10,
    },
    buttonA: {
        backgroundColor: '#FFB400',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    buttonR: {
        backgroundColor: '#FF0F00',
        padding: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    buttonContainer:
    {
        margin: 20,


    }

})

export default About;