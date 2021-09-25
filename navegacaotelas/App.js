import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
//import Artista from './src/pages/Artista';
import RotasTab from './src/RotasTab';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <RotasTab />
    </NavigationContainer>
  );
}
