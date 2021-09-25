import * as React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';


export default function ZeRamalho() {
  return(
  <View style={estilo.container}>
    <Text style={estilo.titulo}> Zé Ramalho </Text>
    <ScrollView horizontal = {true}>
      <View>
      <Image resizeMode={'stretch'} style={estilo.img} source={ require('../../assets/eng_hawai.png' ) }/>  
      <Text>Brilhando</Text>
      </View>
      <View><Image resizeMode={'stretch'} style={estilo.img} source={ require('../../assets/Piano.png' ) }/>  
      <Text>Brilhando</Text>
      </View>
      <View><Image resizeMode={'stretch'} style={estilo.img} source={ require('../../assets/eng_hawai.png' ) }/>  
      <Text>Brilhando</Text>
      </View>
    </ScrollView>

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
  img: {
    width: 200,
    maxHeight: 300,
    marginHorizontal: 35,
    marginVertical: 20,
    borderStyle: '',
  }
});
