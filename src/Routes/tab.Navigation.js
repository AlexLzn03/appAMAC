//Navegação por Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons';

import Home from '../screens/Home'
import Notice from '../screens/Notice'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{ 
            tabBarActiveTintColor: '#750071',
            tabBarInactiveTintColor: '#F6F3E8',
            tabBarShowLabel: false, 
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#15141D',
                borderTopWidth: 0,
                height: 50,
            }
            }}>
            <Tab.Screen //Este componente será exportado ao Navigation
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="notice"
                component={Notice}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="bell" color={color} size={size}/>,
                    headerShown: false,
                }}

            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size}/>,
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    )
}