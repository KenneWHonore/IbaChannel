import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView ,FlatList} from 'react-native';
import DernierVideo from '../DernierVideo';
import ShortReplay from '../ShortReplay';


const Direct = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.Direct}>
        <TouchableOpacity>
          <Image style={styles.imageStyle} source={require('../assets/DirectImage.jpg')} />
        </TouchableOpacity>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Video a la une </Text>
        <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.dernierVideo}>
        <FlatList
          data={DernierVideo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.video}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.textVideo}>
                <Text style={styles.temps}>{item.time}</Text>

                <View style={styles.VTI}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.seeDerniereVideo}>{item.see} Vues</Text>


                </View>
              </View>
            </View>
          )}
        />
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
      </ScrollView>
    </View>
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
  imageStyle:
  {
    width:415
  },
  AT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 20,
    marginTop: 15,
  },
  video:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    width: '100%',
    marginTop: -15,
    marginBottom: 20

  },
  image:
  {
    width: 200,
    height: 100,
    marginTop: 20,
    borderRadius: 5
  },
  textVideo:
  {
    marginTop: 17,
    marginLeft: 5
  },
  title:
  {
    width: '50%',
    fontWeight: 800,
    fontSize: 16,
    marginTop: 5
  },
  temps:
  {
    fontWeight: 300,
    fontSize: 12,
    opacity: 0.5
  },
  seeDerniereVideo:
  {
    fontWeight: 300,
    fontSize: 12,
    opacity: 0.5,
    marginTop: 13

  },
  shortImage:
  {
    marginLeft: 20,
    height: 250,
    width: 150,
    borderRadius: 5
  },

});

export default Direct;