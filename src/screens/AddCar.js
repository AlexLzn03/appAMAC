//Tela de adicionar carros do app
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { app, db, getFirestore, collection, addDoc, getDocs } from "../config/firebase";

export default function Screens() {
    const navigation = useNavigation();

    //Informações do documento
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [versao, setVersao] = useState("");
    const [ano, setAno] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [motor, setMotor] = useState("");
    const [cambio, setCambio] = useState("");
    const [quilometragem, setQuilometragem] = useState("");

    //Iniciar a coleção carros e adicionar os documentos nela
    const addCarros = async () => {
        try {
            const docRef = await addDoc(collection(db, "carros"), {
                marca: marca,
                modelo: modelo,
                versao: versao,
                ano: ano,
                combustivel: combustivel,
                motor: motor,
                cambio: cambio,
                quilometragem: quilometragem,
            });
            console.log("Document written with ID: ", docRef.id);
            setMarca("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Marca do veículo</Text>
            <TextInput
                placeholder="Digite a marca do veículo"
                value={marca}
                onChangeText={(text) => setMarca(text)}
                //onSubmitEditing={addCarros}
                style={styles.input}
            />
            <Text style={styles.title}>Modelo do veículo</Text>
            <TextInput
                placeholder="Digite o modelo do veículo"
                value={modelo}
                onChangeText={(text) => setModelo(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Versão do veículo</Text>
            <TextInput
                placeholder="Digite a versão do veículo"
                value={versao}
                onChangeText={(text) => setVersao(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Ano do veículo</Text>
            <TextInput
                placeholder="Digite o ano do veículo"
                value={ano}
                onChangeText={(text) => setAno(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Combustível do veículo</Text>
            <TextInput
                placeholder="Selecione o combustível do veículo"
                value={combustivel}
                onChangeText={(text) => setCombustivel(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Motorização do veículo</Text>
            <TextInput
                placeholder="Selecione a motorização do veículo"
                value={motor}
                onChangeText={(text) => setMotor(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Câmbio do veículo</Text>
            <TextInput
                placeholder="Selecione o câmbio do veículo"
                value={cambio}
                onChangeText={(text) => setCambio(text)}
                style={styles.input}
            />
            <Text style={styles.title}>Quilometragem do veículo</Text>
            <TextInput
                placeholder="Digite a quilometragem do veículo"
                value={quilometragem}
                onChangeText={(text) => setQuilometragem(text)}
                onSubmitEditing={addCarros}
                style={styles.input}
            />
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
    title: {
        fontSize: 20,
        marginTop: 28,
    }
})