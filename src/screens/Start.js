//Tela de início antes do Login ou Cadastro
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
//Animação para o React Native https://reactnative.dev/docs/animated

export default function Screens() {
  const navigation = useNavigation();

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
        onPress={ () => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

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