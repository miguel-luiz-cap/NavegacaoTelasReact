import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Artista from './RotasButton';
import Musica from './pages/Musica';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();


export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#FFFF00',
        activeBackgroundColor: '#F0F',
      }}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Artistas"
        component={Artista}
        options={{
          tabBarLabel: 'Artistas',
          title: 'Artistas',
          showTitle: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={size}
            />
          ),
        }}
      />
     
      <Tab.Screen
        name="Musica"
        component={Musica}
        options={{
          tabBarLabel: 'Música',
          title: 'Música',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="music"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
