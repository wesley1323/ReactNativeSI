import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';

function App (){
  
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [msg, setMsg] = useState('')

  function Peso(numero) {
    setPeso(numero)
  }

  function Altura(numero) {
    setAltura(numero)
  }

  function resultado(){
    setResultado(peso/(altura**2));

    if(total < 18.5) {
      setMsg('Abaixo do peso.')
    } 
    else if(total >= 18.5 && total <= 24.9) {
      setMsg('Peso normal.')
    }
    else if(total >= 25 && total <= 29.9) {
      setMsg('Sobrepeso.')
    }
    else if(total >= 30 && total <= 34.9) {
      setMsg('Obesidade Grau I.')
    }
    else if(total >= 35 && total <= 39.9) {
      setMsg('Obesidade Grau II.')
    }
    else if(total >= 40) {
      setMsg('Obesidade Grau III ou Mórbida.')
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de IMC</Text>

      <Image
        source={{ uri: 'https://www.lucianaspina.com.br/wp-content/uploads/2018/05/IMC.jpg'}}
        style={styles.img}
      />
 
      <TextInput style={styles.inputs} 
      keyboardType="numeric"
      placeholder="Digite o peso que deseja apurar"
      onChangeText={ (texto) => Peso(texto) }
      />
      
      <TextInput style={styles.inputs} 
      keyboardType="numeric"
      placeholder="Digite a altura que deseja apurar"
      onChangeText={ (texto) => Altura(texto) }
      />

      <Pressable  onPress={resultado}>
        <Text style={styles.button}>
            Resultado
        </Text>
      </Pressable>
 
      <Text style={styles.text}> Resultado: {total} </Text>

      <Text style={styles.text}>
        {msg}
      </Text>
      
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
    backgroundColor: '#07F4ED',
    textAlign: 'center',
    color: '#0A0C0C',
  }
})
 
export default App;