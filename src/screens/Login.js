//Tela de Login e acesso ao cadastre-se
import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase"

import * as Animatable from 'react-native-animatable'
//Animação para o React https://reactnative.dev/docs/animated 
//As animações https://github.com/oblador/react-native-animatable

//botão SignUp com problema
//botão de Acessar do Login com problema

export default function Screens() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function signIn() {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
               console.log('usuário logado!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    }

    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader}>
                <Animatable.Text delay={200} animation="slideInDown" style={styles.headerText}>Bem-vindo(a)</Animatable.Text>
            </Animatable.View>

            <Animatable.View animation="slideInRight" style={styles.containerAcess}>
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

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Não possui uma conta? Cadastre-se</Text>
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
