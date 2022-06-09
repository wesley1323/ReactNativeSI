import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

function App (){
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://decathlonpro.vteximg.com.br/arquivos/ids/2810980/bola-de-futebol-topper-slick1.jpg?v=637622967234130000'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Bola de Futebol
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/I/71+BaXcaUIL._AC_SX425_.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Bola de Basquete
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://tenisbrasil.uol.com.br/fotos/2019/outros_assuntos/bola_tenis_quadra_800_int.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Bola de Tênis
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://images-americanas.b2w.io/produtos/3587644656/imagens/bola-tenis-mesa-ping-pong-vollo-vt608-com-36-unidades-2-estrelas/3587644656_1_large.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Bola de Tênis de Mesa
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://www.mundodasbolas.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/b/o/bola_volei_60_pro_x___5416042420_3.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Bola de Volei
          </Text>
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
    color: 'black',
    marginVertical: 20,
  },
  text:{
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginTop: 10,
  },
  img: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  espace: {
    paddingHorizontal: 5,
  }
})

export default App;