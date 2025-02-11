import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { AntDesign, EvilIcons, FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { CarrinhoContext } from '../../providers/context';

function Produto({ obj, onEditQuant }) {
  return (
    <View style={styles.produtoView}>
      <Image source={obj.imagem} style={styles.produtoImg} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{obj.nome}</Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={[styles.produtoTextoSecundario, { textAlign: 'center' }]}>R$ {obj.preco}</Text>
        </View>
      </View>
      <ScrollView style={{ maxWidth: 150 }}>
        <Text style={styles.produtoTextoSecundario}>{obj.descricao}</Text>
      </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onEditQuant(obj.quantidade + 1)}>
          <AntDesign name="pluscircleo" size={20} color="black" />
        </TouchableOpacity>
        <Text>{obj.quantidade}</Text>
        <TouchableOpacity onPress={() => onEditQuant(obj.quantidade - 1)}>
          <AntDesign name="minuscircleo" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function ModalRevisao({ loja, frete, subtotal, aparecer, setAparecer }) {
  const [modalFormasDePagamento, setModalFormasDePagamento] = useState(false);
  const [formaDePagamento, setFormaDePagamento] = useState('pix');

  return (
    <View style={aparecer ? styles.modal : { display: 'none' }}>
      <View style={styles.modalLinha}>
        <TouchableOpacity onPress={() => setAparecer(false)}>
          <AntDesign name="left" size={24} color="#992800" style={styles.setaIcon} />
        </TouchableOpacity>
        <View style={{ width: '100%', alignItems: 'center', }}>
          <Text style={{ fontWeight: 'bold', right: '23', color: "#992800" }}>{modalFormasDePagamento ? "Formas de pagamento:" : "Revise sua compra"}</Text>
        </View>
      </View>
      {
        modalFormasDePagamento ?
          <View style={{ marginLeft: 50, marginBottom: 50 }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, gap: 15, alignItems: 'center' }} onPress={() => setFormaDePagamento('pix')}>
              <FontAwesome6 name="pix" size={24} color="#4cb3ab" />
              <Text style={{ textDecorationLine: formaDePagamento == 'pix' ? 'underline' : 'none' }}>Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, gap: 15, alignItems: 'center' }} onPress={() => setFormaDePagamento('cartao')}>
              <FontAwesome6 name="credit-card" size={24} color="black" />
              <Text style={{ textDecorationLine: formaDePagamento == 'cartao' ? 'underline' : 'none' }}>Cartão</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, gap: 10, alignItems: 'center' }} onPress={() => setFormaDePagamento('dinheiro')}>
              <FontAwesome name="money" size={24} color="black" />
              <Text style={{ textDecorationLine: formaDePagamento == 'dinheiro' ? 'underline' : 'none' }}>Dinheiro</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: 30, marginTop: 25 }}>
              <TouchableOpacity style={{ backgroundColor: '#992800', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }} onPress={() => setModalFormasDePagamento(false)}>
                <Text style={{ color: '#fff' }}>Avançar</Text>
              </TouchableOpacity>
            </View>
          </View> :
          <View>
            <View style={{ marginLeft: 30, marginBottom: 50 }}>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 25 }}>
                <Image source={loja.imagem} style={styles.modalImg} />
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{loja.nome}</Text>
              </View>

              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Forma de pagamento:</Text>

              {formaDePagamento == 'pix' ?
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 15, gap: 15, alignItems: 'center' }} onPress={() => setModalFormasDePagamento(!modalFormasDePagamento)}>
                  <FontAwesome6 name="pix" size={24} color="#4cb3ab" />
                  <Text>Pix</Text>
                  <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>trocar</Text>
                </TouchableOpacity> :
                (formaDePagamento == 'cartao' ?
                  <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 15, gap: 15, alignItems: 'center' }} onPress={() => setModalFormasDePagamento(true)}>
                    <FontAwesome6 name="credit-card" size={24} color="black" />
                    <Text>Cartão</Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>trocar</Text>
                  </TouchableOpacity> :
                  <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 15, gap: 10, alignItems: 'center' }} onPress={() => setModalFormasDePagamento(true)}>
                    <FontAwesome name="money" size={24} color="black" />
                    <Text>Dinheiro</Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>trocar</Text>
                  </TouchableOpacity>)}

              <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Resumo de valores:</Text>
              <Text>Frete: R$ {frete}</Text>
              <Text>SubTotal: R$ {subtotal}</Text>

              <Text style={{ marginTop: 15, alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15 }}>Total:</Text> R$ {(frete + subtotal).toFixed(2)}</Text>

              <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: 30, marginTop: 25 }}>
                <TouchableOpacity style={{ backgroundColor: '#992800', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}>
                  <Text style={{ color: '#fff' }}>Fazer pedido</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      }
    </View >
  );
}

