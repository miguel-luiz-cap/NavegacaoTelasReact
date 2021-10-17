import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

import estilo from '../../components/estilo';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/fundo.jpg')}
        style={estilo.fundoimg}
        resizeMode="cover">

      <View style={estilo.bloco}> 
        <Text style={estilo.titulo_home}>{"App de Música\nBem Vindo"}</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

