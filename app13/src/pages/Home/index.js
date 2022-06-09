import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Home() {
 return (
   <View style={styles.container}>
     <Text style={styles.titulo}>Home</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 3,
    margin:  2,
  },
})
