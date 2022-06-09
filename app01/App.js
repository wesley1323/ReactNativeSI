import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
 
function App(){

  return(
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/85196788?v=4'}}
        style={styles.img}
      />

      <Text style={styles.title}>Dados Pessoais:</Text>
      <Text style={styles.text}>Nome: Wesley nascimento Silva</Text>
      <Text style={styles.text}>Idade: 32 anos</Text>
      <Text style={styles.text}>Data de nascimento: 08/04/1989</Text>
      <Text style={styles.text}>Cidade: Guarujá/SP</Text>

      <Text style={styles.title}>Formação Acadêmica:</Text>
      <Text style={styles.text}>Sistemas para internet - 2018 a 2022</Text>
      <Text style={styles.text}>Instituição de ensino: Fatec Rubens Lara</Text>

      <Text style={styles.title}>Experiência:</Text>
      <Text style={styles.text}>Operador portuário durante 5 anos e meio</Text>
      <Text style={styles.text}>Analista de negócios trabalhando com a Appz2me durante 1 ano e meio</Text>
      <Text style={styles.text}>Inspetor de cargas e elevações de cargas durante 3 anos</Text>
        
      <Text style={styles.title}>Projetos:</Text>
      <Text style={styles.text}>Github: https://github.com/wesley1323</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 235,
    height: 235,
    alignSelf: 'center',
  },
  text: {
    fontSize: 17,
    marginHorizontal: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    marginVertical: 5,
    margin:  2,
  },
})

export default App;