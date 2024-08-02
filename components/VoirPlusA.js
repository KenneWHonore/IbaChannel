import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import LePointActu from '../LePointActu';



const VoirPlusA = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, element } = route.params;



 
    return (
        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image source={element.image} style={{ width: '100%', height: 300 }} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonAbsolute} activeOpacity={0.6}>
              <AntDesign name="arrowleft" size={32} color="#FFB400" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>{element.title}</Text>
            <Text style={{ marginTop: 19, opacity: 0.7, fontSize: 12, fontWeight: 300 }}>{element.temps}</Text>
          </View>
          <Text style={{ marginLeft: 12 }}>{element.desc}</Text>
          <View>
            <Text style={{ marginLeft: 12, marginTop: 10, width: '95%', fontSize: 16, fontWeight: 300 }}>{element.text3}</Text>
          </View>
          <View style={styles.Contain}>
            <Text style={{marginLeft: 12,fontSize: 24, marginTop: 20,}}>Articles similaire</Text>
            <FlatList data={LePointActu}
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
        </ScrollView>
      );
    };
    
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
        fontSize: 24,
        fontWeight: 600,
        margin: 10,
    
    
      },
      imageActu:
      {
        width: 150,
        height: 200,
        marginLeft: 20,
        borderRadius: 5,
        marginTop: 20,
        opacity: 0.8,
        backgroundColor: '#000',
        marginTop:15
    
      },
      ImageText:
      {
        width: '90%',
        marginTop: 145,
        flexWrap: 'wrap',
        marginLeft: 15,
        fontWeight: 600
      },
    });
    
    export default VoirPlusA;