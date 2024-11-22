//Tela principal do aplicativo
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

import { app, db, getFirestore, collection, addDoc, getDocs } from "../config/firebase";
import { Firestore } from 'firebase/firestore';

export default function Screens() {
  const navigation = useNavigation();
  const [listaCarros, setListaCarros] = useState([]);

  //Acessar a coleção criada
  const getListaCarros = async () => {
    const querySnapshot = await getDocs(collection(db, "carros"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setListaCarros({
        ...doc.data(),
        id: doc.id,
      })
    });
  };

  useEffect(() => {
    getListaCarros();
  }, [])

  return (
    <View style={styles.container}>
      
      <FlatList
        data={listaCarros}
        renderItem={({item})=><CarrosItem marca={item.marca}/>}
        keyExtractor={item=>item.id}
      />
      
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('AddCar')}>
        <Text style={styles.buttonText}>Adcionar um veículo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#F6F3E8',
    borderRadius: 8,
    paddingVertical: 8,
    width: '100%',
    alignSelf: 'center',
    bottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%'
  },
  buttonText: {
    fontSize: 18,
    color: '#29027D',
    fontWeight: 'bold',
  }
})