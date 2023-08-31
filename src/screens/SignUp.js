//Tela de cadastramento de um novo usuário
import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase"

import * as Animatable from 'react-native-animatable'
//Animação para o React https://reactnative.dev/docs/animated 
//As animações https://github.com/oblador/react-native-animatable

export default function Screens() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function signUp(){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Aviso',
        'Usuário criado com sucesso! Efetue o login')
        navigation.navigate('Login')
        //assim que é feito o cadastro redireciona para a tela de Login
      })
      .catch((error) => {
        /*const errorCode = error.code;
        const errorMessage = error.message;*/
        console.log(error);
      });
    }

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerHeader}>
        <Animatable.Text delay={200} animation="slideInDown" style={styles.headerText}>Novo usuário</Animatable.Text>
      </Animatable.View>

      <Animatable.View animation="slideInLeft" style={styles.containerAcess}>
        <Text style={styles.title}>Email</Text>
        <TextInput 
        placeholder="Digite seu e-mail" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput 
        placeholder="Digite sua senha" 
        value={password} 
        onChangeText={setPassword}
        style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>Já possui uma conta? Faça o login</Text>
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
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F6F3E8'
  },
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
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    //backgroundColor: '#C6E9F7',
    borderRadius: 5,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    //paddingStart: '2%',
  },
  button: {
    backgroundColor: '#29027D',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F6F3E8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSignUp: {
    marginTop: 14,
    alignSelf: 'center',
  },
  signUpText: {
    color: '#a1a1a1'
  }
})