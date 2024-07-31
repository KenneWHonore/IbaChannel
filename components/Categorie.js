import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import CategorieItem from '../CategorieItem';


const Categorie = () => {
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
      <Text style={styles.Categories}>Categories</Text>
      <Text style={{ marginLeft: 20, fontSize: 14, opacity: 0.5, fontWeight: 400, marginTop: 5 }}>Explorez une diversité de sujets grâce à notre section Catégories</Text>
      <ScrollView  showsVerticalScrollIndicator={false} style={styles.CardCategories}>



        <FlatList data={CategorieItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={[styles.ItemCategorie]}>
              <TouchableOpacity style={[styles.buttonCategories,
              index === 1 ? styles.specialButtonStyle1 : null,
              index === 2 ? styles.specialButtonStyle2 : null,
              index === 3 ? styles.specialButtonStyle3 : null,
              index === 4 ? styles.specialButtonStyle4 : null,
              index === 5 ? styles.specialButtonStyle5 : null,
              index === 6 ? styles.specialButtonStyle6 : null,
              index === 7 ? styles.specialButtonStyle7 : null,
              index === 8 ? styles.specialButtonStyle8 : null,
              index === 9 ? styles.specialButtonStyle9 : null,
              index === 10 ? styles.specialButtonStyle10 : null,
              index === 11 ? styles.specialButtonStyle11 : null,
              index === 12 ? styles.specialButtonStyle12 : null,
              index === 13 ? styles.specialButtonStyle13 : null,
              index === 14 ? styles.specialButtonStyle14 : null,
              index === 15 ? styles.specialButtonStyle15 : null,
              ]}>
                <Text style={[styles.buttonText, { paddingHorizontal: 20 }]}>{item.categorie}</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={2} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll'
  },
  header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 20,

  },
  Categories:
  {
    fontWeight: 600,
    fontSize: '24',
    marginLeft: 20,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500'
  },
  buttonCategories:
  {
    backgroundColor: '#FFB400',
    padding: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
    width: 180,
    height: 70,

  },
  CardCategories:
  {
    width: '100%',
    marginTop: 20,
    overflow:'scroll'

  },

  specialButtonStyle1: {
    backgroundColor: '#3C3C3C', // or any other color you want
  },
  specialButtonStyle2:
  {
    backgroundColor: 'skyblue',
  },
  specialButtonStyle3:
  {
    backgroundColor: '#65C46F',
  },
  specialButtonStyle4:
  {
    backgroundColor: '#D131A4',
  },
  specialButtonStyle5:
  {
    backgroundColor: '#D59851',
  }
  ,
  specialButtonStyle6:
  {
    backgroundColor: '#DB3737',
  },
  specialButtonStyle7:
  {
    backgroundColor: '#C251D5',
  },
  specialButtonStyle8:
  {
    backgroundColor: '#37DB3E',
  },
  specialButtonStyle9:
  {
    backgroundColor: '#D1418F',
  },
  specialButtonStyle10:
  {
    backgroundColor: '#8A0909',
  },
  specialButtonStyle11:
  {
    backgroundColor: '#878A09',
  },
  specialButtonStyle12:
  {
    backgroundColor: '#3C3C3C',
  },
  specialButtonStyle13:
  {
    backgroundColor: '#6F0580',
  },
  specialButtonStyle14:
  {
    backgroundColor: '#235148',
  },
  specialButtonStyle15:
  {
    backgroundColor: '#D1418F',
  },
 
});

export default Categorie;