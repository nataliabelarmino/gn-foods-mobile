import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../img/logogn.png'; // Verifique o caminho da sua imagem!

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho com linha grossa e logo dentro */}
      <View style={styles.header}>
        <View style={styles.lineTop}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container ocupe toda a tela
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Garante o espaçamento entre os elementos (cabeçalho e barra inferior)
    width: '100%'
  },
  header: {
    width: '100%',
  },
  lineTop: {
    width: '100%',
    height: 70, // Linha grossa, altura ajustada
    backgroundColor: '#FEAD10', // Cor da linha superior
    alignItems: 'center', // Centraliza a imagem horizontalmente
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'flex-start', // Alinha a imagem à esquerda
    
  },
  logo: {
    width: 100,
    height: 200,
    resizeMode: 'contain',    
  },
  
});
