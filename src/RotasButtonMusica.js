import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Musica from './pages/Musica';
import AnaJulia from './musica/AnaJulia';
import Wish_you_are_here from './musica/Wish_you_are_here';
import Amiga_da_minha_mulher from './musica/Amiga_da_minha_mulher';
import Californication from './musica/Californication';

const Stack = createStackNavigator();

export default function RotasButtonMusica() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerStyle: { backgroundColor: '#505' },
        headerTintColor: '#FF0',
    }}>
      <Stack.Screen name='Musica' component={Musica} options = {{headerShown: false }}/>
      <Stack.Screen name='AnaJulia' component={AnaJulia} options = {{title: 'Ana Júlia'}}/>

      <Stack.Screen name='Wish_you_are_here' component={Wish_you_are_here} options = {{title: 'Wish you are here'}}/>
      <Stack.Screen name='Amiga_da_minha_mulher' component={Amiga_da_minha_mulher} options = {{title: 'Ela é amiga da minha mulher'}}/>
      <Stack.Screen name='Californication' component={Californication} options = {{title: 'Californication'}}/>
    </Stack.Navigator>
  )
}