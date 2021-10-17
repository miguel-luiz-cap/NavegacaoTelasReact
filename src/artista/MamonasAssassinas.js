import * as React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import estilo from '../../components/estilo';

export default function MamonasAssassinas() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/fundo.jpg')}
        style={estilo.fundoimg}
        resizeMode="cover">
        <Text style={estilo.titulo}>Mamonas Assassinas</Text>
        <ScrollView horizontal={true}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/eng_hawai.png')}
            />
            <Text>Brilhando</Text>
          </View>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/Piano.png')}
            />
            <Text>Brilhando</Text>
          </View>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/eng_hawai.png')}
            />
            <Text>Brilhando</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
