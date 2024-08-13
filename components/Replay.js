import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { decode } from 'html-entities';
import moment from 'moment';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/FontAwesome';


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
  const [videos4, setVideos4] = useState({});
  const [videos5, setVideos5] = useState({});
  const [videoStats, setVideoStats] = useState({});
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=${CHANNEL_ID}&maxResults=60&order=date&type=video&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const videos = data.items;
        const section1Videos = videos.slice(0, 10);
        const section2Videos = videos.slice(10, 20);
        const section3Videos = videos.slice(20, 30);
        const section4Videos = videos.slice(30, 40);
        const section5Videos = videos.slice(40, 50);

        setVideos(section1Videos);
        setVideos2(section2Videos);
        setVideos3(section3Videos);
        setVideos4(section4Videos);
        setVideos5(section5Videos);
      });
  }, []);

  const handlePress = (item) => {

    navigation.navigate('ListenReplay', { item: item });
  };



  useEffect(() => {
    if (videos && videos.length > 0) {
      const videoIds = videos.map(item => item.id.videoId);
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          const videoStats = data.items.reduce((acc, item) => {
            acc[item.id] = item.statistics;
            return acc;
          }, {});
          setVideoStats(videoStats);
          const details = data.items.reduce((acc, item) => {
            acc[item.id] = item.contentDetails;
            return acc;
          }, {});
          setVideoDetails(details);
        }, [videos]);

    }
  }, [videos]);
  const navigation = useNavigation();
  const handlePressSearch = () => {
    navigation.navigate('Search');
  };
  const flatListRef1 = useRef(null);
  const flatListRef2 = useRef(null);

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
          nestedScrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.cardVideo}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.imageActu}
                    filter="grayscale(0.5)" />
                  <View style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: [{ translateX: -12 }, { translateY: -12 }],
                  }}>
                    <Icon name="play" size={32} color="#fff" opacity={0.9} />
                  </View>
                  <Text style={[styles.ImageText, {
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    fontSize: 16,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                  }]}>{decode(item.snippet.title).substring(0, 60) + '...'}</Text>
                </TouchableOpacity>
                <View style={[styles.TimeSee, { position: 'absolute', backgroundColor: 'black' }]}>
                  <Text style={[styles.Time, {
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    fontSize: 14,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  }]}>
                    {moment(item.snippet.publishTime).fromNow()}<Text style={[styles.see, {
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontSize: 14,
                      color: '#fff'
                    }]}>
                      . {videoStats[item.id.videoId] && videoStats[item.id.videoId].viewCount} vues</Text>
                  </Text>
                  <Text style={[styles.see, {
                    position: 'absolute',
                    top: 10,
                    left: 235,
                    fontSize: 14,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }]}>{videoDetails[item.id.videoId] && parseDuration(videoDetails[item.id.videoId].duration)}</Text>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingRight: 10 }} />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Pour vous</Text>
        <TouchableOpacity onPress={() => {
          flatListRef1.current.scrollToEnd({ animated: true });
        }}><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.Contain}>
        <FlatList
          data={videos2}
          ref={flatListRef1}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.containImage}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Image
                    source={{ uri: item.snippet.thumbnails.high.url }}
                    style={styles.shortImage}
                    filter="grayscale(0.5)"
                  />
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 12 }}>
                      {videoDetails[item.id.videoId] && parseDuration(videoDetails[item.id.videoId].contentDetails.duration)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight:10}}
        />
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>Dernieres videos</Text>
        <TouchableOpacity><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.dernierVideo}>
        {Array.isArray(videos3) && videos3.length > 0 ? (
          videos3.map((item, index) => (
            <View key={index} style={styles.video}>
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Image
                  source={{ uri: item.snippet.thumbnails.high.url }}
                  style={styles.image}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: [{ translateX: -12 }, { translateY: -12 }],
                  }}
                >
                  <Icon name="play" size={30} color="#fff" opacity={0.9} />
                </View>
              </TouchableOpacity>

              <View style={styles.textVideo}>
                <Text style={styles.temps}>
                  {moment.utc(item.snippet.publishTime).local().fromNow()}
                </Text>

                <View style={[styles.VTI, { width: '85%' }]}>
                  <Text style={styles.title}>
                    {decode(item.snippet.title).substring(0, 55) + '...'}
                  </Text>
                  <Text
                    style={[
                      styles.seeDerniereVideo,
                      {
                        position: 'absolute',
                        top: 60,
                      },
                    ]}
                  >
                    {videoStats[item.id.videoId] &&
                      videoStats[item.id.videoId].viewCount}{' '}
                    vues
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    {videoDetails[item.id.videoId] &&
                      parseDuration(videoDetails[item.id.videoId].contentDetails.duration)}
                  </Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}></Text>
          </View>
        )}
        <View style={styles.NosEmission}>
          <View style={styles.AT}>
            <Text style={{ fontWeight: 500, fontSize: '24' }}>Suite Actu</Text>
            <TouchableOpacity>
              <Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>
                Tout voir
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.NosFormationsContainer}>
            {Array.isArray(videos4) && videos4.length > 0 ? (
              videos4.map((item, index) => (
                <View key={index} style={styles.NosFormationCard}>
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <Image
                      style={styles.imageSA}
                      source={{ uri: item.snippet.thumbnails.high.url }}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: [{ translateX: -12 }, { translateY: -12 }],
                      }}
                    >
                      <Icon name="play" size={32} color="#fff" />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: 25,
                      opacity: 0.8,
                      fontWeight: 300,
                      fontSize: 16,
                      marginTop: 5,
                      width: '90%',
                    }}
                  >
                    {decode(item.snippet.title).substring(0, 100) + '...'}
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    {videoDetails[item.id.videoId] &&
                      parseDuration(videoDetails[item.id.videoId].contentDetails.duration)}
                  </Text>
                </View>
              ))
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}></Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.AT}>
        <Text style={{ fontWeight: 500, fontSize: '24' }}>L'actualité</Text>
        <TouchableOpacity onPress={() => {
          flatListRef2.current.scrollToEnd({ animated: true });
        }}><Text style={[styles.TV, { color: '#FFB400', marginRight: 35, marginTop: 10 }]}>Tout
          voir</Text></TouchableOpacity>
      </View>
      <View style={styles.Contain}>
        <FlatList data={videos5}
        ref={flatListRef2}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <View style={styles.containImage}>
              <View style={{ position: 'relative' }}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.shortImage} filter="grayscale(0.5)" />
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    {videoDetails[item.id.videoId] && parseDuration(videoDetails[item.id.videoId].contentDetails.duration)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 10 }}
          
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
    height: 180,
    marginTop: 10,
    marginLeft: 20
  },
  NosFormationCard:
  {
    marginTop: 5
  }

});

export default Replay;
