import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Logo from './img/looogoggn.png';


export default function HomeScreen() {
    return (
      <View style={styles.container}>
        {/* Cabeçalho com linhas e logo */}
        <View style={styles.header}>
          <View style={styles.lineTop} />
          <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
          </View>
          <View style={styles.lineBottom} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineTop: {
      width: '100%',
      height: 5,
      backgroundColor: 'yellow',
    },
    logoContainer: {
      position: 'absolute',
      top: '10%',
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    lineBottom: {
      width: '100%',
      height: 5,
      backgroundColor: 'yellow',
      position: 'absolute',
      bottom: 0,
    },
  });
  

