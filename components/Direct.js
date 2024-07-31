import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Direct = () => {
  return (
    <View style={styles.container}>
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
 
});

export default Direct;