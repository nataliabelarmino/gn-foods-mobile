import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../img/logogn.png'; 
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
        <View style={styles.lineTop}>
          <StatusBar />
          <Image source={Logo} style={styles.logo}></Image>
        </View>
  );
}

const styles = StyleSheet.create({
  lineTop: {
    width: '100%',
    backgroundColor: '#FEAD10', 
    paddingTop: 50
  },
  logo: {
    width: 200,
    height: 50,
    right:28,
  },
  
});
