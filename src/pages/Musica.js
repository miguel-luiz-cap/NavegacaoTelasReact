import * as React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import estilo from '../../components/estilo';

const Arr_Musica = [
  {
    uid: 1,
    nome: "Ana Júlia",
    like: 400,
    reproducoes: 500,
    buttom: 'AnaJulia',
  },
  {
    uid: 2,
    nome: "Wish you are here",
    like: 705,
    reproducoes: 1987,
    buttom: 'Wish_you_are_here',
  },
  {
    uid: 3,
    nome: "Ela é amiga da minha mulher",
    like: 4000,
    reproducoes: 4512,
    buttom: 'Amiga_da_minha_mulher',
  },
  {
    uid: 4,
    nome: "Californication",
    like: 1313,
    reproducoes: 122,
    buttom: 'Californication',
  },
];
export default function Musica(props) {
  return (
    <View style={estilo.container}>
    <ImageBackground
        source={require('../../assets/fundo.jpg')}
        style={estilo.fundoimg}
        resizeMode="cover">
      <Text style={estilo.titulo}>As melhores músicas</Text>
      <FlatList
        data={Arr_Musica}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          //<View>
            <LinearGradient colors={['#FFA000', '#FF5500']} locations={[0.1, 0.8]} style={estilo.blocoEstilo}>

              <TouchableOpacity onPress={()=>{props.navigation.navigate( item.buttom )}}>
                <Text style={estilo.txtStyle}> {item.nome} </Text>
              </TouchableOpacity>

              <View style={estilo.rede}>
                <Text style={estilo.curtidas}>
                  <MaterialCommunityIcons
                    name="thumb-up"
                    size={20}
                    color={"#F00"}
                  /> {item.like} Curtidas
                </Text>

                <Text style={estilo.reproducoes}>
                  <MaterialCommunityIcons
                    name="headphones"
                    size={20}
                    color="#00F"
                  /> {item.reproducoes} Reproduções
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

