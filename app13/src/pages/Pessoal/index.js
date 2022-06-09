import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Pessoal() {
  return (
    <View style={styles.container}>
 
     <Text style={styles.titulo}>Dados Pessoais:</Text>
     <Text style={styles.texto}>Nome: Wesley nascimento Silva</Text>
     <Text style={styles.texto}>Idade: 32 anos</Text>
     <Text style={styles.texto}>Data de nascimento: 08/04/1989</Text>
     <Text style={styles.texto}>Cidade: Guarujá/SP</Text>
     
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
