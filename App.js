import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import Cabecalho from './src/componentes/Cabecalho';

const YourApp = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => <Cabecalho /> }}>
        <Stack.Screen name="Acessar conta" component={TelaLogin} />
        <Stack.Screen name="Criar conta" component={TelaCriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default YourApp;