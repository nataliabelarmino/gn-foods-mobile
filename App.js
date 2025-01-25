import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import TelaPrincipal from './src/Tela/TelaPrincipal';
import Cabecalho from './src/componentes/Cabecalho';
import { Button, View } from 'react-native';

export default function YourApp (){
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acessarconta" screenOptions={{ header: () => <Cabecalho /> }}>
        <Stack.Screen name="Acessarconta" component={TelaLogin} />
        <Stack.Screen name="Criarconta" component={TelaCriarConta} />
        <Stack.Screen name="Telaprinc" component={TelaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

