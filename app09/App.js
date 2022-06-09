import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Vagas from './components/Vagas';

function App (){

  const inseriDados = [
    {cargo: 'Analista de Negócios', resumo: 'Fazer contato com potenciais clientes.', salario: 'R$ 3.500', contato: '(13) 33414879'},
    {cargo: 'Analista de Dados', resumo: 'Criar dashboards com dados para ajudar na tomada de decisões.', salario: 'R$ 4.000', contato: '(12) 996328547'},
    {cargo: 'Analista de logística', resumo: 'Atuar na organização logistica da instituição.', salario: 'R$ 2.000', contato: '(11) 974521586'},
    {cargo: 'Gerente de Projetos', resumo: 'Gerenciar toda as etapas do projeto.', salario: 'R$ 6.000', contato: '(13) 997552896'},
    {cargo: 'Analista de Infraestrutura', resumo: 'Atuar na infraestrutura digital.', salario: 'R$ 3.200', contato: '(11) 996387452'},
  ]
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <ScrollView>
        <View>
          {
            inseriDados.map((info, index) => (
              <SelecionarVagas
                key={index}
                cargo={info.cargo}
                resumo={info.resumo}
                salario={info.salario}
                contato={info.contato}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#F92E2E',
  },
  espace:{
    marginTop: 24,
    paddingHorizontal: 16
  }
})

export default App;