import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchBar from './SearchBar';






const Search = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
         <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} activeOpacity={0.6}>
                    <AntDesign name="close" size={32} color="#FFB400" />
                </TouchableOpacity>
                {/* <SearchBar /> */}

            </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },
  header:
    {
        flexDirection: 'row',
        width: '100%',

    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export default Search;