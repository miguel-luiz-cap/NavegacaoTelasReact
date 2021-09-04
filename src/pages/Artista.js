import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Os melhores artistas</Text>
      <View style={estilo.artista}>
        <View>
          <Text style={estilo.txtArtista}>Zé Ramalho</Text>
        </View>

        <View style={estilo.rede}>
          <Text style={estilo.curtidas}>
            <MaterialCommunityIcons name="thumb-up" size={20} color={"red"}/> 500
            Curtidas
          </Text>
          <Text style={estilo.seguidores}>
            <MaterialCommunityIcons name="account-heart" size={20} color="#00F" /> 354 Seguidores
          </Text>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    //color: '#fff'
    backgroundColor: '#a4d2f7',
  },

  titulo: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    marginVertical: 30,
  },
  artista: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  txtArtista: {},
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
