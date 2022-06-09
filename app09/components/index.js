import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

function SelecionarVagas(props) {

  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.roxo]}>{props.cargo}</Text>
        <Text style={styles.text}>Faixa Salarial: {props.salario}</Text>
        <Text style={styles.text}>Resumo: {props.resumo}</Text>
        <Text style={styles.text}>Contato: {props.contato}</Text>
        <Text></Text>
    </View>
  );
}

export default SelecionarVagas;