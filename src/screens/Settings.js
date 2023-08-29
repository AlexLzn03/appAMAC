//Tela de configurações do app
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Screens() {
  return (
    <View style={styles.container}>
      <Text>Tela de configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390366',
  },
})