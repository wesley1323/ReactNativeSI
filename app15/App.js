import React, { useEffect, useState } from 'react';
import { View,Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = openDatabase({
  name: "rn_sqlite",
});

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('error on creating table ' + error.message);
        }
      );
    });
  };

  const deleteTarefa = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa deletada com sucesso!`);
          setTarefas('');
          getTarefas();
        },
        (error) => {
          console.log('Erro ao deletar uma Tarefa ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Informe uma tarefas');
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Erro ao inserir uma Tarefa ' + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          console.log('Tarefas lidas com sucesso!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        (error) => {
          console.log('Erro ao obter Tarefas ' + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#F0F0F0',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginRight: 9,
              fontSize: 20,
              color: '#171717',
              fontWeight: 'bold',
            }}>
            {item.id}.
          </Text>
          <Text style={{ fontSize: 20, color: '#6EE181', fontWeight: 'bold' }}>
            {item.nome}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTarefa(item.id);
            }}>
            <FontAwesome
              name="trash-o"
              size={30}
              style={{ color: '#F00' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getTarefas();
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 15,
          marginHorizontal: 2,
          borderWidth: 1,
          borderRadius: 8,
        }}>
        <TextInput
          placeholder="Informe a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
          style={{ marginHorizontal: 8, color: 'black', fontSize: 18 }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginVertical: 20,
            marginLeft: 'auto',
            marginRight: 8,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={incluirTarefa}>
            <MaterialIcons
              name="add-task"
              size={30}
              style={{ color: '#0F0' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 1,
  },
  input:{
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 2,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#00F',
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
  },
});

export default App;