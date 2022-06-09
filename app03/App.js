import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

function App (){
  
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado, setResultado] = useState()

  function numeroUm(numero){
    setNumero1(numero);
  }

  function numeroDois(numero){
    setNumero2(numero);
  }
 
  function calculo(){
    setResultado(numero1 * numero2)
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Multiplicador de números</Text>
 
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite o primeiro número da multiplicação"
      onChangeText={ (texto) => numeroUm(texto) }
      />

      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite o segundo número da multiplicação"
      onChangeText={ (texto) => numeroDois(texto) }
      />
 
      <Button title="Calcular" onPress={calculo} />
 
      <Text style={styles.text}> Resultado: {resultado} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  input:{
    height: 60,
    borderRadius: 6, 
    borderWidth: 2,
    margin: 13,
    fontSize: 18,
  },
  text:{
    textAlign: 'center',
    fontSize: 23,
  }
})
 
export default App;