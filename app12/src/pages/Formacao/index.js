import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Formacao() {
  const navigation = useNavigation();
  
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

    <Text style={styles.titulo}>Formação:</Text>
    <Text style={styles.texto}>Sistemas para internet - 2018 a 2022</Text>
    <Text style={styles.texto}>Instituição de ensino: Fatec Rubens Lara</Text>
    
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
  texto: {
    fontSize: 18,
    marginHorizontal: 2,
  },
})
