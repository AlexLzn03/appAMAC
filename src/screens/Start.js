//Tela de início antes do Login ou Cadastro
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
//Animação para o React Native https://reactnative.dev/docs/animated

import { getAuth, onAuthStateChanged} from "firebase/auth";
import { auth } from '../config/firebase';

export default function Screens() {
  const navigation = useNavigation();

  /*const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      navigation.navigate('Home')
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  }); */

  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={200}
          animation="flipInY"
          source={require('../assets/logo.png')}
          style={{ width: '70%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={700} animation="fadeInRight" style={styles.containerAcess}>
        <Text style={styles.title}>AMAC</Text>
        <Text style={styles.text}>Monitore seu carro na palma da sua mão!</Text>

        <TouchableOpacity style={styles.button}
        //TROCAR HOME POR LOGIN
        onPress={() => navigation.navigate('Home')}> 
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}
/*
import React, {useEffect, useState} from "react";
import { getAuth } from "firebase/auth";

  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuth().onAuthStateChanged((_user) => {
      setUser(_user);
    })
  }, []);
{user ? () => navigation.navigate('Home') : () => navigation.navigate('Start')} </Routes>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390366',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#390366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /*logoTitle: {
    color: '#F6F3E8',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },*/
  containerAcess: {
    flex: 1,
    backgroundColor: '#F6F3E8',
    //borderTopLeftRadius: 25,
    //borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginLeft: '3%',
    marginRight: '3%',
    margin: '3%',
    borderRadius: 25,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignSelf: 'center',
  },
  text: {
    color: '#242424',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#29027D',
    borderRadius: 8,
    paddingVertical: 8,
    width: '100%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#F6F3E8',
    fontWeight: 'bold',
  }
})