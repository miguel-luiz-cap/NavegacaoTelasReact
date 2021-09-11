import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Arr_Musica = [
  {
    uid: 1,
    nome: "Ana Júlia",
    like: 400,
    reproducoes: 500,
  },
  {
    uid: 2,
    nome: "Wish you are here",
    like: 705,
    reproducoes: 1987,
  },
  {
    uid: 3,
    nome: "Ela é amiga da minha mulher",
    like: 4000,
    reproducoes: 4512,
  },
  {
    uid: 4,
    nome: "Californication",
    like: 1313,
    reproducoes: 122,
  },
];
export default function Musica() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>As melhores músicas</Text>
      <FlatList
        data={Arr_Musica}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <View style={estilo.musica}>
            <Text style={estilo.txtMusica}> {item.nome} </Text>
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
          </View>
        )}
      />
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a4d2f7",
  },

  titulo: {
    color: "#FFF",
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    marginVertical: 30,
  },
  musica: {
    backgroundColor: "#a2f5e9A5",
    margin: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: "center",

  },
  txtMusica: {
    fontSize: 20,
  },
  rede: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
