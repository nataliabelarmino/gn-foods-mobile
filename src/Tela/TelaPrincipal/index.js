import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'; // Adicionando Image e FlatList
import { AntDesign } from '@expo/vector-icons';

const mockCategorias = [
  { id: 1, nome: 'Açaí', imagem: 'https://media.istockphoto.com/id/1451849887/pt/foto/acai-bowl-with-banana-granola-and-condensed-milk-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=p' },
  { id: 2, nome: 'Pizzaria', imagem: 'https://media.istockphoto.com/id/496546118/pt/foto/fatia-de-novo-original-pizza-de-pepperoni-italiana-cl%C3%A1ssica-isolada.jpg?s=612x612&w=0&k=20&c=dzS1rDkRFTx0Zs1_GWIYKtFKqj7u2HjFXcCn1tAUQSE=' },
  { id: 3, nome: 'Hamburguês', imagem: 'https://pt-static.z-dn.net/files/d7c/5dd7300460b14c6bcb2b6e1e49332002.jpg' },
  { id: 4, nome: 'Bebidas', imagem: 'https://storage.googleapis.com/domain-images/0c38f198-2db6-46b9-a240-c94df814c742/products/gallery_05af6053-f2ee-42a1-b4d2-6ab32ae0f6fd.jpg' },
  { id: 5, nome: 'Salgados e Snacks', imagem: 'https://media.istockphoto.com/id/1092130320/pt/foto/mixed-brazilian-snack.jpg?s=612x612&w=0&k=20&c=VYKKkXnITNhoJ7e06urCJdWQysp7hTGlX_o14CEzQ4g=' },
];

const mockEstabelecimentos = [
  { id: 1, nome: "VL Açaiteria", imagem: "https://via.placeholder.com/150", descricao: "Melhores pizzas da cidade" },
  { id: 2, nome: "Hamburgueria Top", imagem: "https://via.placeholder.com/150", descricao: "Hambúrgueres artesanais" },
];

const TelaPrincipal = () => {

  const renderCategoria = ({ item }) => (
    <TouchableOpacity style={estilos.categoria}>
      <Image source={{ uri: item.imagem }} style={estilos.imagemCategoria} />
      <Text style={estilos.textoCategoria}>{item.nome}</Text>
    </TouchableOpacity>
  );

  const renderEstabelecimento = ({ item }) => (
    <TouchableOpacity style={estilos.estabelecimento}>
      <Image source={{ uri: item.imagem }} style={estilos.imagemEstabelecimento} />
      <View>
        <Text style={estilos.nomeEstabelecimento}>{item.nome}</Text>
        <Text>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <FlatList
        horizontal
        data={mockCategorias}
        renderItem={renderCategoria}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={mockEstabelecimentos}
        renderItem={renderEstabelecimento}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  categoria: {
    marginRight: 15,
    alignItems: 'center',
  },
  imagemCategoria: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textoCategoria: {
    marginTop: 5,
    textAlign: 'center',
  },
  estabelecimento: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  imagemEstabelecimento: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  nomeEstabelecimento: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaPrincipal;
