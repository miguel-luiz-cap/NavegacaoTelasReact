import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Artista from './pages/Artista';
import EngenheiroHawai from './artista/EngenheiroHawai';
import MamonasAssassinas from './artista/MamonasAssassinas';
import RaulSeixas from './artista/RaulSeixas';
import ZeRamalho from './artista/ZeRamalho';

const Stack = createStackNavigator();

export default function RotasButton() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#FF0',
    }}>
      <Stack.Screen name='Artista' component={Artista} options = {{headerShown: false }}/>
      <Stack.Screen name='EngenheiroHawai' component={EngenheiroHawai} options = {{title: 'Engenheiros do Hawai'}}/>
      <Stack.Screen name='MamonasAssassinas' component={MamonasAssassinas} options = {{title: 'Mamonas Assassinas'}}/>
      <Stack.Screen name='RaulSeixas' component={RaulSeixas} options = {{title: 'Raul Seixas'}}/>
      <Stack.Screen name='ZeRamalho' component={ZeRamalho} options = {{title: 'Zé Ramalho'}}/>
    </Stack.Navigator>
  )
}