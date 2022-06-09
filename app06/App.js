import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';

function App (){
  
  const [numero, setNumero] = useState(0)

  function numeroAleatorio(){
    setNumero(Math.floor(Math.random()*11))
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Jogo do Números Aleatórios</Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvH9dMBa8AonavRXqPEuCY2n6SwXSoP5kow&usqp=CAU'}}
        style={styles.img}
      />
 
      <Text style={styles.text}>
        Imagine um Número de 0 a 10.
      </Text>

      <Text style={styles.resultado}>
        {numero}
      </Text>
      
      <Pressable  onPress={numeroAleatorio}>
        <Text style={styles.button}>
            Descobrir
        </Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 29,
    marginTop: 25,
    color: '#262C25'
  },
  text:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  resultado:{
    color: '#02B011',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
    marginVertical: 10,
  },
  img: {
    width: 235,
    height: 235,
    marginVertical: 18,
    alignSelf: 'center',
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#026CB0',
    textAlign: 'center',
    color: '#F7F7F7',
  },
})
 
export default App;