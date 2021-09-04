import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/Piano.png')}
        style={estilo.fundoimg}
        resizeMode="cover">

      <Text style={estilo.titulo}>App de Musica</Text>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    //color: '#fff'
  },
  fundoimg: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
