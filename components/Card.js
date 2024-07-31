import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
    <Image style={{resizeMode: 'cover', width: 100, height: 100}} source={{uri:item.urlToImage}}/>
    <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    padding: 16,
    marginVertical: 8,
  },
});

export default Card;