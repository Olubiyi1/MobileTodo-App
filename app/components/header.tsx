import React from "react";
import { View,Text, StyleSheet } from "react-native";



export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todos</Text>
    </View>
  )
};

const styles = StyleSheet.create({
   header:{
    height: 80,
    backgroundColor:"coral",
    justifyContent:"center",
    alignItems:"center"
   },
   text:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:30
   }
})