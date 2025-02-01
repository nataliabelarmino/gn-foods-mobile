import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import TelaPrincipal from './src/Tela/TelaPrincipal';
import Cabecalho from './src/componentes/Cabecalho';
import { Button, View } from 'react-native';
import Acessarconta from './src/Tela/Telalogin';

const Tab = createBottomTabNavigator();


function BottomTab(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: '#FEAD10'},
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',

    }}
    >
      <Tab.Screen name='Home' component={TelaPrincipal} options={{tabBarIcon:({focused, color, size}) =><MaterialCommunityIcons name="home-outline" size={28} color="black" />}} />
      <Tab.Screen name='Busca' component={TelaPrincipal} options={{tabBarIcon:({focused, color, size}) =><Entypo name="magnifying-glass" size={24} color="black" />}}/>
      <Tab.Screen name='Pedidos' component={TelaCriarConta} options={{tabBarIcon:({focused, color, size}) =><Feather name="shopping-bag" size={24} color="black" />}} />
      <Tab.Screen name='Perfil' component={TelaCriarConta} options={{tabBarIcon:({focused, color, size}) =><MaterialIcons name="person-outline" size={28} color="black" />}} />
    </Tab.Navigator>
  );
}





export default function YourApp (){
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acessarconta" screenOptions={{ header: () => <Cabecalho /> }}>
        <Stack.Screen name="Acessarconta" component={Acessarconta} />
        <Stack.Screen name="Criarconta" component={TelaCriarConta} />
        <Stack.Screen name="Telaprinc" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

