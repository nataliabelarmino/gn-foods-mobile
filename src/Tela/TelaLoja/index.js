import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Acessarloja = ({ route, navigation }) => {
    const [carrinho, setCarrinho] = useState([]);

    const loja = route.params || {};

    function adicionarAoCarrinho(produto) {
        setCarrinho((prev) => [...prev, produto]);
    }

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

                    <TouchableOpacity onPress={() => adicionarAoCarrinho(produto)} style={styles.botaoCarrinho}>
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

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
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
                    <Image source={loja.imagem} style={styles.produtoImg} />
                    <Text style={styles.titulo}>{loja.nome}</Text>
                

                    

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
                            onPress={() => navigation.navigate('Carrinho', { carrinho })}
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
    
    titulo:{
        marginTop: 80,
        fontSize: 25, 
        fontWeight: 'bold', 
        textAlign: 'right', 
        textAlign: 'center',

    },
    divisor: {
        height: 1,
        backgroundColor: '#666666',
        marginVertical: 5,
    },

    produtoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
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
        alignItems: 'center',
        
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
        color: '#008000',
        marginRight: 10,
    },

    botaoCarrinho: {
        padding: 10,
    },

    categoriaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
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
