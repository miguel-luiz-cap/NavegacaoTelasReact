import * as React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from '../../components/estilo';

const Arr_artistas = [
  {
    uid: 1,
    nome: 'Zé Ramalho',
    like: 400,
    seguidores: 500,
    buttom: 'ZeRamalho',
  },
  {
    uid: 2,
    nome: 'Mamomas Assassinas',
    like: 705,
    seguidores: 1987,
    buttom: 'MamonasAssassinas',
  },
  {
    uid: 3,
    nome: 'Raul Seixas',
    like: 4000,
    seguidores: 4512,
    buttom: 'RaulSeixas',
  },
  {
    uid: 4,
    nome: 'Engenheiros do Hawai',
    like: 1313,
    seguidores: 122,
    buttom: 'EngenheiroHawai',
  },
];

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/fundo.jpg')}
        style={estilo.fundoimg}
        resizeMode="cover">
        <Text style={estilo.titulo}>Os melhores artistas</Text>
        <FlatList
          data={Arr_artistas}
          keyExtractor={(item) => {
            item.uid.toString();
          }}
          renderItem={({ item }) => (
            //<View >
            <LinearGradient
              colors={['#FFA000', '#FF5500']}
              locations={[0.1, 0.8]}
              style={estilo.blocoEstilo}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(item.buttom);
                }}>
                <Text style={estilo.txtStyle}> {item.nome} </Text>
              </TouchableOpacity>
              <View style={estilo.rede}>
                <Text style={estilo.curtidas}>
                  <MaterialCommunityIcons
                    name="thumb-up"
                    size={20}
                    color={'red'}
                  />{' '}
                  {item.like} Curtidas
                </Text>
                <Text style={estilo.seguidores}>
                  <MaterialCommunityIcons
                    name="account-heart"
                    size={20}
                    color="#00F"
                  />{' '}
                  {item.seguidores} Seguidores
                </Text>
              </View>
            </LinearGradient>
            //</View>
          )}
        />
      </ImageBackground>
    </View>
  );
}

