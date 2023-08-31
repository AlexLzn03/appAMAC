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