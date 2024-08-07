import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import ReplayVideo from '../ReplayVideo';
import ShortReplay from '../ShortReplay';
import DernierVideo from '../DernierVideo';
import NosEmission from '../NosEmission';
import { useNavigation } from '@react-navigation/native';
import { decode } from 'html-entities';
import moment from 'moment';
import 'moment/locale/fr';



const API_KEY = 'AIzaSyAQvzvN_7BJNVEZEHqEIFu-8D04UPt2_Mg';
const CHANNEL_ID = 'UCNt10XGfyfzeuVVas-13iXQ';

const Replay = () => {
  const [videos, setVideos] = useState([]);
  const [videoStats, setVideoStats] = useState({});

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setVideos(data.items));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const videoIds = videos.map(item => item.id.videoId);
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds.join(',')}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          const stats = data.items.reduce((acc, item) => {
            acc[item.id] = item.statistics;
            return acc;
          }, {});
          setVideoStats(stats);
        });
    }
  }, [videos]);
  const navigation = useNavigation();
  const handlePressSearch = () => {
    navigation.navigate('Search');
  };
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
        <TouchableOpacity onPress={handlePressSearch}>
          <Image style={[styles.image, { width: 70, height: 30, marginRight: 10, marginTop: -5 }]}
            source={require('../assets/search.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 120, height: 90, borderRadius: 10 }}
                  source={{ uri: item.snippet.thumbnails.high.url }}
                />
                <Text>{decode(item.snippet.title)}</Text>
                <Text style={{ color: '#666', opacity: 0.7 }}>
                  {moment(item.snippet.publishTime).fromNow()}
                </Text>
                <Text style={{ color: '#666', opacity: 0.7 }}>
                  {videoStats[item.id.videoId] && videoStats[item.id.videoId].viewCount} vues
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
      <View style={styles.NosEmission}>
        <View style={styles.AT}>
          <Text style={{ fontWeight: 500, fontSize: '24' }}>Nos Emission</Text>
          <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
            voir</Text></TouchableOpacity>
        </View>
        <FlatList data={NosEmission}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.NosFormationCard}>
              <TouchableOpacity>
                <Image style={styles.imageSA} source={item.image} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 25, opacity: 0.8, fontWeight: 300, fontSize: 16, marginTop: 2 }}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>L'actualité</Text>
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
    marginTop: 15,
  },
  shortImage:
  {
    marginLeft: 20,
    height: 250,
    width: 150,
    borderRadius: 5
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
  imageSA:
  {
    borderRadius: 2,
    width: 445,
    height: 180,
    marginTop: -3,
    marginLeft: 0
  },
  NosFormationCard:
  {
    marginTop: 5
  }

});

export default Replay;