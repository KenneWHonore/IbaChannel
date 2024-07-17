import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "space-between",
        flexDirection:"row",
        
        // alignItems: "center"
        
      }}>
      <Text style={{
        color: "white",
        fontFamily: "Montsera, sans-serif",
        fontSize: "48px",
        fontWeight: "800",
        marginTop:45,
        marginLeft:20,
      }}
        >Direct
      </Text>
      <Text style={{
        color:'#FFB400',
        fontFamily:"Montsera, sans-serif",
        fontSize:"16",
        marginTop:70,
        marginRight:20,
        }}>Passer</Text>
    </View>
  );
};

export default App
