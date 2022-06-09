import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props} >
          <View style={styles.container}>
            <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/83348302?v=4'}}
            style={styles.img}
            />
            <Text style={styles.title}>
              Felipe Santos da Silva
            </Text>
          </View>
     
          <DrawerItemList {...props} />
     
        </DrawerContentScrollView>
    );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    img: {
      width: 250,
      height: 250,
      marginVertical: 20,
      alignSelf: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 7,
      margin:  4,
      color: '#0000ff',
    },
  })