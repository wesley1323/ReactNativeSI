import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: [],
      cepValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorCep = this.state.cepValor;
    const response = await api.get(`ws/${valorCep}/json`);
    this.setState({
      cep: response.data,
    });
    this.setState({
      valorRetorno: `
        CEP: ${this.state.cep.cep} \n
        LOGRADOURO: ${this.state.cep.logradouro} \n
        BAIRRO: ${this.state.cep.bairro} \n
        CIDADE: ${this.state.cep.localidade} \n
        ESTADO: ${this.state.cep.uf}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.titulo}>CEP x Endereço</Text>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Informe o CEP: "
            style={styles.input}
            onChangeText={(value) => this.setState({ cepValor: value })}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={this.retorno}>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="map-marker-radius"
              size={40}
              color={'#00F'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.texto}>
            Informações do endereço:{'\n'}
            {this.state.valorRetorno}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    paddingTop: 20,
    backgroundColor: '#EFEFEF',
  },
  titulo: {
    fontSize: 25,
    marginBottom: 50,
    color: '#00F',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    padding: 10,
    width: 350,
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 5,
  },
  texto: {
    color: '#EFEFEF',
    fontSize: 15,
  },
  caixa: {
    backgroundColor: '#00F',
    color: 'white',
    marginTop: 30,
    margin: 8,
    borderRadius: 8,
    padding: 30,
    borderWidth: 1,
  },
});

export default App;