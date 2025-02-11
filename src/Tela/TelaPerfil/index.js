import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, EvilIcons, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import logo from '../../img/logogn.png'; // Ajuste o caminho conforme necessário

export default function TelaPerfil({ navigation }) {
  const [dados, setDados] = useState({ nome: "João Pedro da Silva", email: "joaopedro@gmail.com", telefone: "(83) 9883-7765", endereco: "Rua Sebastião Benjamin, 34 - Areial /PB" });

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20, paddingLeft: 20, borderBottomWidth: 1, marginBottom: 10 }}>
        <Text style={styles.tituloPrincipal}>Meu perfil</Text>
        <View style={styles.dadosView}>
          <TouchableOpacity style={styles.imageUploader}>
            <AntDesign name="camerao" size={24} color="grey" />
            <Text style={{ color: 'grey', textAlign: 'center' }}>Adicionar foto ao perfil</Text>
          </TouchableOpacity>
          <View style={{ justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{dados.nome}</Text>
              <Text style={{ color: 'grey' }}>{dados.email}</Text>
              <Text style={{ color: 'grey' }}>{dados.telefone}</Text>
            </View>
            <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
              <EvilIcons name="location" size={24} color="black" />
              <Text>{dados.endereco}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.secao} onPress={() => 0}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FontAwesome5 name="user-edit" size={24} color="black" />
          <Text>Dados pessoais</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.secao} onPress={() => 0}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text>Endereços</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.secao} onPress={() => 0}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FontAwesome name="star-o" size={24} color="black" />
          <Text>Avaliações</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.secao} onPress={() => 0}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FontAwesome name="heart-o" size={24} color="black" />
          <Text>Favoritos</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secao: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 5
  },
  tituloPrincipal: {
    fontWeight: 'bold'
  },
  imageUploader: {
    borderRadius: 100,
    padding: 20,
    height: 125,
    width: 125,
    gap: 5,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dadosView: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 15
  }
});