export default function TelaAdicionar({ route, navigation }) {
  const { loja } = route.params;
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const [localizacoes, setLocalizacoes] = useState(["Rua Sebastião Benjamin, 34 - Areial /PB"]);
  const [aparecerModalRevisao, setAparecerModalRevisao] = useState(false);
  let subtotal = carrinho.reduce((soma, item) => soma + (parseFloat(item.preco) * parseInt(item.quantidade)), 0);
  const frete = 4.99;

  const editQuantidade = (index, novaQuantidade) => {
    let novaListaProdutos = [...carrinho];

    if (novaQuantidade == 0) {
      novaListaProdutos.splice(index, 1);
      setCarrinho(novaListaProdutos);
      return;
    }

    novaListaProdutos[index] = { ...novaListaProdutos[index], quantidade: novaQuantidade };
    setCarrinho(novaListaProdutos);
  }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="#992800" style={styles.setaIcon} />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: "#992800" }}>Carrinho ({carrinho.length})</Text>
      </View>

      <View style={styles.linha}>
        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>{loja.nome}</Text>
        <Image source={loja.imagem} style={styles.lojaImg} />
      </View>

      <View style={{ marginVertical: 15 }}>
        {carrinho.map((produto, indx) => <Produto key={indx} obj={produto} onEditQuant={novaQuantidade => editQuantidade(indx, novaQuantidade)} />)}
      </View>

      <View style={styles.viewLocalizacao}>
        <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
          <TouchableOpacity style={styles.botaoLocalizacao}>
            <EvilIcons name="location" size={24} color="black" />
            <Text>Usar localizaçao atual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoLocalizacao}>
            <EvilIcons name="location" size={24} color="black" />
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Endereços cadastrados:</Text>
          <View style={styles.inputPesquisa}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput style={styles.input} placeholder='Pesquisa' />
          </View>
          {localizacoes.map((local, indx) => <View key={indx} style={{ flexDirection: 'row' }}><EvilIcons name="location" size={24} color="black" /><Text>{local}</Text></View>)}
        </View>
      </View>

      <View style={styles.viewValor}>
        <Text style={{ color: "#992800", fontWeight: 'bold' }}>Valor da compra</Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Text><Text style={{ color: "#992800", fontWeight: 'bold' }}>SubTotal:</Text> R$ {subtotal}</Text>
          <Text><Text style={{ color: "#992800", fontWeight: 'bold' }}>Frete:</Text> R$ {frete}</Text>
          <Text><Text style={{ color: "#992800", fontWeight: 'bold' }}>Total:</Text> R$ {(subtotal + frete).toFixed(2)}</Text>
        </View>
      </View>

      <View style={{ width: '100%', alignItems: 'flex-end', padding: 5 }}>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#992800', paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => setAparecerModalRevisao(true)}>
          <Text style={{ color: '#fff' }}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <ModalRevisao loja={loja} frete={frete} subtotal={subtotal} aparecer={aparecerModalRevisao} setAparecer={setAparecerModalRevisao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  },
  lojaImg: {
    aspectRatio: 1,
    resizeMode: 'contain',
    maxHeight: 20
  },
  produtoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 5,
    height: 80,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10
  },
  produtoImg: {
    resizeMode: 'contain',
    maxWidth: 50,
    maxHeight: 50,
    alignSelf: 'center'
  },
  produtoTextoSecundario: {
    color: 'grey',
    fontSize: 13
  },
  viewLocalizacao: {
    borderWidth: 0.8,
    margin: 5,
    padding: 15
  },
  botaoLocalizacao: {
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    gap: 5
  },
  inputPesquisa: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderWidth: 1,
    gap: 5,
    borderRadius: 25,
    marginVertical: 5,
    width: 200,
    alignItems: 'center'
  },
  input: {
    height: 35,
    width: 150,
    textAlignVertical: 'end'
  },
  viewValor: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    height: 70,
    justifyContent: 'space-between'
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: '50%',
    left: '50%',
    transform: [{ translateX: "-55%" }, { translateY: "-50%" }],
    maxWidth: '99%',
    marginHorizontal: "5%",
    borderWidth: 1,
    borderRadius: 10
  },
  modalLinha: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalImg: {
    maxHeight: 80,
    maxWidth: 80,
    borderRadius: 100,
    borderWidth: 1
  }
});