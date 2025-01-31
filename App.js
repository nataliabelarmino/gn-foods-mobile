import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import TelaPrincipal from './src/Tela/TelaPrincipal';
import Cabecalho from './src/componentes/Cabecalho';
import { Button, View } from 'react-native';
import Acessarconta from './src/Tela/Telalogin';

const Tab = createBottomTabNavigator();


function BottomTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={TelaPrincipal} options={{tabBarIcon:({focused, color, size}) =><Entypo name="home" size={24} color="black" />}} />
      <Tab.Screen name='Pedidos' component={TelaCriarConta} options={{tabBarIcon:({focused, color, size}) =><Feather name="shopping-bag" size={24} color="black" />}} />


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

