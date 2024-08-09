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



const parseDuration = (duration) => {
  const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const match = duration.match(regex);
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (match[1]) {
    hours = parseInt(match[1], 10);
  }
  if (match[2]) {
    minutes = parseInt(match[2], 10);
  }
  if (match[3]) {
    seconds = parseInt(match[3], 10);
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const minutesDisplay = Math.floor(totalSeconds / 60);
  const secondsDisplay = totalSeconds % 60;

  return `${minutesDisplay}:${secondsDisplay.toString().padStart(2, '0')}`;
};
const API_KEY = 'AIzaSyAQvzvN_7BJNVEZEHqEIFu-8D04UPt2_Mg';
const CHANNEL_ID = 'UCNt10XGfyfzeuVVas-13iXQ';

const Replay = () => {
  const [videos, setVideos] = useState({});
  const [videos2, setVideos2] = useState({});
  const [videos3, setVideos3] = useState({});
  const [videoStats, setVideoStats] = useState({});
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setVideos(data.items));
  }, []);
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&videoDuration=short&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setVideos2(data.items));
  }, []);
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlists?part=id,snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setVideos3(data.items));
  }, []);

  useEffect(() => {
    if (videos && videos.length > 0) {
      const videoIds = videos.map(item => item.id.videoId);
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds.join(',')}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          const stats = data.items.reduce((acc, item) => {
            acc[item.id] = item.statistics;
            return acc;
          }, {});
          setVideoStats(stats);
        }, [videos]);
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          const details = data.items.reduce((acc, item) => {
            acc[item.id] = item.contentDetails;
            return acc;
          }, {});
          setVideoDetails(details);
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
      <View style={styles.Replay}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.cardVideo}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity>
                  <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.imageActu} filter="grayscale(0.5)" />
                  <Text style={[styles.ImageText, { position: 'absolute', top: 10, left: 10, fontSize: 16, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.2)' }]}>{decode(item.snippet.title).substring(0, 60) + '...'}</Text>
                </TouchableOpacity>
                <View style={[styles.TimeSee, { position: 'absolute', backgroundColor: 'black' }]}>
                  <Text style={[styles.Time, { position: 'absolute', top: 10, left: 10, fontSize: 14, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.3)', }]}>
                    {moment(item.snippet.publishTime).fromNow()}<Text style={[styles.see, { position: 'absolute', top: 10, left: 10, fontSize: 14, color: '#fff' }]}>
                      . {videoStats[item.id.videoId] && videoStats[item.id.videoId].viewCount} vues</Text>
                  </Text>
                  <Text style={[styles.see, { position: 'absolute', top: 10, left: 235, fontSize: 14, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', }]}>{videoDetails[item.id.videoId] && parseDuration(videoDetails[item.id.videoId].duration)}</Text>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingRight: 10 }} />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Pour vous</Text>
        <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.Contain}>
        <FlatList data={videos2}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.containImage}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity>
                  <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.shortImage} filter="grayscale(0.5)" />

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
          data={videos2}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.video}>
              <TouchableOpacity>
                <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.textVideo}>
                <Text style={styles.temps}>{moment.utc(item.snippet.publishTime).local().fromNow()}</Text>

                <View style={[styles.VTI, { width: '85%' }]}>
                  <Text style={styles.title}>{decode(item.snippet.title).substring(0, 55) + '...'}</Text>
                  <Text style={[styles.seeDerniereVideo, { position: 'absolute', top: 60, }]}>{videoStats[item.id.videoId] && videoStats[item.id.videoId].viewCount} vues</Text>


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
        <FlatList
          data={videos3}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.NosFormationCard}>
              <TouchableOpacity>
                <Image style={styles.imageSA} source={{ uri: item.snippet.thumbnails.high.url }} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 25, opacity: 0.8, fontWeight: 300, fontSize: 16, marginTop: 5 }}>{decode(item.snippet.title).substring(0, 55) + '...'}</Text>
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
    opacity: 1,
    backgroundColor: '#000'

  },
  TimeSee:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
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
    borderRadius: 5,
    resizeMode: 'cover'
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
    fontSize: 14,
    marginTop: 5,

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
    borderRadius: 4,
    width: 380,
    height: 150,
    marginTop: 10,
    marginLeft: 20
  },
  NosFormationCard:
  {
    marginTop: 5
  }

});

export default Replay;