import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import TelaPrincipal from './src/Tela/TelaPrincipal';
import Cabecalho from './src/componentes/Cabecalho';

const YourApp = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Lista" // Define a TelaPrincipal como tela inicial
        screenOptions={{ header: () => <Cabecalho /> }}>
        <Stack.Screen name="Lista" component={TelaPrincipal} />
        <Stack.Screen name="Acessar conta" component={TelaLogin} />
        <Stack.Screen name="Criar conta" component={TelaCriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
