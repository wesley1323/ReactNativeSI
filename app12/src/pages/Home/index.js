import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

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
