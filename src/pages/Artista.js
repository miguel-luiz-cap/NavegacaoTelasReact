import * as React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Arr_artistas = [
  {
    uid: 1,
    nome: 'Zé Ramalho',
    like: 400,
    seguidores: 500,
  },
  {
    uid: 2,
    nome: 'Mamomas Assassinas',
    like: 705,
    seguidores: 1987,
  },
  {
    uid: 3,
    nome: 'Raul Seixas',
    like: 4000,
    seguidores: 4512,
  },
  {
    uid: 4,
    nome: 'Engenheiros do Hawai',
    like: 1313,
    seguidores: 122,
  },
];

export default function Artista() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Os melhores artistas</Text>
      <FlatList
        data={Arr_artistas}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <Text style={estilo.txtArtista}> {item.nome} </Text>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'red'}
                /> {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color="#00F"
                /> {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
      )}
      />
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
    fontWeight: 'bold',
    marginVertical: 30,
  },
  artista: {
    backgroundColor: '#a2f5e9',
    margin: 15,
    padding: 5,
    borderRadius: 10,

    textAlign: 'center',
  },
  txtArtista: {
    fontSize: 20,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
