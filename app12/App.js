import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawer}>
        <Drawer.Screen 
        name="Home" 
        component={Home} 
        />
        <Drawer.Screen 
        name="Pessoal" 
        component={Pessoal} 
        />
        <Drawer.Screen 
        name="Formacao" 
        component={Formacao}      
        />
        <Drawer.Screen 
        name="Experiencia" 
        component={Experiencia}      
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
