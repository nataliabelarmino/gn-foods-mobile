import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../img/logogn.png'; 

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
    marginTop: 10,
  },
  lineTop: {
    width: '100%',
    height: 70, 
    backgroundColor: '#FEAD10', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    
  },
  logo: {
    width: 200,
    height: 300,
    resizeMode: 'contain',    
  },
  
});
