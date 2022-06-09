import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

function App(){
  const [valor, setValor] = useState(0)

  function maisum(){
    setValor(valor + 1)
  }

  function menosum(){
    if(valor > 0){
      setValor(valor - 1)
    }
    else{
      setValor(0)
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Contador de pessoas</Text>

      <Contador valor={valor}/>
 
      <Button color='green' title='+' onPress={maisum}/>

      <Button color='red' title='-' onPress={menosum}/>
 
    </View>
  );
}

function Contador(pessoas){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{pessoas.valor}</Text>
    </View>
  )
}

export default App;