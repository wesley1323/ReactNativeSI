import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Keyboard, Image, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      perfilValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorPerfil = this.state.perfilValor;
    const response = await api.get(valorPerfil);
    this.setState({
      perfil: response.data,
    });
    this.setState({
      valorRetorno: `
        ID: ${this.state.perfil.id}
        Nome: ${this.state.perfil.name} 
        Repositórios: ${this.state.perfil.public_repos}
        Seguidores: ${this.state.perfil.followers}
        Seguindo: ${this.state.perfil.following}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    let img = this.state.perfil.avatar_url
      ? this.state.perfil.avatar_url
      : 'https://pngimg.com/uploads/github/github_PNG41.png';

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <Text style={styles.titulo}>Perfil GITHUB</Text>
          </View>

          <View style={styles.center}>
            <Image
            source={{ uri: img }}
            style={styles.img}
            />
          </View>

          <View style={styles.row}>
            <TextInput
            placeholder="Usuário"
            style={styles.input}
            onChangeText={(value) => this.setState({ perfilValor: value })}
            />

            <TouchableOpacity onPress={this.retorno}>
              <FontAwesome style={{ marginLeft: 10 }} name="search" size={40} color={'#4D4452'} />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <Text style={{ fontSize: 20, color: "white" }}>{this.state.valorRetorno}</Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#EFEFEF'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#4D4452', 
    padding: 8,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  img: {
    width: 300, 
    height: 300, 
    marginVertical: 30,
    borderRadius: 200,
  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 300,
    color: 'black',
    backgroundColor: '#EFEFEF',
    borderColor: '#4D4452',
    borderWidth: 3,
  },
  box:{
    backgroundColor: "#4D4452",
    margin: 30,
    borderRadius: 20,
  },
});

export default App;