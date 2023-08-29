//Tela de cadastramento de um novo usuário
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Screens() {
  return (
    <View style={styles.container}>
      <Text>Tela Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#390366'
  }
})