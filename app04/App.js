import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';

function App (){
  
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [total, setTotal] = useState(0)
  const [msg, setMsg] = useState('')

  function valorAlcool(valor){
    setAlcool(valor)
  }

  function valorGasolina(valor){
    setGasolina(valor)
  }

  function resultado(){
    setTotal(alcool / gasolina)

    if(total != 0 && total < 0.7){
      setMsg('É melhor abastecer com álcool.')
    }
    else if(total >= 0.7){
      setMsg('É melhor abastecer com gasolina.')
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Álcool ou Gasolina</Text>

      <Image
        source={{ uri: 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
        style={styles.img}
      />
 
      <TextInput style={styles.inputs} 
      keyboardType="numeric"
      placeholder="Digite aqui o preço do Álcool"
      onChangeText={ (texto) => valorAlcool(texto) }
      />

      <TextInput style={styles.inputs} 
      keyboardType="numeric"
      placeholder="Digite aqui o preço da Gasolina"
      onChangeText={ (texto) => valorGasolina(texto) }
      />
 
      <Pressable  onPress={resultado}>
        <Text style={styles.button}>
            Conferir resultado
        </Text>
      </Pressable>
 
      <Text style={styles.text}> Resultado: {total} </Text>

      <Text style={styles.text}>{msg}</Text>
      
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
  inputs:{
    height: 50,
    borderRadius: 8, 
    borderWidth: 3,
    marginVertical: 15,
    marginHorizontal: 5,
    fontSize: 23,
  },
  text:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  img: {
    width: 235,
    height: 235,
    alignSelf: 'center',
    borderRadius: 7,
  },
  button: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#262C25',
    textAlign: 'center',
    color: '#21F407',
  },
})
 
export default App;