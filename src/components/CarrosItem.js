
//Tela de notificações do app
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable'

const CarrosItem = (props) =>{
    return (
      <View>
        {/*Carro marca*/}
        <Text>{props.marca}</Text>
      </View>
    );
  };

  export default CarrosItem;