import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function TelaAdicionar({ route, navigation }) {
  const [quantidade, setQuantidade] = useState(0);
  const [observacao, setObservacao] = useState('');
  const { produto, onAdicionar } = route.params;

  const aumentaQuantidade = () => {
    if (quantidade < 50) {
      setQuantidade(quantidade + 1)
    }
  }

  const diminuiQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ maxHeight: '100%' }}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" style={styles.setaIcon} />
          </TouchableOpacity>
          <View style={styles.imagemView}>
            <Image source={produto.imagem} style={styles.imagem} />
          </View>
        </View>

        <View style={styles.dadosView}>
          <View>
            <Text style={styles.titulo1}>{produto.nome}</Text>
            <Text>R$ {produto.preco.toFixed(2)}</Text>
            <Text style={styles.titulo2}>Descrição</Text>
            <Text>{produto.descricao}</Text>
            <Text style={styles.titulo2}>Observações</Text>
            <TextInput
              multiline
              numberOfLines={10}
              maxLength={200}
              style={styles.input}
              value={observacao}
              onChangeText={e => setObservacao(e)}
              placeholder='Ex.: Tirar cebola, alface, ect.' />
            <Text style={{ width: '100%', textAlign: 'right', color: 'grey' }}>{observacao.length}/200</Text>
            <View style={styles.quantidadeView}>
              <Text style={[styles.titulo2, { marginTop: 0, marginRight: 10 }]}>Quantidade</Text>
              <TouchableOpacity onPress={diminuiQuantidade}>
                <AntDesign name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.nQuantidade}>{quantidade}</Text>
              <TouchableOpacity onPress={aumentaQuantidade}>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.barraVermelha}>
        <TouchableOpacity onPress={() => {
          if (quantidade > 0) {
            onAdicionar({ ...produto, quantidade });
          }
          navigation.goBack();
        }}>
          <Text style={styles.adicionarTexto}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.adicionarTexto}>Total: R$ {quantidade * produto.preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView: {
    flexDirection: 'row',
    paddingLeft: 5,
    marginTop: 20,
    maxHeight: "30%"
  },
  imagemView: {
    flex: 1,
    alignItems: 'center',
  },
  imagem: {
    maxHeight: "100%",
    resizeMode: 'contain',
    aspectRatio: 1,
    right: 20
  },
  setaIcon: {
    marginRight: 10, // Para deixar a seta mais próxima da imagem
  },
  dadosView: {
    padding: 10,
    marginTop: 25
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 20
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#B3B2B2',
    height: '40%',
    textAlignVertical: 'top'
  },
  quantidadeView: {
    flexDirection: 'row',
    alignItems: 'flex-basis',
    marginTop: 10
  },
  nQuantidade: {
    marginHorizontal: 5,
    fontSize: 18
  },
  barraVermelha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#992800',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  adicionarTexto: {
    color: '#fff'
  }
});