//App.js redireciona a rota ao componente Navigation dentro de Routes
import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/Routes/Navigation'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#390366" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}