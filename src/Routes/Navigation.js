//Navegação por Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.Navigation";
//Importando o tab.Navigantion para ter acesso a screen Home com o TabBar

import Start from '../screens/Start';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddCar from '../screens/AddCar';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Start"
                component={Start}
                options={{ headerShown: false }} //Retira o nome da tela do cabeçalho
                
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={TabRoutes} //screen home está sendo puxado de tab.Navigation
                options={{ headerShown: false}} 
            />

            <Stack.Screen
                name="AddCar"
                component={AddCar}
                options={{ headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}