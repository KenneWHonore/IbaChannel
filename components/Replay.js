import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import ReplayVideo from '../ReplayVideo';
import ShortReplay from '../ShortReplay';

const Replay = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
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

      <View style={styles.Replay}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          data={ReplayVideo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardVideo}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.imageActu} filter="grayscale(0.5)" />
                  <Text style={[styles.ImageText, { position: 'absolute', top: 10, left: 10, fontSize: 24, color: '#fff' }]}>{item.title}</Text>
                </TouchableOpacity>
                <View style={[styles.TimeSee, { position: 'absolute' }]}>
                  <Text style={[styles.Time, { position: 'absolute', top: 10, left: 10, fontSize: 12, color: '#fff' }]}>{item.time}</Text>
                  <Text style={[styles.see, { position: 'absolute', top: 10, left: 10, fontSize: 12, color: '#fff' }]}>{item.see} de Vues</Text>
                </View>
              </View>
            </View>
          )} />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Pour vous</Text>
        <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.Contain}>
        <FlatList data={ShortReplay}
          keyExtractor={(item, index) => index.toString()}

          renderItem={({ item }) => (
            <View style={styles.containImage}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.shortImage} filter="grayscale(0.5)" />

                </TouchableOpacity>
              </View>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Dernieres videos</Text>
        <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 20,

  },
  imageActu:
  {
    width: 350,
    height: 200,
    marginLeft: 20,
    borderRadius: 4,
    marginTop: 20,
    opacity: 0.8,
    backgroundColor: '#000'

  },
  ImageText:
  {
    width: '90%',
    marginTop: 130,
    flexWrap: 'wrap',
    marginLeft: 20,
    fontWeight: 500
  },
  Time:
  {
    marginTop: 190,
    marginLeft: 20,
  },
  see:
  {
    marginTop: 190,
    marginLeft: 100
  },
  ForYou:
  {
    marginTop: 15,
    justifyContent: 'space-between'
  },
  AT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 20,
    marginTop: 25,
  },
  shortImage:
  {
    marginLeft: 20,
    height: 250,
    width: 150,
    borderRadius: 5
  }

});

export default Replay;