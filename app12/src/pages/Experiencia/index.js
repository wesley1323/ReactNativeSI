import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Experiencia() {
  const navigation = useNavigation();
  
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

    <Text style={styles.titulo}>Experiência:</Text>
    <Text style={styles.texto}>Operador portuário durante 5 anos e meio</Text>
    <Text style={styles.texto}>Analista de negócios trabalhando com a Appz2me durante 1 ano e meio</Text>
    <Text style={styles.texto}>Inspetor de cargas e elevações de cargas durante 3 anos</Text>
    
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
