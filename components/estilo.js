import * as React from 'react';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505',
  },
  fundoimg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  titulo: {
    color: '#FFFF00',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 30,
    textDecoration: 'underline',
  },
  titulo_home: {
    color: '#FF0',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 150,
  },
  blocoEstilo: {
    //backgroundColor: '#FAF',
    shadowColor: '#FAF',
    shadowRadius: 15,
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  txtStyle: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    //color: '#00F',
    //fontWeight: 'bold',
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

export default estilo;