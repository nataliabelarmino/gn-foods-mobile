import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



import TelaLogin from './src/Tela/Telalogin';
import TelaCriarConta from './src/Tela/TelaCriarConta';
import TelaPrincipal from './src/Tela/TelaPrincipal';
import TelaLoja from './src/Tela/TelaLoja';
import TelaAdicionar from './src/Tela/TelaAdicionar';
import TelaCarrinho from './src/Tela/TelaCarrinho';
import TelaPerfil from './src/Tela/TelaPerfil';
import Cabecalho from './src/componentes/Cabecalho';
import { Button, View } from 'react-native';
import Acessarconta from './src/Tela/Telalogin';
import { CarrinhoContextoProvider } from './src/providers/context';

export default function YourApp() {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  function BottomTab() {
    return (
      <Tab.Navigator
        screenOptions={{


          header: () => <Cabecalho />,

          tabBarStyle: { backgroundColor: '#FEAD10' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name='Home' component={NavStackHome} options={{ tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="home-outline" size={28} color={color} /> }} />
        <Tab.Screen name='Pedidos' component={TelaPrincipal} options={{tabBarIcon:({focused, color, size}) =><MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black"/>}}/>
        <Tab.Screen name='Perfil' component={TelaPerfil} options={{ tabBarIcon: ({ focused, color, size }) => <MaterialIcons name="person-outline" size={28} color={color} /> }} />
      </Tab.Navigator>
    );
  }

  const StackHome = createStackNavigator();

  function NavStackHome() {
    return (
      <StackHome.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name='ListaLojas' component={TelaPrincipal} />
        <Tab.Screen name='Loja' component={TelaLoja} />
        <Tab.Screen name='Adicionar' component={TelaAdicionar} />
        <Tab.Screen name='Carrinho' component={TelaCarrinho} />
      </StackHome.Navigator>
    )
  }


  return (
    <CarrinhoContextoProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Acessarconta"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Acessarconta" component={Acessarconta} />
          <Stack.Screen name="Criarconta" component={TelaCriarConta} />

          <Stack.Screen name="Telaprinc" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoContextoProvider>

  );
};

//<Stack.Screen name="Pedidos" component={TelaPedidos} />