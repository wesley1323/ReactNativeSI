import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      status2: 0,
    };
  };

    async componentDidMount(){
    await AsyncStorage.getItem('status').then((value)=> {
      this.setState({status: JSON.parse(value)});
    })

    await AsyncStorage.getItem('status2').then((value2)=> {
      this.setState({status2: JSON.parse(value2)});
    })
  }
 
  async componentDidUpdate(_, prevState){
    const status = this.state.status;
    const status2 = this.state.status2;
 
    if(prevState !== status){
      await AsyncStorage.setItem('status', JSON.stringify(status));
    }

    if(prevState !== status2){
      await AsyncStorage.setItem('status2', JSON.stringify(status2));
    }
  }

  render() {
    return (
      <View style={{backgroundColor: `${(this.state.status == 1) ? "black" : "white"}`,
      paddingTop: 50
      }}
      >
      <ScrollView>
        <Text style={{fontSize: `${(this.state.status2 == 1) ? 35 : 25}`,
          textAlign: 'center',
          color: `${(this.state.status == 1) ? "white" : "black"}`,
        }}>VERSÍCULOS</Text>
        
        <View style={styles.row}>

          <View style={{flexDirection: 'row'}}>
            <Feather style={{marginRight: 10, color: `${(this.state.status == 1) ? "white" : "black"}`}} name='moon' size={35} />
            <Switch
              value={(this.state.status2 == 1) ? true : false}
              onValueChange={ (valorSwitch) => this.setState({status: valorSwitch ? 1 : 0})}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <MaterialIcons style={{marginRight: 10, color: `${(this.state.status == 1) ? "white" : "black"}`,}} name="format-size" size={35} />
            <Switch
              value={(this.state.status2 == 1) ? true : false}
              onValueChange={ (valorSwitch) => this.setState({status2: valorSwitch ? 1 : 0})}
            />
          </View>
        
        </View>
          <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
          color: `${(this.state.status == 1) ? "white" : "black"}`,
          textAlign: 'center', fontStyle: 'italic',
          }}>
              Mateus 18:21,22: "Então Pedro, aproximando-se dele, disse: Senhor, até quantas vezes pecará meu irmão contra mim, e eu lhe perdoarei? Até sete? Jesus lhe disse: Não te digo que até sete; mas, até setenta vezes sete." {"\n"}
          </Text>

          <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
          color: `${(this.state.status == 1) ? "white" : "black"}`,
          textAlign: 'center', fontStyle: 'italic',
          }}>
            Coríntios 13:4,7: "O amor é sofredor, é benigno; não é invejoso;  não trata com leviandade, não se ensoberbece. Não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal; não folga com a injustiça, mas folga com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta." {"\n"}
          </Text>

          <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
          color: `${(this.state.status == 1) ? "white" : "black"}`,
          textAlign: 'center', fontStyle: 'italic',
          }}>
            João 14:6: "Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim."{"\n"}
          </Text>

          <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
          color: `${(this.state.status == 1) ? "white" : "black"}`,
          textAlign: 'center', fontStyle: 'italic',
          }}>
            Provérbios 3:5: "Confie no Senhor de todo o seu coração e não te estribes no teu próprio entendimento."{"\n"}
          </Text>       
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }, 
  titulo: {
    fontSize: 25,
    textAlign: 'center',
  },
  row: {
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    paddingBottom: 25,
  },
});

export default App;