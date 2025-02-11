import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CarrinhoContext } from '../../providers/context';

const Acessarloja = ({ route, navigation }) => {
    const { carrinho, addProduto } = useContext(CarrinhoContext);
    const loja = route.params || {};

    function Produto({ produto }) {
        return (
            <>
                <View style={styles.divisor} />
                
                <View style={styles.produtoContainer}>
                    <Image source={produto.imagem} style={styles.produtoImagem} />

                    <View style={styles.produtoInfo}>
                        <Text style={styles.nomeProd}>{produto.nome}</Text>
                        <Text style={styles.descricao}>{produto.descricao}</Text>
                    </View>

                    <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Adicionar', { produto, onAdicionar: (produto) => addProduto(produto) });
                    }} style={styles.botaoCarrinho}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.divisor} />
            </>
        );
    }

    function Categoria({ categoria }) {
        return (
            <View>
                <Text style={styles.categoriaTitulo}>{categoria.nome}</Text>
                {categoria.produtos.map((produto, index) => (
                    <Produto produto={produto} key={index} />
                ))}
            </View>
        );
    }

    const total = carrinho.reduce((acc, item) => acc + (parseFloat(item.preco) * parseInt(item.quantidade)), 0);
    const quantidade = carrinho.length;

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.lojaContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={24} color="black" style={styles.setaIcon} />
                        </TouchableOpacity>
                        <Image source={loja.imagem} style={styles.produtoImg} />
                        <Text style={styles.titulo}>{loja.nome}</Text>
                    </View>
                
                    {loja.categorias.map((categoria, index) => (
                        <Categoria categoria={categoria} key={index} />
                    ))}
                </ScrollView>

                {quantidade > 0 && (
                    <View style={styles.carrinhoContainer}>
                        <Text style={styles.totalTexto}>
                            Total: R$ {total.toFixed(2)} / {quantidade} {quantidade > 1 ? 'Itens' : 'Item'}
                        </Text>

                        <TouchableOpacity
                            style={styles.botaoVerCarrinho}
                            onPress={() => navigation.navigate('Carrinho', { carrinho, loja })}
                        >
                            <Text style={styles.textoBotao}>Ver Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    lojaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 10,
    },

    titulo: {
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'left', 
        marginLeft: 50,
        marginTop: 10,
    },

    setaIcon: {
        marginRight: 10, // Para deixar a seta mais próxima da imagem
    },

    divisor: {
        height: 1,
        backgroundColor: '#666666',
        marginVertical: 5,
    },

    produtoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        justifyContent: 'space-between',
    },

    produtoImagem: {
        width: 60,
        height: 60,
        borderRadius: 8,
      
    },

    produtoImg: {
        width: 60,
        height: 60,
        borderRadius: 8,
        left: 28,
    },
    
    produtoInfo: {
        flex: 1,
        marginLeft: 10,
    },

    nomeProd: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    descricao: {
        fontSize: 14,
        color: '#666',
        flexWrap: 'wrap',
    },

    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10,
    },

    botaoCarrinho: {
        padding: 10,
    },

    categoriaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 20,
        color: "#992800",
    },

    carrinhoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    totalTexto: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    botaoVerCarrinho: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Acessarloja;
